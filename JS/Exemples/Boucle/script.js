//Boucle While
var number = 1;
while (number < 10) {
    number++; // Tant que le nombre est inf�rieur � 10, on l'incr�mente de 1
}
alert(number); // Affiche : � 10 � </script>

//Boucle While avec prompt et break
var prenoms = '', prenom; // On cr�e une variable prenoms pour m�moriser
while (true) {
    prenom = prompt('Entrez un pr�nom :'); // L'utilisateur entre chaque prenom
    if (prenom) {
        prenoms += prenom + ' '; // Ajoute le nouveau pr�nom ainsi qu'une espace
    } else {
        break; // On quitte la boucle
    }
} alert(prenoms); // Affiche les pr�noms � la suite

//Boucle for exemple
for (var iter = 1; iter <= 5; iter++) { // On initialise une variable, et tant qu'elle est inf�rieure ou �gale � 5 on l'incr�mente de 1.
    alert('It�ration n�' + iter); // A chaque fois on affiche une bo�te dedialogue(5 fois)
}

//Boucle for exemple 2
for (var prenoms = '', prenom; true;) { // ici sans incr�mentation n�cessaire, mais avec un point - virgule obligatoire apr�s la condition true
    prenom = prompt('Entrez un pr�nom :');
    if (prenom) { prenoms += prenom + ' '; }
    else { break; }
}
alert(prenoms);

//Boucle
for (var i = 0, prenoms = '', prenom; true; i++) {
    prenom = prompt('Entrez un pr�nom :');
    if (prenom) {
        prenoms += prenom + ' ';
    }
    else {
        break;
    }
}
alert('Il y a ' + i + ' pr�noms :\n\n' + prenoms); // Les \n servent � faire des sauts de ligne