var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const item = new mongoose.Schema({
  name: String,
  isSomething: Boolean
});
const Model = mongoose.model('Model', item);


/* GET home page. */
router.get('/', function(req, res, next) {
  const id = req.params.id;

  const body = req.body;

  const name = req.query.name

  res.send({info: 'envoyé'});

  res.status(403).send({info: 'interdit'});
  
  res.render('index', { title: 'Express' });
});


module.exports = router;
