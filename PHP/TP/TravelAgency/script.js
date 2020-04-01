var formulaire = document.getElementsByTagName('form')
formulaire[0].method = 'post';
formulaire[0].action = 'actionFormulaire.php';

//On désactive le bouton "ok"
var input = document.getElementsByTagName('input');
for (i = 0; i < input.length; i++) {
    if (input[i].type == 'submit') {
        input[i].disabled = true;
    }
}

//on associe une "écoute" d'événement qui apelle la fonction verifierInfoMail quand le text change dans l'input
document.getElementById('email').onchange = verifierInfoMail;

//on créer une astérique de couleur rouge devant les labels
    var lbl;
    var spn;
    var tmp;
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

function verifierInfoMail() {
    //On vérifie si les deux champ sont rempli
    if (document.getElementById('name').value != '' && document.getElementById('email').value != '') {
        //on vérifie le format de l'e-mail
        var formatEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/; //regex pour vérifier le format d'un mail
        if (formatEmail.exec(document.getElementById('email').value) == null) {
            alert('email incorrect');
        }
        else {
            //On réactive le bouton "ok"
            var input = document.getElementsByTagName('input');
            for (i = 0; i < input.length; i++) {
                if (input[i].type == 'submit') {
                input[i].disabled = false;
                }
            } 
        }
    }
}
