//Base de la fonction
var userName = prompt('Entrez votre prenom :');
alert(userName); // Affiche le pr�nom entr� par l'utilisateur

//Prompt avec concat�nation
var start = 'Bonjour ', name, end = ' !', result;
name = prompt('Quel est votre prenom ?');
result = start + name + end;
alert(result);

//Prompt avec calcul
var first, second, result;
first = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = parseInt(first) + parseInt(second); /* la fonction parseInt()
transforme la cha�ne de caract�res en nombre */
alert(result);
