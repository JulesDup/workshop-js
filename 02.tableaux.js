var ville = new Array("nantes", "paris", "saint-nazaire", "angers", "le mans");
ville.forEach(element => {
  console.log(element);
});
//A l’aide de la fonction every(), déterminer si toutes les villes de la variables villes contiennent la lettre a.
var villeContientA = function(element) {
  return element.includes("a");
};
console.log(
  "Toutes les villes contiennent la lettre a : " + ville.every(villeContientA)
);
//A l’aide de la fonction some(), déterminer si au moins une ville de la variables villes contient le caractère '-'.
var contientTiret = function(element) {
  return element.includes("-");
};
console.log("Au moin une villes contiennent - : " + ville.some(contientTiret));
//A l’aide de la fonction filter(), créer une variable villesSansTiretSansEspace qui contient un tableau dont les villes n’ont ni tiret, ni espace.
var villesSansTiretSansEspace = function(element) {
  return !element.includes("-") && !element.includes(" ");
};
console.log(
  " Villes contiennent - :" + ville.filter(villesSansTiretSansEspace)
);
//A partir du tableau villes, construire un tableau dont :
//◦ la dernière lettre du nom est 's'
//◦ les noms des villes sont en majuscules
var villeEndWithS = ville
  .filter(function(element) {
    return element.endsWith("s");
  })
  .map(function(element) {
    return element.toUpperCase();
  });
console.log(villeEndWithS);
