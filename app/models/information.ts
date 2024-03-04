import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Information extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column()
  declare mother: string | null

  @column()
  declare father: string | null

  @column()
  declare sign: string | null

  @column()
  declare height: number | null

  @column()
  declare weight: number | null

  @column()
  declare gender: string | null

  @column()
  declare blood_type: string | null

  @column()
  declare color: string | null

  @column()
  declare cellphone: string | null

  @column()
  declare telephone: string

  @column()
  declare birthday: Date

  @column()
  declare rg: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
