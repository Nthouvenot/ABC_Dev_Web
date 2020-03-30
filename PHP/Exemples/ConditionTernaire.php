<?php
$age = 24;

if ($age >= 18)
{
	$majeur = true;
}
else
{
	$majeur = false;
}

//même chose avec ternaire
$age = 24;

$majeur = ($age >= 18) ? true : false;
?>
?>