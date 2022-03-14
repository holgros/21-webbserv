let app = require("express")();  // INSTALLERA MED "npm install express" I KOMMANDOTOLKEN
app.listen(3000);
console.log("Servern körs på port 3000");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/dokumentation.html");
});

const mysql = require("mysql"); // INSTALLERA MED "npm install mysql" I KOMMANDOTOLKEN
con = mysql.createConnection({
    host: "localhost",      // databas-serverns IP-adress
    user: "root",           // standardanvändarnamn för XAMPP
    password: "",           // standardlösenord för XAMPP
    database: "webbserverprogrammering" // ÄNDRA TILL NAMN PÅ ER EGEN DATABAS
});



// grundläggande exempel - returnera en databastabell som JSON
app.get("/users", function(req, res) {
    let sql = "SELECT * FROM users";    // ÄNDRA TILL NAMN PÅ ER EGEN TABELL (om den heter något annat än "users")
    // TODO: Hantera query-parametrar (senare i veckan)
    
    // skicka query till databasen
    con.query(sql, function(err, result, fields) {
        res.send(result);
    });
});

// route-parameter, dvs. filtrera efter ID i URL:en
app.get("/users/:id", function(req, res) {
    // Värdet på id ligger i req.params
    let sql = "SELECT * FROM users WHERE id=" + req.params.id;
    console.log(sql);
    // skicka query till databasen
    con.query(sql, function(err, result, fields) {
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.sendStatus(404);    // 404=not found
        }
    });
});
