//Création du div
var myDiv = document.createElement('div'); //Création d'un élément div
myDiv.id = 'divTp1'; //Ajoute un id a notre div
var page = document.getElementById('page').appendChild(myDiv); //Insére dans la page le div
var newText = document.createTextNode("Le"); //Créer du texte
myDiv.appendChild(newText); //Insére le texte dans le div
//Insertion du texte qui suis
document.getElementById('divTp1').innerHTML += ' <strong> World Wide Web Consortium</strong>, est un ';
//Création et insertion du premier lien
var myLink = document.createElement('a');
myLink.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
myLink.title = "Organisme de normalisation";
var text1 = document.createTextNode('organisme de standardisation');
myLink.appendChild(text1);
document.getElementById('divTp1').appendChild(myLink);
//Insertion du texte suivant
document.getElementById('divTp1').innerHTML += 'à but non - lucratif chargé de promouvoir lacompatibilité des technologies du ';
//Création et insertion du deuxiéme lien
var myLink2 = document.createElement('a');
myLink2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
myLink2.title = "World Wide Web";
var text2 = document.createTextNode('World Wide Web');
myLink2.appendChild(text2);
document.getElementById('divTp1').appendChild(myLink2)




