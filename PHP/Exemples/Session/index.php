<?php
// On d�marre la session AVANT d'�crire du code HTML
session_start();

// On s'amuse � cr�er quelques variables de session dans $_SESSION
$_SESSION['prenom'] = 'Jean';
$_SESSION['nom'] = 'Dupont';
$_SESSION['age'] = 24;
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Titre de ma page</title>
    </head>
    <body>
    <p>
        Salut <?php echo $_SESSION['prenom']; ?> !<br />
        Tu es � l'accueil de mon site (index.php). Tu veux aller sur une autre page ?
    </p>
    <p>
        <a href="maPage.php">Lien vers mapage.php</a><br />
        <a href="monScript.php">Lien vers monscript.php</a><br />
        <a href="pageInformations.php">Lien vers informations.php</a>
    </p>
    </body>
</html>