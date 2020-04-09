<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href="./css/espaceAdministrateurStyle.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Crete+Round' rel="stylesheet">
        <title>Travel Agency</title>
    </head>
    <body>
    <div id="page">
        <h1>Liste des utilisateurs a contacer</h1>
<?php
//On regarde si l'administrateur a déja une session
if(isset($_SESSION['identifiant']) && isset($_SESSION['password'])) {
    //Si oui on utilise les identifiants et password de la session
    $identifiant = $_SESSION['identifiant'];
    $password = $_SESSION['password'];
    $prevSession = true;
    }
    else {
    $identifiant = strip_tags($_POST['identifiant']);
    $password = strip_tags($_POST['password']);
    $prevSession = false;
    }
if($prevSession == false  && !isset($_POST['identifiant']) && !isset($_POST['password'])) {
    echo '<p>erreur nombre de paramétres incorrect<p>';    
}
else {
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
        //on cherche si dans la base de donnée on a un administrateur qui correspond au donnée saisie si on a pas de précedente session
        $request = $bdd->prepare('SELECT admin FROM users WHERE identifiant= :identifiant AND password= :password');
        $request->execute(array('identifiant' => $identifiant, 'password' => $password));
        $bddData = $request->fetch();
        $request->closeCursor(); 
        // on efface le liens de request
        unset($request);
        //On vérifie que l'on a bien réceptionner des donnée (identifiant + password correspond a un utilisateur)
        if(isset($bddData['admin']) || $prevSession) {
            if($bddData['admin'] == 1 || $prevSession) {
            $_SESSION['identifiant'] = $identifiant;
            $_SESSION['password'] = $password;
?>
   <table>
        <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Date</th>
            <th>Déja contacté</th>
        </tr>
<?php
            $bddAnswer = $bdd->query('SELECT name, email, DATE_FORMAT(dateRequest, \'%d/%m/%Y %Hh%imin%ss\') AS date, contacted FROM contact');
            while($contactData = $bddAnswer->fetch()) {
                //On traduit le flag contacted en langage humain
                if($contactData['contacted'] == 0) {
                $contacted = 'Non';
                }
                else {
                $contacted = 'Oui';
                }
                echo '<tr><td>'.$contactData['name'].'</td><td>'.$contactData['email'].'</td><td>'.$contactData['date'].'</td><td>'.$contacted.'</td></tr>';
            }
            $bddAnswer->closeCursor();
        }
            else {
            echo '<p>Accés refusé vous n\'êtes pas un administrateur</br> Votre IP a été inscrite dans le journal des accés indésirables</p>';
            }
        }
        else
        {
        echo '<p>Compte non existant</p>';
        }
    }
?>
            </table>
            <div id="container">
                <button type="button" onclick="window.location.href='index.php'">Accueil</button>
                <button type="button" onclick="window.location.href='contactUsers.php'">Envoie contact</button>
            </div>
   </body>
</html>
    
    
 
