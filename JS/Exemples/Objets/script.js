var myString = 'Ceci est une chaîne de caractères'; // On crée un objet String
alert(myString.length); // On affiche le nombre de caractères, au moyen de la propriété « length »
alert(myString.toUpperCase()); // On récupère la chaîne en majuscules, avec la méthode toUpperCase(), l'inverse étant la méthode toLowerCase()

//Objet littéraux 
var family = {
    self: 'Rafael',
    sister: 'Mathilde',
    brother: 'Ahmed',
    cousin_1: 'Jérôme',
    cousin_2: 'Guillaume'
};
var id = 'sister';
alert(family[id]); // Affiche : « Mathilde »
alert(family.brother); // Affiche : « Ahmed »
alert(family['self']); // Affiche : « Rafael »
family['uncle'] = 'Pauline'; // On ajoute une donnée, avec un identifiant.
family.aunt = 'Karim'; // On peut ajouter aussi de cette manière.
alert(family.uncle);

//Parcourir un objet littéral
var family = {
    self: 'Rafael',
    sister: 'Mathilde',
    brother: 'Ahmed',
    cousin_1: 'Jérôme',
    cousin_2: 'Guillaume'
};
for (var id in family) { // On stocke l'identifiant dans « id » pour parcourir l'objet « family »
    alert(family[id]);
}