var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect("/catalog");
});
router.get('/cool', (req, res, next) => {
  res.send("You're so cool");
});

module.exports = router;
