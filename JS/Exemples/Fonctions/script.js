function byTwo() {
    var result = parseInt(prompt('Donnez le nombre à multiplier par 2 :'));
    alert(result * 2);
}
byTwo(); // On appelle la fonction créée
alert('Vous en êtes à la moitié !'); // Puis un message intermédiaire
byTwo();

//Variable locale et globale
var message = 'Ici la variable globale !';
function showMsg() {
    var message = 'Ici la variable locale !';
    alert(message);
}
showMsg(); // On affiche la variable locale
alert(message); // Puis la variable globale 

//Argument
function myFunction(arg) { // Notre argument est la variable « arg »
    alert('Votre argument : ' + arg);
}
myFunction('En voilà un beau test !');

//argument variante avec prompt
function myFunction(arg) {
    alert('Votre argument : ' + arg);
}
myFunction(prompt('Que souhaitez-vous passer en argument à la fonction ?'));

//arguments multiples
function moar(first, second) {
    // On peut maintenant utiliser les variables « first » et « second » comme onle souhaite:
    alert('Votre premier argument : ' + first);
    alert('Votre deuxième argument : ' + second);
}
moar(
    prompt('Entrez votre premier argument :'),
    prompt('Entrez votre deuxième argument :')
);

//Valeur de retour
function sayHello() {
    return 'Bonjour !'; // L'instruction « return » suivie d'une valeur, cette dernière est donc renvoyée par la fonction(il ne peut pas y en avoir d'autres)
}
alert(sayHello());

//fonctionnement anonyme
var sayHello = function () {
    alert('Bonjour !');
};
sayHello();