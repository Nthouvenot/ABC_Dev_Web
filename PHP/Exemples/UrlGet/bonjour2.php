<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
</head>
<body>
    <header>
		<h1>Mon Super Site</h1>
	</header>
	<?php
if (isset($_GET['prenom']) AND isset($_GET['nom'])) // On a le nom et le pr�nom
{
	echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !';
}
else // Il manque des param�tres, on avertit le visiteur
{
	echo 'Il faut renseigner un nom et un pr�nom !';
}
?>
</body>
</html>