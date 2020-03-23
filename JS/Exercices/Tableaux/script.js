var prenomSaisi = '';
var myArray = [];

while (true) {
	prenomSaisi = prompt('Entrez un prénom :');
	if (prenomSaisi) {
		myArray.push(prenomSaisi)
		// Ajoute le nouveau prénom dans le tableau
	}
	else {
		break; // On quitte la boucle
	}
}

for (var i = 0, c = myArray.length; i < c; i++) {
	alert(myArray[i]); // Affiche les prénoms un par un
}


