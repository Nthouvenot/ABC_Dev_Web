var prenomSaisi = '';
var myArray = [];

while (true) {
	prenomSaisi = prompt('Entrez un pr�nom :');
	if (prenomSaisi) {
		myArray.push(prenomSaisi)
		// Ajoute le nouveau pr�nom dans le tableau
	}
	else {
		break; // On quitte la boucle
	}
}

for (var i = 0, c = myArray.length; i < c; i++) {
	alert(myArray[i]); // Affiche les pr�noms un par un
}


