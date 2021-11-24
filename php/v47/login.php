<?php
session_start();
if (isset($_POST["user"])) {
    $_SESSION["user"] = $_POST["user"];
    echo "<p>Sessionsvariabel tilldelad!</p>";
}
echo "<p><a href='checkstatus.php'>Kolla status</a></p>";
echo "<p><a href='logout.php'>Logga ut</a></p>";
?>
<form action="nysida.php" method="post">
    <label>Säg något:</label>
    <input type="text" name="message">
    <input type="submit">
</form>