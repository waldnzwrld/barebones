const Pojso = require('../models/pojso');

// Get a Plain Ol JS Object.
exports.get_pojso = function(req, res) {
    Pojso.where({id: req.params.id}).fetch().then(function(pojso) {
        res.send(pojso.get('name'));
    });
};
