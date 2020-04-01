var formulaire = document.getElementsByTagName('form')
formulaire[0].method = 'post';
formulaire[0].action = 'actionFormulaire.php';

//On d�sactive le bouton "ok"
var input = document.getElementsByTagName('input');
for (i = 0; i < input.length; i++) {
    if (input[i].type == 'submit') {
        input[i].disabled = true;
    }
}

//on associe une "�coute" d'�v�nement qui apelle la fonction verifierInfoMail quand le text change dans l'input
document.getElementById('email').onchange = verifierInfoMail;

//on cr�er une ast�rique de couleur rouge devant les labels
    var lbl;
    var spn;
    var tmp;
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

function verifierInfoMail() {
    //On v�rifie si les deux champ sont rempli
    if (document.getElementById('name').value != '' && document.getElementById('email').value != '') {
        //on v�rifie le format de l'e-mail
        var formatEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/; //regex pour v�rifier le format d'un mail
        if (formatEmail.exec(document.getElementById('email').value) == null) {
            alert('email incorrect');
        }
        else {
            //On r�active le bouton "ok"
            var input = document.getElementsByTagName('input');
            for (i = 0; i < input.length; i++) {
                if (input[i].type == 'submit') {
                input[i].disabled = false;
                }
            } 
        }
    }
}
