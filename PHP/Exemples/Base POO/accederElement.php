<?php
class Personnage
{
  private $_force;
  private $_experience;
  private $_degats;
}
    
$perso = new Personnage;
$perso->_experience = $perso->_experience + 1; // Une erreur fatale est levée suite à cette instruction.
?>