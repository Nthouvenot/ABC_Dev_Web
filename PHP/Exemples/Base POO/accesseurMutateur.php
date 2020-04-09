<?php
class Personnage
{
  private $_force;
  private $_experience;
  private $_degats;
  
  public function frapper(Personnage $persoAFrapper)
  {
    $persoAFrapper->_degats += $this->_force;
  }
  
  public function gagnerExperience()
  {
    $this->_experience++;
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
  
  // Mutateur charg� de modifier l'attribut $_experience.
  public function setExperience($experience)
  {
    if (!is_int($experience)) // S'il ne s'agit pas d'un nombre entier.
    {
      trigger_error('L\'exp�rience d\'un personnage doit �tre un nombre entier', E_USER_WARNING);
      return;
    }
    
    if ($experience > 100) // On v�rifie bien qu'on ne souhaite pas assigner une valeur sup�rieure � 100.
    {
      trigger_error('L\'exp�rience d\'un personnage ne peut d�passer 100', E_USER_WARNING);
      return;
    }
    
    $this->_experience = $experience;
  }
  
  // Ceci est la m�thode degats() : elle se charge de renvoyer le contenu de l'attribut $_degats.
  public function degats()
  {
    return $this->_degats;
  }
  
  // Ceci est la m�thode force() : elle se charge de renvoyer le contenu de l'attribut $_force.
  public function force()
  {
    return $this->_force;
  }
  
  // Ceci est la m�thode experience() : elle se charge de renvoyer le contenu de l'attribut $_experience.
  public function experience()
  {
    return $this->_experience;
  }
}
?>