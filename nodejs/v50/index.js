/*
// Kör en enkel webbserver på localhost:3000 efter att du har installerat Node enligt instruktioner på Classroom
const http = require("http");   // http är en inbyggd klass i Node för att köra webbservrar
const app = http.createServer(function(req, res) {  // definierar en funktion som körs när en klient ansluter till servern
    res.end("<h1>Hallå NodeJS!</h1>"); // skickar ett svar till klienten
});
app.listen(3000);   // STARTAR SERVERN
console.log("Kör servern på localhost:3000.");
// läs mer på t.ex. https://www.w3schools.com/nodejs/
// Tips: installera nodemon för att slippa starta om servern varje gång man gör en ändring
*/

// under merparten av vintern kommer vi att använda ett lite mer sofistikerat ramverk för webbsevrar - Express - istället för http¨
// måste först installera express genom att skriva "npm install express" i kommandotolken
const express = require("express");    // "require" betyder att man importerar en modul, i det här fallet modulen express
const app = express();  // skapa en express-server genom att anropa konstruktorn
app.get("/", function(req, res) {   // skapa en "route", dvs. en adress på servern som svarar på klientanrop
    res.send("<h1>Hallå NodeJS!</h1>"); // skickar ett svar till klienten, notera att åäö funkar nu
});
app.listen(3000);   // STARTAR SERVERN OCH LYSSNAR PÅ PORT 3000
console.log("Kör servern på localhost:3000");