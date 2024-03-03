import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'information'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('mother').nullable()
      table.string('father').nullable()
      table.string('sign').nullable()
      table.decimal('height').nullable()
      table.decimal('weight').nullable()
      table.string('gender').nullable()
      table.string('blood_type').nullable()
      table.string('color').nullable()
      table.string('cellphone', 20).nullable()
      table.string('telephone', 20).notNullable()
      table.date('birthday').notNullable()
      table.string('rg').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
