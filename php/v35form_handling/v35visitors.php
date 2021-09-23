<?php 
 //header('Content-type: text/plain');
 $myfile = fopen("v35textfile.txt", "r") or die("Unable to open file!");
 if(flock($myfile,LOCK_EX)) // funktionen "flock" ser till att endast en besökare i taget kan öppna filen
 {
     $number = (int)fgets($myfile);
     $number++;
     $myfile = fopen("v35textfile.txt", "w") or die("Unable to open file!");
     fwrite($myfile, $number);
     echo("This page has been loaded $number times.");
 }
 else
 {
     echo("Error locking file.");
 }
 fclose($myfile);
 ?> 