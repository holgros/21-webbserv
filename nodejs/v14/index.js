let express = require("express");  // INSTALLERA MED "npm install express" I KOMMANDOTOLKEN
let app = express();
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
    database: "webbserverprogrammering", // ÄNDRA TILL NAMN PÅ ER EGEN DATABAS
});

app.use(express.json());

app.put('/users/:id', function(req, res) {
    //data ligger i req.body. Kontrollera att det är korrekt.
    if (isValidUserData(req.body)) {
        //skriv till databas
        //kod här för att hantera anrop...
        let sql = `UPDATE users `;
        if (req.body.firstname && req.body.lastname) {  // båda fälten finns med
            sql += `SET firstname = '${req.body.firstname}', lastname = '${req.body.lastname}'`;
        }
        else {
            if (req.body.firstname) {  // endast firstname finns med
                sql += `SET firstname = '${req.body.firstname}'`;
            }
            else {  // endast lastname finns med
                sql += `SET lastname = '${req.body.lastname}'`;
            }
        }
  	    sql += ` WHERE id = ${req.params.id}`;
        console.log(sql);

        con.query(sql, function(err, result, fields) {
            if (err) {
                console.log(err);
                res.status(500).send("Fel i databasanropet!");
                throw err;
            }
            res.status(200).send(); // OK
        });
    } else {
        res.status(422).send("Måste innehålla firstname eller lastname!");
    }
});
function isValidUserData(body) {
    // åtminstone endera av firstname och lastname måste finnas med
    return body && (body.firstname || body.lastname);
}
