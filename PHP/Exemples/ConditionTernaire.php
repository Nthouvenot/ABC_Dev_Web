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

//m�me chose avec ternaire
$age = 24;

$majeur = ($age >= 18) ? true : false;
?>
?>