//Boucle While
var number = 1;
while (number < 10) {
    number++; // Tant que le nombre est inférieur à 10, on l'incrémente de 1
}
alert(number); // Affiche : « 10 » </script>

//Boucle While avec prompt et break
var prenoms = '', prenom; // On crée une variable prenoms pour mémoriser
while (true) {
    prenom = prompt('Entrez un prénom :'); // L'utilisateur entre chaque prenom
    if (prenom) {
        prenoms += prenom + ' '; // Ajoute le nouveau prénom ainsi qu'une espace
    } else {
        break; // On quitte la boucle
    }
} alert(prenoms); // Affiche les prénoms à la suite

//Boucle for exemple
for (var iter = 1; iter <= 5; iter++) { // On initialise une variable, et tant qu'elle est inférieure ou égale à 5 on l'incrémente de 1.
    alert('Itération n°' + iter); // A chaque fois on affiche une boîte dedialogue(5 fois)
}

//Boucle for exemple 2
for (var prenoms = '', prenom; true;) { // ici sans incrémentation nécessaire, mais avec un point - virgule obligatoire après la condition true
    prenom = prompt('Entrez un prénom :');
    if (prenom) { prenoms += prenom + ' '; }
    else { break; }
}
alert(prenoms);

//Boucle
for (var i = 0, prenoms = '', prenom; true; i++) {
    prenom = prompt('Entrez un prénom :');
    if (prenom) {
        prenoms += prenom + ' ';
    }
    else {
        break;
    }
}
alert('Il y a ' + i + ' prénoms :\n\n' + prenoms); // Les \n servent à faire des sauts de ligne