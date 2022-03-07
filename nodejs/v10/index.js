let app = require("express")(); // INSTALLERA MED "npmm install express" i kommandotolken
app.listen(3000);
console.log("Servern körs på port 3000");

// börja med att returnera ett hårdkodat objekt
let users = [
    {
        firstname: "Holger",
        lastname: "Rosencrantz"
    },
    {
        firstname: "Kalle",
        lastname: "Anka"
    }
]

app.get("/", function(req, res) {
    res.send("Välkommen till rotsidan. Dokumentation om det här API:et kommer strax...");
});

app.get("/users", function(req, res) {
    res.send(users);
    console.log(req.query); // skriver ut query-parametrar på konsolen
});