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
if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter']))
{
	for ($i = 0 ; $i < $_GET['repeter'] ; $i++)
	{
		echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !<br />';
	}
}
else
{
   echo 'Il faut renseigner un nom, un pr�nom et un nombre de r�p�titions !';
}
?>
</body>
</html>