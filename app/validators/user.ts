import { Database } from '@adonisjs/lucid/database'
import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

/**
 * Check if the value is already being used
 */
async function isBeingUsed(db: Database, value: string, field: FieldContext) {
  const user = await db.from('users').where(field.name.toString(), value).first()
  return !user
}

/**
 * Validates the user's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().unique(isBeingUsed),
    password: vine.string().minLength(6),
    cpf: vine.string().fixedLength(14).unique(isBeingUsed),
  })
)

/**
 * Validates the user's update action
 */
export const updateUserValidator = vine.compile(
  vine.object({
    name: vine.string().optional(),
    email: vine.string().unique(isBeingUsed).optional(),
    password: vine.string().minLength(6).optional(),
    cpf: vine.string().fixedLength(14).unique(isBeingUsed).optional(),
  })
)
