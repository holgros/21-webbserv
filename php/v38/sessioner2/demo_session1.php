<!DOCTYPE html>
<html>
<body>

<?php
/*
Demonstration av sessioner, som är ett sätt att
spara information mellan olikawebbsidor.
Man kan t.ex. låta en person förbli inloggad utan att behöva
skicka användarnamn och lösenord gång på gång.
Se även länk nedan
https://www.w3schools.com/php/php_sessions.asp
*/

// Start the session
session_start();
// Set session variables
$_SESSION["namn"] = $_POST["namn"];
?>
<form action="demo_session2.php" method="POST">
Skriv din favoritmat:<br>
<input type="text" name="mat" ><br>
<input type="submit" value="Submit">
</form>
</body>
</html>