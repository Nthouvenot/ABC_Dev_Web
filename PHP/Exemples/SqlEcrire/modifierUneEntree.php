<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="Style.css" type="text/css" />
    <title>Requete Bdd modifier une entr�e</title>
</head>
<body>
<?php
try
{
	// On se connecte � MySQL
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arr�te tout
        die('Erreur : '.$e->getMessage());
}
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

// On modifie l'entr�e "Battlefield 1942" dans la table jeux_video
UPDATE jeux_video SET prix = '10', nbre_joueurs_max = '32' WHERE nom = 'Battlefield 1942'
echo 'Le jeu a bien �t� modifi� !';
//on modifie toutes les entr�e correspondant a "Michel"
UPDATE jeux_video SET possesseur = 'Florent' WHERE possesseur = 'Michel'
echo 'Le poscesseur des jeux de Michel est maintenant Florent'

?>

?>
</body>
</html>