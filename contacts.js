/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contact = {
	init: function(prenom, nom) {
		this.prenom = prenom;
		this.nom = nom;
	},

	decrire: function (){
		var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
		return description;

	}
};

var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");

var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");



console.log("Bienvenue dans le gestionnaire des contacts !");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : Quitter");
console.log(" ");

var rep = prompt("Choisissez une option parmi celles proposées : ");

var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

	if (rep === "1") {
		console.log("Vous avez choisi l'option 1.");
		console.log("Voici la liste de tous vos contacts :");
		
		contacts.forEach(function (contact) {
		console.log(contact.decrire());
		});
}
	if (rep === "2") {
		var contactnP = prompt("Entrez le nom de votre nouveau contact");
		var contactnN = prompt("Entrez le prénom de votre nouveau contact");
		var contactX = Object.create(Contact);
		contactX.init(contactnP, contactnN);
		contacts.push(contactX);
		
	}

/*for (var i = 0;rep === "0" || rep === "1" || rep === "2";i++) {
	
		for (var i = 0; i < contact.length; i++) {
			console.log(contact[i]);
		}
	}
	if (rep === "2") {
		var prenom = prompt("Entrez le prénom du nouveau contact :");
		var nom = prompt("Entrez le nom du nouveau contact :");
		contact.push(prenom + " " + nom);
		console.log("Nous avons introduit ce nouveau contact dans votre liste de contacts.");
		rep;
	}
	if (rep === "O") {
		console.log("Au revoir !");
	} 
}

*/

