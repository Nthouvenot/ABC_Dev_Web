//Condition if
if (confirm('Voulez-vous ex�cuter le code Javascript de cette page ?')) {
    alert('Le code a bien �t� ex�cut� !');
}

//condition if else
if (confirm('Pour acc�der � ce site vous devez �tre une fille, cliquez sur "OK" si c\'est le cas.')) {
    alert('Vous allez �tre redirig� vers le site.');
}
else {
    alert("D�sol�, vous n'avez pas acc�s � ce site.");
}

//condition if else if else
var floor = parseInt(prompt("Entrez l'�tage o� l'ascenseur doit se rendre (de - 2 � 30) : "));
if (floor == 0) {
    alert('Vous vous trouvez d�j� au rez-de-chauss�e.');
} else if (-2 <= floor && floor <= 30) {
    alert("Direction l'�tage n�" + floor + ' !');
} else {
    alert("L'�tage sp�cifi� n'existe pas.");
}

//Structure switch
var drawer = parseInt(prompt('Choisissez le tiroir � ouvrir (1 � 4) :')); //on pr�cise bien le type de la valeur, ici un nombre avec la fonction parseInt()
switch (drawer) {
    case 1: // on pose chaque cas l'un apr�s l'autre ; on met des apostrophes si l'on v�rifie des cha�nes de caract�res au lieu de nombres
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
        break; // on arr�te la fonction pour passer � un autre cas
    case 2:
        alert('Contient du mat�riel informatique : des c�bles, des composants, etc.');
        break;
    case 3:
        alert('Ah ? Ce tiroir est ferm� � cl� ! Dommage !');
        break;
    case 4:
        alert('Contient des v�tements : des chemises, des pantalons, etc.');
        break;
    default: // on pose une autre possibilit�, pour g�rer une erreur de l'utilisateur
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'� preuve du contraire, les tiroirs n�gatifs n'existent pas.");
}

//Ternaire
var startMessage = 'Votre genre : ', endMessage,
    adult = confirm('�tes-vous une fille ?');
endMessage = adult ? 'Fille' : 'Gar�on';
alert(startMessage + endMessage);

