// Kör en enkel webbserver på localhost:3000 efter att du har installerat Node enligt instruktioner på Classroom
const http = require("http");   // http är en inbyggd klass i Node för att köra webbservrar
const app = http.createServer(function(req, res) {  // definierar en funktion som körs när en klient ansluter till servern
    res.end("<h1>Hallå NodeJS!</h1>"); // skickar ett svar till klienten
});
app.listen(3000);   // STARTAR SERVERN
console.log("Kör servern på localhost:3000.");
// läs mer på t.ex. https://www.w3schools.com/nodejs/