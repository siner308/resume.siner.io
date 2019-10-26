const express = require('express');
const ip = require('ip');
const router = express.Router();
const address = ip.address();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { host: address});
});

module.exports = router;
