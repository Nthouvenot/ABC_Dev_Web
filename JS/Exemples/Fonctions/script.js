function byTwo() {
    var result = parseInt(prompt('Donnez le nombre � multiplier par 2 :'));
    alert(result * 2);
}
byTwo(); // On appelle la fonction cr��e
alert('Vous en �tes � la moiti� !'); // Puis un message interm�diaire
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
function myFunction(arg) { // Notre argument est la variable � arg �
    alert('Votre argument : ' + arg);
}
myFunction('En voil� un beau test !');

//argument variante avec prompt
function myFunction(arg) {
    alert('Votre argument : ' + arg);
}
myFunction(prompt('Que souhaitez-vous passer en argument � la fonction ?'));

//arguments multiples
function moar(first, second) {
    // On peut maintenant utiliser les variables � first � et � second � comme onle souhaite:
    alert('Votre premier argument : ' + first);
    alert('Votre deuxi�me argument : ' + second);
}
moar(
    prompt('Entrez votre premier argument :'),
    prompt('Entrez votre deuxi�me argument :')
);

//Valeur de retour
function sayHello() {
    return 'Bonjour !'; // L'instruction � return � suivie d'une valeur, cette derni�re est donc renvoy�e par la fonction(il ne peut pas y en avoir d'autres)
}
alert(sayHello());

//fonctionnement anonyme
var sayHello = function () {
    alert('Bonjour !');
};
sayHello();