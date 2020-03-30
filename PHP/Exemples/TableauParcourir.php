<?php
//boucle for
// On cr�e notre array $prenoms
$prenoms = array ('Fran�ois', 'Michel', 'Nicole', 'V�ronique', 'Beno�t');

// Puis on fait une boucle pour tout afficher :
for ($numero = 0; $numero < 5; $numero++)
{
    echo $prenoms[$numero] . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
}

//Boucle foreach
$prenoms2 = array ('Fran�ois', 'Michel', 'Nicole', 'V�ronique', 'Beno�t');

foreach($prenoms as $element)
{
    echo $element . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
}

//Boucle foreach tableau associatif
$coordonnees = array (
    'prenom' => 'Fran�ois',
    'nom' => 'Dupont',
    'adresse' => '3 Rue du Paradis',
    'ville' => 'Marseille');

foreach($coordonnees as $element)
{
    echo $element . '<br />';
}

//Boucle foreach tableau associatif indice
$coordonnees2 = array (
    'prenom' => 'Fran�ois',
    'nom' => 'Dupont',
    'adresse' => '3 Rue du Paradis',
    'ville' => 'Marseille');

foreach($coordonnees2 as $cle => $element)
{
    echo '[' . $cle . '] vaut ' . $element . '<br />';
}

//aficher avec print_r
$coordonnees3 = array (
    'prenom' => 'Fran�ois',
    'nom' => 'Dupont',
    'adresse' => '3 Rue du Paradis',
    'ville' => 'Marseille');

echo '<pre>';
print_r($coordonnees3);
echo '</pre>';
?>