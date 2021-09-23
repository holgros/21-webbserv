<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Echo session variable that was set on previous page along with recently posted data
echo $_SESSION["namn"] . "s favoritmat är " . $_POST["mat"] . ".";
?>
<br>
<a href="session_form.html">Tillbaka till start</a>
</body>
</html>