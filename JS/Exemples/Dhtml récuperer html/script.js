//parentNode permet d'accéder a l'élément parent d'un élément
var paragraph = document.getElementById('myP');
var blockquote = paragraph.parentNode;

//Vérifier type et nom d'un noeud
var paragraph = document.getElementById('myP');
alert(paragraph.nodeType + '\n\n' + paragraph.nodeName.toLowerCase());

//firstChild et lastChild permettent d'accéder au premier et au dernier élément d'un nœud
var paragraph2 = document.getElementById('myP2');
var first = paragraph.firstChild;
var last = paragraph.lastChild;
alert(first.nodeName.toLowerCase());
alert(last.nodeName.toLowerCase());

//Variante
var paragraph3 = document.getElementById('myP2');
var first3 = paragraph.firstChild;
var last3 = paragraph.lastChild;
alert(first3.nodeValue);
alert(last3.firstChild.data);

//accéder a l'élément suivant avec nextSibling
var paragraph4 = document.getElementById('myP2');
var first4 = paragraph.firstChild;
var next4 = first.nextSibling;
alert(next.firstChild.data); // Affiche « un lien »

//Accéder a lélément précedent avec previousSibling
var paragraph = document.getElementById('myP');
var child = paragraph.lastChild; // On prend le dernier enfant
while (child) {
    if (child.nodeType === 1) { // C'est un élément HTML
        alert(child.firstChild.data);
    } else { // C'est certainement un noeud textuel
        alert(child.data);
    }
    child = child.previousSibling; // À chaque tour de boucle, on prend l'enfant précédent
}