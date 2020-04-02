function Personne(nom, prenom, pseudo) {
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;
  this.getNomComplet = function() {
    return nom + " " + prenom + " alias " + pseudo;
  };
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

function afficherPersonne(personne) {
  console.log("Nom : " + personne.nom);
  console.log("Prenom : " + personne.prenom);
  console.log("Pseudo : " + personne.pseudo);
}
afficherPersonne(jules);
afficherPersonne(paul);

console.log("------------------Modif objet------------------");
jules.pseudo = "jules44";
afficherPersonne(jules);
console.log("------------------ajout propriété------------------");
console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 30;
console.log(jules); // un console.log de l'objet permet de visualisé aussi tout les attributs !
afficherPersonne(jules);
console.log(jules.age);

console.log("------------Ajouter une méthode à Personne------------");
Personne.prototype.getInitiales = function() {
  return this.nom.charAt(0) + "." + this.prenom.charAt(0);
};
console.log(jules.getInitiales());

console.log("-------------Objet sans fonction constructeur------------");
var robert = {
  prenom: "Robert.",
  nom: "LEPREFET.",
  pseudo: "robert77.",
  getNomComplet: function() {
    return this.nom + " " + this.prenom + " " + this.pseudo;
  }
};
afficherPersonne(robert);
console.log(robert.getNomComplet);

console.log("------------Héritage via une fonction constructeur------------");

function Client(nom, prenom, pseudo, numeroClient) {
  // this.nom = nom;
  //this.prenom = prenom;
  // this.pseudo = pseudo;
  Personne(nom, prenom, pseudo);
  this.numeroClient = numeroClient;
  this.getInfo = function() {
    return "n° :" + numeroClient + " Nom: " + nom + " prenom : " + prenom;
  };
}
var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfo());
