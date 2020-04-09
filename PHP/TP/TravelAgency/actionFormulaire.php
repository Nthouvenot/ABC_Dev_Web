<?php
if(!isset($_POST['name']) && !isset($_POST['email'])) {
    echo '<p>erreur nombre de paramétres incorrect<p>';    
}
else {
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
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
    //on récupere et converti la date et l'heure courante
    $date = new DateTime();
    $date-> getTimestamp();
    $dateCourante = $date->format('Y-m-d\ H:i:s');
    //On insére les donnée dans la table
    $request = $bdd->prepare('INSERT INTO contact(name, email, dateRequest, contacted) VALUE (:name, :email, :dateRequest, :contacted)');
    $request -> execute(array('name' => $name, 'email' => $email,'dateRequest' => $dateCourante, 'contacted' => 0));
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href="styles.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Crete+Round' rel="stylesheet">
        <title>Travel Agency</title>
    </head>
    <body>
        <h1>Demande de contact</h1>
<?php
// Si tout c'est bien passé on afiche que la demande a été bien prise en compte
echo 'Demande de contact prise en compte pour '.$name.'</br>';
echo 'Vous serez contacté a l\'adresse comuniquée : '.$email;
}
?>
    <p><a href="index.php?contacted=true">page d'accueil</a></p>
    </body>
</html>
