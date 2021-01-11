var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.get('/new', function(req, res, next) {
  res.render('form')
});

router.post('/new', function(req, res, next) {
  //accesses contents of form inside req.body() and creates a new message. 
  messages.push({text: req.body.text, user: req.body.name, added: new Date()});
  res.redirect('/')
});

module.exports = router;
