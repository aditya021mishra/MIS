var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cnt', function(req, res, next) {
  res.render('Contact');
});

router.get('/abt', function(req, res, next) {
  res.render('about');
});

router.get('/almni', function(req, res, next) {
  res.render('Alumini');
});

router.get('/idx', function(req, res, next) {
  res.render('indexx');
});

router.get('/clubb', function(req, res, next) {
  res.render('clubs');
});

router.get('/procdur', function(req, res, next) {
  res.render('procedure');
});

router.get('/cntform', function(req, res, next) {
  res.render('contactform');
});

router.get('/gnl_instn', function(req, res, next) {
  res.render('general_instruction');
});

router.get('/car_aw_prgrm', function(req, res, next) {
  res.render('career_awareness_program');
});

router.get('/lgn', function(req, res, next) {
  res.render('login');
});

router.get('/val_eth', function(req, res, next) {
  res.render('value_ethics');
});

router.get('/skil', function(req, res, next) {
  res.render('skill');
});

router.get('/ns', function(req, res, next) {
  res.render('nss');
});

router.get('/sp_clb', function(req, res, next) {
  res.render('sports_club');
});

router.get('/cltr_clb', function(req, res, next) {
  res.render('cultural_club');
});

router.get('/scag', function(req, res, next) {
  res.render('sca');
});

router.get('/web', function(req, res, next) {
  res.render('webteam');
});

router.get('/pcon', function(req, res, next) {
  res.render('pcon_cp');
});

router.get('/tech', function(req, res, next) {
  res.render('tech_main');
});

router.get('/notic', function(req, res, next) {
  res.render('notice');
});

router.get('/hom', function(req, res, next) {
  res.render('Home');
});

router.get('/tpo', function(req, res, next) {
  res.render('Tpo');
});

module.exports = router;