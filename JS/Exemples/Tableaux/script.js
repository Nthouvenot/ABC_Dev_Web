var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'J�r�me', 'Guillaume'];
// Le contenu se d�finit entre crochets, avec une virgule entre chaque valeur.
// La cha�ne 'Rafael' correspond � l'indice 0, 'Mathilde' � l'indice 1...
alert(myArray[1]); // Affiche : � Laurence �//Modifier une valeurvar myArray = ['Rafael', 'Mathilde', 'Ahmed', 'J�r�me', 'Guillaume'];
myArray[1] = 'Paul';
alert(myArray[1]); // Affiche : � Paul �//Ajouter des items a la fin du tableauvar myArray = ['Rafael', 'Mathilde'];
myArray.push('Ahmed'); // Ajoute � Ahmed � � la fin du tableau
myArray.push('J�r�me', 'Guillaume'); // Ajoute � J�r�me � et � Guillaume � � la fin du tableau

// Les m�thodes shift() et pop() retirent le premier et le dernier �l�ment du tableau
var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'J�r�me', 'Guillaume'];
myArray.shift(); // Retire � Rafael �
myArray.pop(); // Retire � Guillaume �
alert(myArray); // Affiche � Mathilde,Ahmed,J�r�me �

//D�couyper une chaine avec split()
var cousinsString = 'J�r�me Guillaume Paul', cousinsArray = cousinsString.split(' '); // Avec les espaces, on a trois items
alert(cousinsString);
alert(cousinsArray);

//Inverse dela m�thode split()
var cousinsString_2 = cousinsArray.join('-');
alert(cousinsString_2);

//Parcourir un tableau avec for
var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'J�r�me', 'Guillaume']; // La length est de 5
for (var i = 0, c = myArray.length; i < c; i++) { // On cr�e la variable c pour que la condition ne soit pas trop lourde en caract�res
    alert(myArray[i]); // On affiche chaque item, l'un apr�s l'autre, jusqu'� la longueur totale du tableau
}