require('dotenv').load();

var express = require('express');
var router = express.Router();
var pg = require('pg');

// var conString = "postgres://postgres:nosoup4U@localhost/friender";
var conString = (
                  "postgres://" +
                  process.env.DB_USER + ":" +
                  process.env.DB_PASS + "@" +
                  process.env.DB_HOST + "/" +
                  process.env.DB_NAME
                );
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next){
  if (req.signedCookies.user) {
    console.log('Signed In');
    res.render('index', {userEmail: req.signedCookies.user})
  }
  else {
    console.log('Not Signed In');
    res.render('index')
  }
});

router.get('/logout', function(req, res, next){
  res.cookie('user');
  res.redirect('/')
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {

  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('INSERT INTO users (username, gender) VALUES ($1, $2)', [req.body.userEmail, req.body.userGender], function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      //output: 1
    });
  });

  res.cookie('user', req.body.userEmail, { signed: true }).redirect('/');
})

module.exports = router;
