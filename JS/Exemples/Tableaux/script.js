var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'Jérôme', 'Guillaume'];
// Le contenu se définit entre crochets, avec une virgule entre chaque valeur.
// La chaîne 'Rafael' correspond à l'indice 0, 'Mathilde' à l'indice 1...
alert(myArray[1]); // Affiche : « Laurence »//Modifier une valeurvar myArray = ['Rafael', 'Mathilde', 'Ahmed', 'Jérôme', 'Guillaume'];
myArray[1] = 'Paul';
alert(myArray[1]); // Affiche : « Paul »//Ajouter des items a la fin du tableauvar myArray = ['Rafael', 'Mathilde'];
myArray.push('Ahmed'); // Ajoute « Ahmed » à la fin du tableau
myArray.push('Jérôme', 'Guillaume'); // Ajoute « Jérôme » et « Guillaume » à la fin du tableau

// Les méthodes shift() et pop() retirent le premier et le dernier élément du tableau
var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'Jérôme', 'Guillaume'];
myArray.shift(); // Retire « Rafael »
myArray.pop(); // Retire « Guillaume »
alert(myArray); // Affiche « Mathilde,Ahmed,Jérôme »

//Découyper une chaine avec split()
var cousinsString = 'Jérôme Guillaume Paul', cousinsArray = cousinsString.split(' '); // Avec les espaces, on a trois items
alert(cousinsString);
alert(cousinsArray);

//Inverse dela méthode split()
var cousinsString_2 = cousinsArray.join('-');
alert(cousinsString_2);

//Parcourir un tableau avec for
var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'Jérôme', 'Guillaume']; // La length est de 5
for (var i = 0, c = myArray.length; i < c; i++) { // On crée la variable c pour que la condition ne soit pas trop lourde en caractères
    alert(myArray[i]); // On affiche chaque item, l'un après l'autre, jusqu'à la longueur totale du tableau
}