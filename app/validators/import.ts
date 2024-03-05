import vine from '@vinejs/vine'

/**
 * Validates the import's creation action
 */
export const importValidator = vine.compile(
  vine.object({
    data: vine.file({
      size: '2mb',
      extnames: ['json'],
    }),
  })
)
