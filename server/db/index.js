const config = require('../../knexfile')
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

const Model = bookshelf.Model
module.exports = Model;
