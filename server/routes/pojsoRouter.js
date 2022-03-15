const express = require('express');
const router = express.Router();
const pojsoController = require('../controllers/pojsoController');


router.get('/', function (req, res) {
  res.send('Barebones');
})

router.get('/:id', pojsoController.get_pojso);

module.exports = router;
