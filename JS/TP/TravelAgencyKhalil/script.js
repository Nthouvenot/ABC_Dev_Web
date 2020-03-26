var formulaire = document.getElementsByTagName('form')
formulaire[0].action = '#contact';

//On d�sactive le bouton "ok"
var input = document.getElementsByTagName('input');
var submit;
for (i = 0; i < input.length; i++) {
    if (input[i].type == 'submit') {
        input[i].disabled = true;
        submit = input[i];
    }
}

//on associe deux "�coute" d'�v�nement qui vont apeller la fonction verifierInfo quand le text change dans les input
document.getElementById('name').onchange = verifierInfo;
document.getElementById('email').onchange = verifierInfo;
submit.onclick = verifierInfoMail;


function verifierInfo() {
    var lbl;
    var spn;
    var tmp;
    if (document.getElementById('name').value != '' && document.getElementById('email').value != '') {
        submit.disabled = false;
    }
    else {
        lbl = document.getElementsByTagName('label');
        for (i = 0; i < lbl.length; i++) {
            tmp = lbl[i].innerHTML;//On r�cup�re le contenu du label et on le met dans une temporaire
            lbl[i].innerHTML = '';//On efface le contenu
            //Cr�ation d'un �l�ment span pour l'ast�risque
            spn = document.createElement('span');
            spn.appendChild(document.createTextNode('*'));
            spn.style = 'color: red;';
            lbl[i].appendChild(spn);
            lbl[i].appendChild(document.createTextNode(tmp)); //On replace le contenu apr�s le span
        }
    }
}

function verifierInfoMail() {
    var formatEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/; //regex pour v�rifier le format d'un mail
    if (formatEmail.exec(document.getElementById('email').value) == null) alert('email incorrect');
    //On remplace "contactez-nous" par "d�ja contact�" sur fond rouge
    var contactTitle = document.getElementsByTagName('h3');
    contactTitle[0].innerHTML = '';
    contactTitle[0].style = 'background-color: red; padding-top: 15px';
    var texte = "d�ja contact�";
    texte.toUpperCase;
    contactTitle[0].appendChild(document.createTextNode(texte));
    alert('Votre demande a bien �t� prise en compte');
}
