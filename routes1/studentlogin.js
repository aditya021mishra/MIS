const { response } = require('express'); 
var express = require('express');
var router = express.Router();
var pool = require("./pool");
const { PayloadTooLarge } = require("http-errors");

router.get("/stnlogin", function (req, res) {
  res.render("studentlogin", { msg: "" });
});

router.post("/fetchlogin", function (req, res) {
  pool.query(
    "select * from stdntlogin where Registration_Number=? and Password=?",
    [req.body.registrationnumber, req.body.password],
    function (err, result) {
      if (err) {
        console.log(err);
        res.render("studentlogin", { msg: "server not responding" });
      } else {
        if (result.length == 1) {
          console.log(result.length);
          res.render("indexx");
        } else {
          res.render("studentlogin", { msg: "Invalid Registration No./Password" });
        }
      }
    }
  );
});

/*router.get('/displaydata', function(req, res, next) {
  pool.query("select * from stdntlogin", function (err, data, fields) {
    if (err) throw err;
    res.render("display", { title: 'Details', userData: data});

  });
});*/

  
  module.exports=router;

