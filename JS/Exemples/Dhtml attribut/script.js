//Modifier un lien
var link = document.getElementById('myLink');
var href = link.getAttribute('href'); // On r�cup�re l'attribut � href �
alert(href);
link.setAttribute('href', 'http://blog.crdp-versailles.fr/rimbaud/'); // on �dite

//Modifier un lien variante
var link = document.getElementById('myLink');
var href = link.href;
alert(href);
link.href = 'http://www.clg-rimbaud-aubergenville.ac-versailles.fr/';