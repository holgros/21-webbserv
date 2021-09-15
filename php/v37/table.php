 <?php 
/*
EXEMPEL PÅ HUR MAN KAN SEPARERA HTML- OCH PHP-KOD I OLIKA FILER
Referenser:
https://www.w3schools.com/php/func_string_str_replace.asp
https://www.w3schools.com/php/func_string_explode.asp
*/
$html = file_get_contents("table.html"); // läs in hela html-dokumentet
$text_array = explode("***PHP***", $html); // dela upp html-dokumentet i tre delar, separerade med textsträngen "***PHP***"
echo $text_array[0]; // skriv ut html-dokumentet fram till första förekomsten av textsträngen "***PHP***", dvs. rad 1-28

$huvudstader = array( "Sverige"=>"Stockholm", "Finland"=>"Helsingfors", "Danmark"=> "Köpenhamn", "Norge"=>"Oslo", "Island"=>"Reykjavik", "Estland"=>"Tallinn", "Lettland"=>"Riga", "Litauen"=>"Vilnius") ;
foreach($huvudstader as $x => $x_value) {
	$text = str_replace("***country***",$x,$text_array[1]); // ersätt ***country*** med innehåll i array
	$text = str_replace("***capital***",$x_value,$text); // ersätt ***capital*** med innehåll i array
	echo $text;
}

echo $text_array[2]; // skriv ut slutet av html-dokumentet, dvs. rad 35-39
 
 ?> 
