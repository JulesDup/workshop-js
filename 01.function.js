console.log("01 - Fonctions");

//Définition d’une fonction
var nombre1 = 10;
var nombre2 = 20;
var resultat1;
function additionner(nb1, nb2) {
  var rslt = nb1 + nb2;
  return rslt;
}
console.log("resultat1 = " + additionner(nombre1, nombre2));

var somme = additionner;
console.log(somme);

//Variable de type fonction
var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 = " + resultat2);

function multiplication(nb1, nb2) {
  var rslt = nb1 * nb2;
  return rslt;
}
resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 = " + resultat3);

//Fonction comme élément du 1er ordre
var afficherOperation = function(nomOperation, operation, nb1, nb2) {
  console.log(
    nomOperation + "(" + nb1 + "," + nb2 + ") =" + operation(nb1, nb2)
  );
};
console.log(
  "------------------Fonction comme élément du 1er ordre----------------------"
);
//Invoquer la fonction afficherOperation avec les paramètres suivants :
afficherOperation("Somme", additionner, 20, 40);
afficherOperation("multiplication", multiplication, 10, 20);
afficherOperation(
  "Soustraction",
  function(nb1, nb2) {
    return nb1 - nb2;
  },
  15,
  5
);
