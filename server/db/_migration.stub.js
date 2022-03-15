const tableName = "NAME_OF_TABLE"
// https://devhints.io/knex#schema for a quick reference
module.exports = {
  async up(knex) {
    await knex.schema.createTable(tableName, (table) => {
         // Auto-incrementing non-nullable unsigned integer primary key "id" field
        table.increments()
        // Simple fields
        table.uuid('id').notNullable().primary()
        table.string("name").notNullable()
        table.decimal("decimal").notNullable()
        table.float("float").notNullable()
        table.integer("integer").notNullable()
        table.bigInteger("bigInteger").notNullable()
        table.boolean("boolean").notNullable()
        table.date("date").notNullable()
        table.dateTime("dateTime").notNullable()
        table.time("time").notNullable()
        table.timestamp("timestamp").notNullable()
        table.json("json").notNullable()


        // Fields using native enum types
        table.enum('cause', ['VALUE1', 'VALUE2'], {
            useNative: true,
            enumName: 'enum_name'
            })
            .notNullable()

        // Indexes
        table.index(['name'])

        // Unique indexes
        table.unique(['name'])

        // Foreign keys
        table.integer('parent_id').unsigned().references('id').inTable('parent_table')


    })
  },

  async down(knex) {
    // Drop the table
    await knex.schema.dropTable(tableName)
  }
}
