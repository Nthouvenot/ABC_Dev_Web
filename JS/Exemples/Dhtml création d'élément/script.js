//Créer un élément
var newLink = document.createElement('a');
newLink.id = 'sdz_link';
newLink.href = 'http://blog.crdp-versailles.fr/rimbaud/';
newLink.title = 'Découvrez le blog de la Classe Actu !';
newLink.setAttribute('tabindex', '10');
document.getElementById('myP').appendChild(newLink); // le nouvel élément est le dernier enfant dans le paragraphe avec id 'myP'
var newLinkText = document.createTextNode("Le Tonnerre de Rimbaud");
newLink.appendChild(newLinkText); // ces deux lignes pour ajouter le texte

//Remplacer un élémement
var link = document.getElementsByTagName('a')[0];
var newLabel = document.createTextNode('et un hyperlien');
link.replaceChild(newLabel, link.firstChild);

//Supprimer un élément
var link2 = document.getElementsByTagName('a')[0];
link2.parentNode.removeChild(link);

//Vérifier la présence d'éléments enfant hasChildNodes()
var paragraph = document.getElementsByTagName('p')[0];
alert(paragraph.hasChildNodes()); // Affiche true

//Insérer un élément avant un autre insertBefore() :
var paragraph2 = document.getElementsByTagName('p')[0];
var emphasis = document.createElement('em'),
    emphasisText = document.createTextNode(' en emphase légère ');
emphasis.appendChild(emphasisText);
paragraph2.insertBefore(emphasis, paragraph2.lastChild);