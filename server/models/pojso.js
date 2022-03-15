const Model = require('../db')

class Pojso extends Model{
    get tableName() {
        return 'pojso';
    }
}

module.exports =  Pojso;
