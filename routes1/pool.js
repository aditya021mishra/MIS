var mysql=require("mysql");
var express = require("express");

var pool=mysql.createPool({

    host:'localhost',
    port:3306,
    user:'root',
    password:'1234',
    database:'mis',
    connectionLimit:100,
    insecureAuth:true,
    multipleStatements:true

});


module.exports=pool;