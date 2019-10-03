<?php
$start = microtime(true);
$X=$_POST['x'];
$Y=$_POST['y'];
$R=$_POST['r0'];
$bool = checkX($X)&&checkY($Y)&&checkR($R);
date_default_timezone_set("UTC");
$time = time() + 3 * 3600;
$time_now = date("H:i:s", $time);
$return = "<table border=1><tr><td>X</td><td>Y</td><td>R</td><td>Попадание</td><td>Время работы</td><td>Время проверки</td></tr>";
if ($bool) {
	$hit=check($X,$Y,$R);
	$end=round((microtime(true)) - $start, 4);
	$old= $_COOKIE["data"];
	$save="$old*$X*$Y*$R*$hit*$end*$time_now<br>";
	setcookie("data", $save);
	$array = explode( "<br>",  $save);
	
	foreach( array_reverse($array) as $i) {
		$array1 = explode("*", $i); 
		$return .= "<tr><td>$array1[1]</td><td>$array1[2]</td><td>$array1[3]</td><td>$array1[4]</td><td>$array1[5]</td><td>$array1[6]</td></tr>"; 
	}
	
}
$return .= "</table>";
echo$return;
function checkX($X){
	if (!is_numeric($X)|| is_empty($X)){
		echo "Для координаты X необходимо передать числовое значение";
		return false;
} else return true;
}

function checkY($Y){
	$Y=str_replace(",",".",$Y);
	if (!is_numeric($Y)|| is_empty($Y)|| $Y<-5 || $Y>5){
	echo "Для координаты Y необходимо передать числовое значение в диапазоне [-5;5]";
	return false;
 } else return true;
}

function checkR($R){
	if (!is_numeric($R)|| is_empty($R) || $R<=0){
		echo "Для параметра R необходимо передать положительное числовое значение";
		return false;
} else return true;
}

function check($X, $Y, $R){
	$yes="есть";
	$no="нет";
	if (($X>=0 && $X<=$R && $Y<=0 && $Y>=-$R) || ($X>=0 && $Y>=0 && ($Y*$Y+$X*$X)<=($R*$R)) || ($X<=0 && $Y>=0 && $X>=$Y-$R/2))  {return $yes;
	} else return $no;
		
}
function is_empty($var){
	return empty($var) && !is_numeric($var);
}
?>



