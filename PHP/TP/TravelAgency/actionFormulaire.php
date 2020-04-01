<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href="styles.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Crete+Round' rel="stylesheet">
        <title>Travel Agency</title>
    </head>
    
    <body>
<?php
if(isset($_POST['name']) && isset($_POST['email'])) {
    echo 'ça marche';
}
else {
echo '<p>erreur nombre de paramétres incorrect<p>';
}
?>
    </body>
</html>
