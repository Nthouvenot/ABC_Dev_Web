<?php
// Nous cr�ons une classe � Personnage �.
class Personnage
{
  private $_force;
  private $_localisation;
  private $_experience;
  private $_degats;
        
  // Nous d�clarons une m�thode dont le seul but est d'afficher un texte.
  public function parler()
  {
    echo 'Je suis un personnage !';
  }
}
    
$perso = new Personnage;
$perso->parler();
?>