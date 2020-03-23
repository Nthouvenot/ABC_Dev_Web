alert('Hello world !'); //appel implicite a l'objet windows
window.alert('Hello world !'); //appel méthode alert de l'objet window

//Avec getElementById()
var div = document.getElementById('myDiv');
alert(div);

//Avec getElementByTagName
var divs = document.getElementsByTagName('div');
for (var i = 0, c = divs.length; i < c; i++) {
    alert('Element n° ' + (i + 1) + ' : ' + divs[i]);
}

//Définir un nouveau contenu
document.getElementById('myDiv').innerHTML = '<blockquote>Je mets une citation à la place du paragraphe</blockquote > ';

//Ajouter un nouveau contenu
document.getElementById('myDiv').innerHTML += ' et <strong>une portion mise en emphase</strong >.';