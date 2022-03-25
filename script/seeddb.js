#!/usr/local/bin/node

const Pojso = require('../server/models/pojso');

Pojso.where({id: 1}).fetch().then(function(pojso) {
        console.log(`db already seeded with ${pojso.get('name')}`);
        process.exit(0)
    }).catch(function() {
        new Pojso({name: "BareBones"}).save().then(function(pojso) {
          console.log(`seeded db with Plain Ol JSON Object: {id: ${pojso.get('id')}, name: ${pojso.get('name')}`);
          process.exit(0)
        }).catch(function(err) {
          console.log("error seeding db", err.message);
          process.exit(1)
        })
    });
