var text = document.getElementById('text');
text.addEventListener('focus', function (e) {
    e.target.value = "Vous avez le focus !";
}, true);
text.addEventListener('blur', function (e) {
    e.target.value = "Vous n'avez pas le focus !";
}, true);

//Pour désactiver un champ de texte
var text = document.getElementById('text');
text.disabled = true;

//Utiliser checked pour des boutons radio :
function check() {
    var inputs = document.getElementsByTagName('input'),
        inputsLength = inputs.length;
    for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type == 'radio' && inputs[i].checked) {
            alert('La case cochée est la n°' + inputs[i].value);
        }
    }
}