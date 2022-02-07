// koppla upp till databas, https://www.w3schools.com/nodejs/nodejs_mysql.asp
var mysql = require('mysql');   // installera med npm

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webbserverprogrammering"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // skicka query, https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
  con.query("SELECT * FROM elever", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    // hantera enstaka attribut, t.ex.:
    console.log(result[0].fornamn);
  });
});