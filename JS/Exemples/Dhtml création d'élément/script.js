//Cr�er un �l�ment
var newLink = document.createElement('a');
newLink.id = 'sdz_link';
newLink.href = 'http://blog.crdp-versailles.fr/rimbaud/';
newLink.title = 'D�couvrez le blog de la Classe Actu !';
newLink.setAttribute('tabindex', '10');
document.getElementById('myP').appendChild(newLink); // le nouvel �l�ment est le dernier enfant dans le paragraphe avec id 'myP'
var newLinkText = document.createTextNode("Le Tonnerre de Rimbaud");
newLink.appendChild(newLinkText); // ces deux lignes pour ajouter le texte

//Remplacer un �l�mement
var link = document.getElementsByTagName('a')[0];
var newLabel = document.createTextNode('et un hyperlien');
link.replaceChild(newLabel, link.firstChild);

//Supprimer un �l�ment
var link2 = document.getElementsByTagName('a')[0];
link2.parentNode.removeChild(link);

//V�rifier la pr�sence d'�l�ments enfant hasChildNodes()
var paragraph = document.getElementsByTagName('p')[0];
alert(paragraph.hasChildNodes()); // Affiche true

//Ins�rer un �l�ment avant un autre insertBefore() :
var paragraph2 = document.getElementsByTagName('p')[0];
var emphasis = document.createElement('em'),
    emphasisText = document.createTextNode(' en emphase l�g�re ');
emphasis.appendChild(emphasisText);
paragraph2.insertBefore(emphasis, paragraph2.lastChild);