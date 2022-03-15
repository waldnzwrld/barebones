var express = require('express');
var router = express.Router();
var pojsoRouter = require('./pojsoRouter');


router.get('/', function (req, res) {
    res.status(200).send('Use the API Luke');
})

router.use('/pojso', pojsoRouter);


module.exports = router;
