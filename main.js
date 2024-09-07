
const tableau = [
    {
    question :"QUEL EST LE PLUS GRAND MANIPULATEUR DE TOUT ANIMES CONFONDUS ?",
    reponse :"SÕSUKE AIZEN"
  },
  {
    question :"CONNAIS-TU SA MAJESTÉ SÕSUKE AIZEN ?",
    reponse :"OUI"
  },
  {
    question :"SA MAJESTÉ APPARTIENT À QUEL UNIVERS ?", 
    reponse :"BLEACH"
  }, 
  {
    question :"COMMENT S´APPELLE LE NOBLE ZANPAKUTŌ DE SA MAJESTÉ ?",
    reponse :"KIOKA SUIGËTSU"
  }, 
    {
    question :" QUEL ÉTAIT L'OBJECTIF DE SA MAJESTÉ SÕSUKE AIZEN ?",
    reponse :"LE SOÛL KING"
  },
  {
    question :"CONNAIS L'ÉTENDU DE LA PUISSANCE DU NOBLE KIOKA SUIGETSU ?",
    reponse :"NON"
  }
  ];
  
  let nombreBonneReponse =0;
  
  for (var i = 0; i < tableau.length; i++) {
    let reponses = prompt(tableau[i].question );
    
  // Vérifier si l'utilisateur a bien entré quelque chose
  if (reponses !== null) {
    // Convertir en majuscules et supprimer les espaces à la fin
    reponses = reponses.toUpperCase().trim();
  
    // Afficher le résultat
  //  console.log("Texte transformé : " + reponses);
  }
    
    alert('VOTRE RÉPONSE EST : ' +reponses);
    
    if (reponses == tableau[i].reponse) {
      nombreBonneReponse++;
      alert("VOUS AVEZ DONNEZ LA BONNE RÉPONSE ")
        }
        else {
          alert("VOUS AVEZ DONNEZ UNE MAUVAISE RÉPONSE");
        }
      };
      
      if (nombreBonneReponse <= 1) {
        alert(`VOUS AVEZ DONNEZ ${nombreBonneReponse} BONNE RÉPONSE sur ` +  tableau.length )
      }
      else(
          alert(`VOUS AVEZ DONNEZ ${nombreBonneReponse} BONNES REPONSES sur `+ tableau.length)
          );
          
