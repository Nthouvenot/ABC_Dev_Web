
<?php
//V�rifier qu'une cle existe
$coordonnees = array (
    'prenom' => 'Fran�ois',
    'nom' => 'Dupont',
    'adresse' => '3 Rue du Paradis',
    'ville' => 'Marseille');

if (array_key_exists('nom', $coordonnees))
{
    echo 'La cl� "nom" se trouve dans les coordonn�es !';
}

if (array_key_exists('pays', $coordonnees))
{
    echo 'La cl� "pays" se trouve dans les coordonn�es !';
}

/*--------------------------------------------------------------------------*/

$fruits = array ('Banane', 'Pomme', 'Poire', 'Cerise', 'Fraise', 'Framboise');
//v�rifier qu'une valeur existe

if (in_array('Myrtille', $fruits))
{
    echo 'La valeur "Myrtille" se trouve dans les fruits !';
}

if (in_array('Cerise', $fruits))
{
    echo 'La valeur "Cerise" se trouve dans les fruits !';
}

//R�cuperer la cle d'une valeur

$position = array_search('Fraise', $fruits);
echo '"Fraise" se trouve en position ' . $position . '<br />';

$position = array_search('Banane', $fruits);
echo '"Banane" se trouve en position ' . $position;

?>