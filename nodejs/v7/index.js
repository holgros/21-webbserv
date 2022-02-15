const express = require("express");
const mysql = require("mysql");
const fs = require("fs");
const app = express();
app.listen(3000);
console.log("Webbservern körs på port 3000.");
con = mysql.createConnection({
    host: "localhost",      // databas-serverns IP-adress
    user: "root",           // standardanvändarnamn för XAMPP
    password: "",           // standardlösenord för XAMPP
    database: "webbserverprogrammering" // ÄNDRA TILL NAMN PÅ ER EGEN DATABAS
});

// Visa hela tabellen som ett JavaScript-objekt
app.get("/table", function(req, res) {
    // skicka query till databasen - samma som ovan
    con.query("SELECT * FROM elever", function(err, result, fields) {
        if (err) throw err;     // felhantering
        console.log(result);    // skriv ut resultatet
        res.send(result);
    });
});

// visa formulär på rotsidan
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/template.html");
});

// processa formulärdata
app.use(express.urlencoded({extended: true}));
app.post("/processForm", function(req, res) {
    // skicka query till databasen, formulerat utifrån vad klienten har skickat
    con.query(`SELECT * FROM elever WHERE fornamn='${req.body.fornamn}'`, function(err, result, fields) {
        if (err) throw err; // felhantering
        fs.readFile("template.html", "utf-8", function(err, data) {
            if (err) throw err; // felhantering
            let htmlArray = data.split("<!--NODE-->");
            let output = htmlArray[0];  // fortsätt visa det ursprungliga formuläret
            if (result.length == 0) {
                output += `<p>Det finns ingen elev med förnamnet ${req.body.fornamn}.`;
            }
            else {
                output += `<p>${req.body.fornamn} har efternamnet ${result[0].efternamn}.</p>`;
            }
            output += htmlArray[1]; // skriv ut sluttaggarna </body></html>
            res.send(output);       // skriv output till webbsidan
        });
    });
});