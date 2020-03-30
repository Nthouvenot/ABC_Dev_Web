<?php
//strlen longeur de la chaine
$phrase = 'Bonjour tout le monde ! Je suis une phrase !';
$longueur = strlen($phrase);
 
 
echo 'La phrase ci-dessous comporte ' . $longueur . ' caract�res :<br />' . $phrase;

//str_replace remplacer des lettres
$ma_variable = str_replace('b', 'p', 'bim bam boum');
 
echo $ma_variable;

//str_shuffle m�langer les lettres
$chaine = 'Cette cha�ne va �tre m�lang�e !';
$chaine = str_shuffle($chaine);
 
echo $chaine;

// strtolower �crire en minuscule
$chaine2 = 'COMMENT CA JE CRIE TROP FORT ???';
$chaine2 = strtolower($chaine);
 
echo $chaine2;

//R�cuperer la date
$annee = date('Y');
echo $annee;

// Enregistrons les informations de date dans des variables
$jour = date('d');
$mois = date('m');
$annee = date('Y');

$heure = date('H');
$minute = date('i');

// Maintenant on peut afficher ce qu'on a recueilli
echo 'Bonjour ! Nous sommes le ' . $jour . '/' . $mois . '/' . $annee . 'et il est ' . $heure. ' h ' . $minute;

//Cr�er une fonction
function DireBonjour($nom)
{
    echo 'Bonjour ' . $nom . ' !<br />';
}

DireBonjour('Marie');
DireBonjour('Patrice');
DireBonjour('Edouard');
DireBonjour('Pascale');
DireBonjour('Fran�ois');
DireBonjour('Beno�t');
DireBonjour('P�re No�l');

//Cr�er une fonction avec retour de valeur
// Ci-dessous, la fonction qui calcule le volume du c�ne
function VolumeCone($rayon, $hauteur)
{
   $volume = $rayon * $rayon * 3.14 * $hauteur * (1/3); // calcul du volume
   return $volume; // indique la valeur � renvoyer, ici le volume
}

$volume = VolumeCone(3, 1);
echo 'Le volume d\'un c�ne de rayon 3 et de hauteur 1 est de ' . $volume;

?>