<?php
    try
    {
        // On se connecte à MySQL
        $bdd = new PDO('mysql:host=localhost;dbname=TravelAgency;charset=utf8', 'root', '');
    }
    catch(Exception $e)
    {
        // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
    }
    $nombreModifications = $bdd->exec('UPDATE contact SET contacted = 1 WHERE contacted = 0');
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href="./css/contactUsers.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Crete+Round' rel="stylesheet">
        <title>Travel Agency</title>
    </head>
    <body>
    <div id="page">
        <p><span id="styleResultat">Demande d'envoie réalisé avec succés</br></span><?php echo $nombreModifications ?> personnes on été contactées</p>
        <div id="container">
                <button type="button" onclick="window.location.href='index.php'">Accueil</button>
                <button type="button" onclick="window.location.href='espaceAdministrateur.php'">Liste des contacts</button>
        </div>
    </div>
    </body>
</html>
