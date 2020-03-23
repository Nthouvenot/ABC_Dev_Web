//Modifier un lien
var link = document.getElementById('myLink');
var href = link.getAttribute('href'); // On récupère l'attribut « href »
alert(href);
link.setAttribute('href', 'http://blog.crdp-versailles.fr/rimbaud/'); // on édite

//Modifier un lien variante
var link = document.getElementById('myLink');
var href = link.href;
alert(href);
link.href = 'http://www.clg-rimbaud-aubergenville.ac-versailles.fr/';