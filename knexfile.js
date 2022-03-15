const { POSTGRES_USER, POSTGRES_PASSWORD } = process.env
const POSTGRES_PORT = parseInt(process.env.POSTGRES_PORT, 10) || undefined


module.exports = {
    client: 'postgresql',

    pool: {
        min: 2,
        max: 10
    },

    migrations: {
        tableName: 'barebones',
        directory: './server/db/migrations',
        stub: './server/db/_migration.stub.js'
    },
    connection: {
      database: 'barebones',
      ...(POSTGRES_USER && { user: POSTGRES_USER }),
      ...(POSTGRES_PASSWORD && { password: POSTGRES_PASSWORD }),
      ...(POSTGRES_PORT && { port: POSTGRES_PORT })
    },

}
