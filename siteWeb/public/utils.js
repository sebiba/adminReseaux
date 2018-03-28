// librairie de fonctions utiles
// ChL octobre 2014

// fonctions utilitaires
function setElem(id, v){
  // place la valeur v dans l'élément id
  document.getElementById(id).innerHTML = v;
}
function addElem(id, v){
  // ajoute la valeur v au contenu de l'élément id
  document.getElementById(id).innerHTML += v;
}   
/*function getElem(id){
  // renvoie le contenu de l'élément id
  return document.getElementById(id).innerHTML;
} */