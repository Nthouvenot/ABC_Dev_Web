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
document.getElementById('divTp1').innerHTML += '� but non - lucratif charg� de promouvoir la compatibilit� des technologies du ';
//Cr�ation et insertion du deuxi�me lien
var myLink2 = document.createElement('a');
myLink2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
myLink2.title = "World Wide Web";
var text2 = document.createTextNode('World Wide Web');
myLink2.appendChild(text2);
document.getElementById('divTp1').appendChild(myLink2)

/*****************Tp2************************************/
var myDiv2 = document.createElement('div');
myDiv2.id = "divTp2";
page.appendChild(myDiv2); //page a �t� d�fini dans le Tp1
var myP = document.createElement('p');
page = document.getElementById('divTp2').appendChild(myP);
var myText = document.createTextNode('Langage bas� sur ECMAScript :');
myP.appendChild(myText);
var myList = document.createElement('ul');
myList.id = 'list';
page.appendChild(myList);
for (i = 0; i < 4; i++) {
    var element;
    element = document.createElement('li');
    element.id = ('list' + (i+1));
    myList.appendChild(element)
}
var text;
//list1
text = document.createTextNode('JavaScript');
document.getElementById('list1').appendChild(text);
//list2
text = document.createTextNode('JScript');
document.getElementById('list2').appendChild(text);
//list3
text = document.createTextNode('ActionScript');
document.getElementById('list3').appendChild(text);
//list4
text = document.createTextNode('EX4');
document.getElementById('list4').appendChild(text);

/*****************Tp3************************************/
var myDiv3 = document.createElement('div');
myDiv3.id = 'divTp3';
page.appendChild(myDiv3); //page a �t� d�fini dans le Tp1
//cr�ation formulaire
var formulary = document.createElement('form');
formulary.enctype = 'multipart/from-data';
formulary.method = 'post';
formulary.action = 'upload.php';
myDiv3.appendChild(formulary);
//Cr�ation du fieldset
var myField = document.createElement('fieldset');
formulary.appendChild(myField);
//Cr�ation du "legend"
var myLegend = document.createElement('legend');
myLegend.appendChild(document.createTextNode('Uploader une image'));
myField.appendChild(myLegend);
//Cr�ation du div a l'int�rieur du formulaire
var formDiv = document.createElement('div');
formDiv.id = 'formDiv';
formDiv.style = 'text-align: center';
myField.appendChild(formDiv);
//Cr�ation du label de l'input
var lbl = document.createElement('label');
lbl.htmlFor = 'inputUpload';
lbl.appendChild(document.createTextNode('Image a uploader'));
formDiv.appendChild(lbl);
//Cr�ation de l'input
var inp = document.createElement('input');
inp.type = 'file';
inp.name = 'inputUpload';
inp.id = 'inputUpload';
formDiv.appendChild(inp);
//Cr�ation interligne
formDiv.appendChild(document.createElement('br'));
//Cr�ation boutton envoie
var submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'envoyer';
submit.name = 'envoyer';
formDiv.appendChild(submit);