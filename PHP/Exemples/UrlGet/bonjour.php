<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
</head>
<body>
    <header>
		<h1>Mon Super Site</h1>
	</header>
	<p>Bonjour <?php echo $_GET['prenom']; ?> !</p>
	<p>Bonjour <?php echo $_GET['prenom'] . ' ' . $_GET['nom']; ?> !</p>
</body>
</html>