//Condition if
if (confirm('Voulez-vous exécuter le code Javascript de cette page ?')) {
    alert('Le code a bien été exécuté !');
}

//condition if else
if (confirm('Pour accéder à ce site vous devez être une fille, cliquez sur "OK" si c\'est le cas.')) {
    alert('Vous allez être redirigé vers le site.');
}
else {
    alert("Désolé, vous n'avez pas accès à ce site.");
}

//condition if else if else
var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de - 2 à 30) : "));
if (floor == 0) {
    alert('Vous vous trouvez déjà au rez-de-chaussée.');
} else if (-2 <= floor && floor <= 30) {
    alert("Direction l'étage n°" + floor + ' !');
} else {
    alert("L'étage spécifié n'existe pas.");
}

//Structure switch
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :')); //on précise bien le type de la valeur, ici un nombre avec la fonction parseInt()
switch (drawer) {
    case 1: // on pose chaque cas l'un après l'autre ; on met des apostrophes si l'on vérifie des chaînes de caractères au lieu de nombres
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
        break; // on arrête la fonction pour passer à un autre cas
    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
        break;
    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
        break;
    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
        break;
    default: // on pose une autre possibilité, pour gérer une erreur de l'utilisateur
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}

//Ternaire
var startMessage = 'Votre genre : ', endMessage,
    adult = confirm('Êtes-vous une fille ?');
endMessage = adult ? 'Fille' : 'Garçon';
alert(startMessage + endMessage);

