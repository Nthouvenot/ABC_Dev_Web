var age;
age = parseInt(prompt('Entrez votre age'));
if (age > 1 && age <= 6) {
    alert('Vous ête un jeune enfant.');
}
else if (age > 6 && age <= 11) {
    alert('Vous ête un enfant qui a attein l\'age de raison.');
}
else if (age > 11 && age <= 17) {
    alert('Vous ête un adolescent.');
}
else if (age > 17 && age <= 120) {
    alert('Vous ête un adulte')
}
else if (age > 120) {
    alert('Comment pouvez vous être aussi vieux ???')
}
else {
    alert('Vous ête un bébé');
}

var age2;
age2 = parseInt(prompt('Entrez votre age'))
if (age2 > 1 && age2 <= 6) {
    alert('Vous ête un jeune enfant');
}
if (age2 > 6 && age2 <= 11) {
    alert('Vous ête un enfant qui a attein l\'age de raison');
}
if (age2 > 12 && age2 <= 17) {
    alert('Vous ête un adolescent')
}
if (age2 > 17 && age2 < 120) {
    alert('Vous ête un adulte')
}
if (age2 > 120) {
    alert('Vous ête un immortel ?')
}
else {
    alert('Vous ête un bébé');
}