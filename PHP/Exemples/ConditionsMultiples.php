<?php
$age = 8;
$langue = "anglais";


if ($age <= 12 AND $langue == "français")
{
    echo "Bienvenue sur mon site !";
}
elseif ($age <= 12 AND $langue == "anglais")
{
    echo "Welcome to my website!";
}

//Exemple aver "OR"
$pays = "France";

if ($pays == "France" OR $pays == "Belgique")
{
    echo "Bienvenue sur notre site !";
}
else
{
    echo "Désolés, notre service n'est pas encore disponible dans votre pays !";
}
?>