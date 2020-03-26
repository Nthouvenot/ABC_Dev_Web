var formulaire = document.getElementsByTagName('form')
formulaire[0].action = '#contact';

//On désactive le bouton "ok"
var input = document.getElementsByTagName('input');
var submit;
for (i = 0; i < input.length; i++) {
    if (input[i].type == 'submit') {
        input[i].disabled = true;
        submit = input[i];
    }
}

//on associe deux "écoute" d'événement qui vont apeller la fonction verifierInfo quand le text change dans les input
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
            tmp = lbl[i].innerHTML;//On récupére le contenu du label et on le met dans une temporaire
            lbl[i].innerHTML = '';//On efface le contenu
            //Création d'un élément span pour l'astérisque
            spn = document.createElement('span');
            spn.appendChild(document.createTextNode('*'));
            spn.style = 'color: red;';
            lbl[i].appendChild(spn);
            lbl[i].appendChild(document.createTextNode(tmp)); //On replace le contenu aprés le span
        }
    }
}

function verifierInfoMail() {
    var formatEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/; //regex pour vérifier le format d'un mail
    if (formatEmail.exec(document.getElementById('email').value) == null) alert('email incorrect');
    //On remplace "contactez-nous" par "déja contacté" sur fond rouge
    var contactTitle = document.getElementsByTagName('h3');
    contactTitle[0].innerHTML = '';
    contactTitle[0].style = 'background-color: red; padding-top: 15px';
    var texte = "déja contacté";
    texte.toUpperCase;
    contactTitle[0].appendChild(document.createTextNode(texte));
    alert('Votre demande a bien été prise en compte');
}
