import vine from '@vinejs/vine'

/**
 * Validates the address's creation action
 */
export const createAddressValidator = vine.compile(
  vine.object({
    postcode: vine.string(),
    street: vine.string(),
    number: vine.number(),
    neighborhood: vine.string().optional(),
    city: vine.string(),
    state: vine.string(),
  })
)

/**
 * Validates the address's update action
 */
export const updateAddressValidator = vine.compile(
  vine.object({
    postcode: vine.string().optional(),
    street: vine.string().optional(),
    number: vine.number().optional(),
    neighborhood: vine.string().optional(),
    city: vine.string().optional(),
    state: vine.string().optional(),
  })
)
