const tableName = 'pojso'

module.exports = {
  async up(knex) {
    // Create the table
    await knex.schema.createTable(tableName, (table) => {
      // Auto-incrementing non-nullable unsigned integer primary key "id" field
      table.increments('id').primary()
       // Simple fields
      table.string('name').notNullable()
      // Indexes
      table.index(['name'])
      // Unique indexes
      table.unique(['name'])
    })
  },

  async down(knex) {
    // Drop the table
    await knex.schema.dropTable(tableName)
  }
}
