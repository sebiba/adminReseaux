// votre nom + classe ici

  // acheter/ajouter un livre
  
  var catalogue = {
    b0124 : {auteur: 'B.Y.',  titre: 'Connectique',            prix : 5.20},
    b0254 : {auteur: 'L.Ch.', titre: 'Programmation C',        prix : 4.75},
    b0334 : {auteur: 'L.Ch.', titre: 'JavaScript',             prix : 6.40},
    b0250 : {auteur: 'D.A.',  titre: 'Mathématiques',          prix : 6.10},
    b0604 : {auteur: 'V.V.',  titre: 'Objets',                 prix : 4.95},
    b0025 : {auteur: 'D.M.',  titre: 'Electricité',            prix : 7.15},
    b0099 : {auteur: 'D.M.',  titre: 'Phénomènes Périodiques', prix : 6.95},
    b0023 : {auteur: 'V.MN.', titre: 'Programmation Java',     prix : 5.75},
    b0100 : {auteur: 'D.Y.',  titre: 'Bases de Données',       prix : 6.35},
    b0147 : {auteur: 'V.V.',  titre: 'Traitement de Signal',   prix : 4.85},  
    b0004 : {auteur: 'B.W.',  titre: 'Sécurité',               prix : 5.55}, 
    b0074 : {auteur: 'B.Y.',  titre: 'Electronique digitale',  prix : 4.35}, 
    b0257 : {auteur: 'D.Y.',  titre: 'Programmation Multimedia', prix : 6.00}
  };
 
  var achats = {};
  var objectChoix = {};
  var objectFinal = {};
  
  function objectTri(b){
    objectChoix = {};
    objectFinal = {};
    if (b == "catalogue"){
      objectChoix = catalogue;
    }
    else {
      objectChoix = achats;
    }
    var tableauTri = Object.keys(objectChoix).sort();
    for (i in tableauTri){
      objectFinal[tableauTri[i]] = catalogue[tableauTri[i]];
    }
  }
  
  function addLivres(b){ 
  // acheter le livre dont la référence est le nom du bouton b
    var ref = b.name;
    if (ref in achats) {      // si livre déjà acheté
      achats[ref].nbre++;
    }                // un exemplaire de plus
    else {                 // sinon
      achats[ref] = catalogue[ref];      // acheter un exemplaire
      achats[ref].nbre = 1;
    } 
    objectTri("achats");
    afficherAchats(); // réafficher achats
  }

  // décommander un livre de la liste des achats
  function delLivre(b){
    // enlever le livre dont la référence est le nom du bouton b
    var ref = b.name;
    achats[ref].nbre--;
    if (achats[ref].nbre == 0){
    delete achats[ref];
    }
    objectTri("achats");
    afficherAchats();
    calculerTotal();    // rafraîchir
  }
 
  // afficher le catalogue
  function afficherCatalogue(){ // afficher le catalogue
  var ligne;
  objectTri("catalogue");
    for(var i in objectFinal) {  // pour chaque ligne du catalogue
      ligne = '<tr>';
      ligne += '<td class=ref>' + i + '</td>';  // reference
      ligne += '<td class=aut>' + objectFinal[i].auteur + '</td>';  // auteur
      ligne += '<td class=tit>' + objectFinal[i].titre + '</td>';  // titre
      ligne += '<td class=prx>' + objectFinal[i].prix + '</td>';  // prix   
      ligne += '<td class=ach>' + "<input type=button name="+i+ " value=Add onclick='addLivres(this);'>" + '</td>'   // futur bouton d'achat
      ligne += '</tr>';
      addElem("tbc", ligne); // mettre en place la ligne avec la fonction utilitaire fournie
    }
  }
  
  // afficher les achats
  function afficherAchats(){ 
    document.getElementById("tba").innerHTML = "";
      var ligne = [];
    for (var i in objectFinal){
      ligne.push("<tr><td class=ref>" + i + "</td><td class=tit>" + objectFinal[i].titre + "</td><td class=nbr>" + objectFinal[i].nbre + "</td><td class=del>" + "<input type=button name="+i+ " value=Del onclick='delLivre(this);'>" + "</td></tr>")
      /*ligne = '<tr>';
      ligne += '<td class=ref>' + i + '</td>';  // reference
      ligne += '<td class=tit>' + objectFinal[i].titre + '</td>';  // titre
      ligne += '<td class=nbr>' + objectFinal[i].nbre + '</td>';  // prix   
      ligne += '<td class=del>' + "<input type=button name="+i+ " value=Del onclick='delLivre(this);'>" + '</td>'   // futur bouton d'achat
      ligne += '</tr>';
      ligne.join("")
      addElem("tba", ligne); // mettre en place la ligne avec la fonction utilitaire fournie
      calculerTotal();*/
    }
    var texteFinal = ligne.join("");
    setElem("tba", texteFinal)
  }  
  
  // calculer le total des achats
  function calculerTotal(){ 
    var total = 0
    for (var i in achats) {
      total = total + achats[i].nbre*achats[i].prix;
    }
    setElem("tot", total.toFixed(2));
  }
 