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
$_SESSION["favcolor"] = $_POST["favcolor"];
$_SESSION["favanimal"] = $_POST["favanimal"];
echo "Session variables are set.";
?>

</body>
</html>