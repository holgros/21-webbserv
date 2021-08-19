<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
$txt = "Hello again!";
echo "<p style='color:red'>Hello World!</p>";
// Detta är en kommentar, syns inte för klienten
echo $txt;
$x = 2;
$y = 3;
$z = $x + $y;
echo "<br>" . "Summan av x och y är: " . $z;
?>

</body>
</html>