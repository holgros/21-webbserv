<?php
    session_start();
    echo $_SESSION["user"] . " sa: " . $_POST["message"];
    echo "<p><a href='login.php'>Tillbaka</a></p>";
?>