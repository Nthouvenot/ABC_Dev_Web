<?php
$autorisation_entrer = "Oui";

if ($autorisation_entrer == "Oui") // SI on a l'autorisation d'entrer
{
    // instructions � ex�cuter quand on est autoris� � entrer
}
elseif ($autorisation_entrer == "Non") // SINON SI on n'a pas l'autorisation d'entrer
{
    // instructions � ex�cuter quand on n'est pas autoris� � entrer
}
else // SINON (la variable ne contient ni Oui ni Non, on ne peut pas agir)
{
    echo "Euh, je ne connais pas ton �ge, tu peux me le rappeler s'il te pla�t ?";
}
?>