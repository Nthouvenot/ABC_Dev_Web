//Base de la fonction
var userName = prompt('Entrez votre prenom :');
alert(userName); // Affiche le prénom entré par l'utilisateur

//Prompt avec concaténation
var start = 'Bonjour ', name, end = ' !', result;
name = prompt('Quel est votre prenom ?');
result = start + name + end;
alert(result);

//Prompt avec calcul
var first, second, result;
first = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = parseInt(first) + parseInt(second); /* la fonction parseInt()
transforme la chaîne de caractères en nombre */
alert(result);
