//Cr�ation du div
var myDiv = document.createElement('div'); //Cr�ation d'un �l�ment div
myDiv.id = 'divTp1'; //Ajoute un id a notre div
var page = document.getElementById('page').appendChild(myDiv); //Ins�re dans la page le div
var newText = document.createTextNode("Le"); //Cr�er du texte
myDiv.appendChild(newText); //Ins�re le texte dans le div
//Insertion du texte qui suis
document.getElementById('divTp1').innerHTML += ' <strong> World Wide Web Consortium</strong>, est un ';
//Cr�ation et insertion du premier lien
var myLink = document.createElement('a');
myLink.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
myLink.title = "Organisme de normalisation";
var text1 = document.createTextNode('organisme de standardisation');
myLink.appendChild(text1);
document.getElementById('divTp1').appendChild(myLink);
//Insertion du texte suivant
document.getElementById('divTp1').innerHTML += '� but non - lucratif charg� de promouvoir lacompatibilit� des technologies du ';
//Cr�ation et insertion du deuxi�me lien
var myLink2 = document.createElement('a');
myLink2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
myLink2.title = "World Wide Web";
var text2 = document.createTextNode('World Wide Web');
myLink2.appendChild(text2);
document.getElementById('divTp1').appendChild(myLink2)




