<?php
class Personnage
{
  private $_experience = 50;

  public function afficherExperience()
  {
    echo $this->_experience;
  }

  public function gagnerExperience()
  {
    // On ajoute 1 � notre attribut $_experience.
    $this->_experience = $this->_experience + 1;
  }
}
    
$perso = new Personnage;
$perso->gagnerExperience();   // On gagne de l'exp�rience.
$perso->afficherExperience(); // On affiche la nouvelle valeur de l'attribut.
?>