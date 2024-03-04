import vine from '@vinejs/vine'

/**
 * Validates the information's creation action
 */
export const createInformationValidator = vine.compile(
  vine.object({
    mother: vine.string().optional(),
    father: vine.string().optional(),
    sign: vine.string().optional(),
    height: vine.number().optional(),
    weight: vine.number().optional(),
    gender: vine.string().optional(),
    blood_type: vine.string().optional(),
    color: vine.string().optional(),
    cellphone: vine.string().optional(),
    telephone: vine.string(),
    birthday: vine.date({ formats: ['DD/MM/YYYY'] }),
    rg: vine.string().optional(),
  })
)

/**
 * Validates the information's update action
 */
export const updateInformationValidator = vine.compile(
  vine.object({
    mother: vine.string().optional(),
    father: vine.string().optional(),
    sign: vine.string().optional(),
    height: vine.number().optional(),
    weight: vine.number().optional(),
    gender: vine.string().optional(),
    blood_type: vine.string().optional(),
    color: vine.string().optional(),
    cellphone: vine.string().optional(),
    telephone: vine.string().optional(),
    birthday: vine.date({ formats: ['DD/MM/YYYY'] }).optional(),
    rg: vine.string().optional(),
  })
)
