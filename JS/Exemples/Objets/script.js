var myString = 'Ceci est une cha�ne de caract�res'; // On cr�e un objet String
alert(myString.length); // On affiche le nombre de caract�res, au moyen de la propri�t� � length �
alert(myString.toUpperCase()); // On r�cup�re la cha�ne en majuscules, avec la m�thode toUpperCase(), l'inverse �tant la m�thode toLowerCase()

//Objet litt�raux 
var family = {
    self: 'Rafael',
    sister: 'Mathilde',
    brother: 'Ahmed',
    cousin_1: 'J�r�me',
    cousin_2: 'Guillaume'
};
var id = 'sister';
alert(family[id]); // Affiche : � Mathilde �
alert(family.brother); // Affiche : � Ahmed �
alert(family['self']); // Affiche : � Rafael �
family['uncle'] = 'Pauline'; // On ajoute une donn�e, avec un identifiant.
family.aunt = 'Karim'; // On peut ajouter aussi de cette mani�re.
alert(family.uncle);

//Parcourir un objet litt�ral
var family = {
    self: 'Rafael',
    sister: 'Mathilde',
    brother: 'Ahmed',
    cousin_1: 'J�r�me',
    cousin_2: 'Guillaume'
};
for (var id in family) { // On stocke l'identifiant dans � id � pour parcourir l'objet � family �
    alert(family[id]);
}