const { response } = require('express'); 
var express = require('express');
var router = express.Router();
var pool = require("./pool");
const { PayloadTooLarge } = require("http-errors");
const { Dropzone } = require("dropzone");
var upload=require("./multer");


router.get("/adminl", function (req, res) {
  res.render("adminlogin", { msg: "" });
});

router.post("/fetchadlogin", function (req, res) {
  pool.query(
    "select * from adminnlogin where email=? and password=?",
    [req.body.email, req.body.password],
    function (err, result) {
      if (err) {
        console.log(err);
        res.render("adminlogin", { msg: "server not responding" });
      } else {
        if (result.length == 1) {
          console.log(result.length);
          res.render("check");
        } else {
          res.render("adminlogin", { msg: "Invalid Email id/Password" });
        }
      }
    }
  );
});

router.post('/upload',upload.single('pdf'),function(req,res){
  pool.query("insert into pdf_file(pdf) values('$pdf')",function(error,result){
     if(error)
     {
       console.log('Error:',error)
       res.render('check')
      }
     else
     {
      res.render('check')
     }
  });
});

  
module.exports=router;

