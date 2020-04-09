<?php
class Personnage
{
  private $_force;
  private $_localisation;
  private $_experience;
  private $_degats;

  public function __construct($force, $degats) // Constructeur demandant 2 param�tres
  {
    echo 'Voici le constructeur !'; // Message s'affichant une fois que tout objet est cr��.
    $this->setForce($force); // Initialisation de la force.
    $this->setDegats($degats); // Initialisation des d�g�ts.
    $this->_experience = 1; // Initialisation de l'exp�rience � 1.
  }

  // Mutateur charg� de modifier l'attribut $_force.
  public function setForce($force)
  {
    if (!is_int($force)) // S'il ne s'agit pas d'un nombre entier.
    {
      trigger_error('La force d\'un personnage doit �tre un nombre entier', E_USER_WARNING);
      return;
    }

    if ($force > 100) // On v�rifie bien qu'on ne souhaite pas assigner une valeur sup�rieure � 100.
    {
      trigger_error('La force d\'un personnage ne peut d�passer 100', E_USER_WARNING);
      return;
    }

    $this->_force = $force;
  }

  // Mutateur charg� de modifier l'attribut $_degats.
  public function setDegats($degats)
  {
    if (!is_int($degats)) // S'il ne s'agit pas d'un nombre entier.
    {
      trigger_error('Le niveau de d�g�ts d\'un personnage doit �tre un nombre entier', E_USER_WARNING);
      return;
    }

    $this->_degats = $degats;
  }
}

//Creation de 2 objet en utilisant le constructeur
$perso1 = new Personnage(60, 0); // 60 de force, 0 d�g�t
$perso2 = new Personnage(100, 10); // 100 de force, 10 d�g�ts
?>