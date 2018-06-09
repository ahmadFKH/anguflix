const express = require('express');
const router = express.Router();

const  _url = 'https://anguflix-api.herokuapp.com/api/movies';

/* GET api listing. */
router.get(_url+':movie', (req, res) => {
  res.send();
});

module.exports = router;
