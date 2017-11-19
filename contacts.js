/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contact = ["Carole Lévisse", "Mélodie Nelsonne"];

console.log("Bienvenue dans le gestionnaire des contacts !");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : Quitter");
console.log(" ");

var rep = prompt("Choisissez une option parmi celles proposées : ");

while (rep !== 0) {
	if (rep === "1") {
		console.log("Vous avez choisi l'option 1.");
		console.log("Voici la liste de tous vos contacts :");
		for (var i = 0; i < contact.length; i++) {
			return console.log(contact[i]);
		}
	}
	if (rep === "2") {
		var prenom = prompt("Entrez le prénom du nouveau contact :");
		var nom = prompt("Entrez le nom du nouveau contact :");
		contact.push(prenom + " " + nom);
		console.log("Nous avons introduit ce nouveau contact dans votre liste de contacts.");
	}
}
