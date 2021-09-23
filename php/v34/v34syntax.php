<!DOCTYPE html>
<html>
<body>

<h1>Mer PHP-syntax</h1>

<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
echo "<br>";
echo "Ben is " . $age['Ben'] . " years old.";
echo "<br>Skriver ut som en loop:<br>";
foreach($age as $x => $x_value) {
    echo $x . " is ". $age[$x] . " years old.";
    echo "<br>";
}
?>

</body>
</html>