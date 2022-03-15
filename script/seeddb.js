#!/usr/local/bin/node

const Pojso = require('../server/models/pojso');

Pojso.forge({id: 1}).fetch().then(function(pojso) {
        if (!pojso) {
            new Pojso({name: "BareBones"}).save().then(function(model) {
                console.log(`seeded db with ${model.toJSON()}`)
                process.exit(0)
            });
        } else {
            console.log(`db already seeded with ${pojso.get('name')}`);
            process.exit(0)
        }
    });
