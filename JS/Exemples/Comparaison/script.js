var number1 = 2, number2 = 2, number3 = 4, result;
result = number1 == number2; // Au lieu d'une seule valeur, on en �crit deux avec l'op�rateur de comparaison entre elles
alert(result); // la condition est donc v�rifi�e car les deux variables contiennent bien la m�me valeur
result = number1 == number3;
alert(result); // la condition n'est pas v�rifi�e car 2 est diff�rent de 4
result = number1 < number3;
alert(result); // la condition est v�rifi�e car 2 est bien inf�rieur � 4