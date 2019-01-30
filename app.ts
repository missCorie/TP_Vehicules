import Moto from "./moto";
import Voiture from "./voiture";
import Camion from "./camion";

// création d'une variable paramètre de la fonction mettre_du_carburant
var litre_de_gasoil:number = 0;


/*Création de 3 nouveaux véhicules et test des fonctions : 
- affiche_type()
- mettre du carburant
- faire le plein

let moto1 = new Moto("moto1");
moto1.affiche_type();
moto1.niveau_de_carburant(20);
moto1.mettre_du_carburant(10);*/

let flashMcQueen = new Voiture("flashMcQueen");
//flashMcQueen.affiche_type();
//flashMcQueen.mettre_du_carburant(3);
//flashMcQueen.faire_le_plein();
//flashMcQueen.rouler(10);
//flashMcQueen.rouler(20);

let martin = new Camion("Martin");
// martin.affiche_type();
//martin.mettre_du_carburant(300);


// tableau de participants et attribution d'un véhicule
let tabParticipants : Array<object>;
tabParticipants = [
    { 
        participant_name:"Amandine",
        type_vehicule: "moto"
    }, 
    {
        participant_name:"Corinne", 
        type_vehicule: "voiture"
    }, 
    {   
        participant_name:"Julien",
        type_vehicule: "camion"
    }
];

// Création d'un tableau d'objet vehicules
let tabVehicules:Array<object> = [];

for (let joueur of tabParticipants){
    // console.log(joueur); => correspond à un objet
    var definitionVehicule:object;

    switch (joueur["type_vehicule"]) {
        case 'moto':
        definitionVehicule = new Moto(joueur["participant_name"]);
          break;
        case 'voiture':
        definitionVehicule = new Voiture(joueur["participant_name"]);
            break;
        case 'camion':
        definitionVehicule = new Camion(joueur["participant_name"]);
          break;
        default:
          console.log('Désolé, ceci n\'est pas un véhicule.');
      }
    
    tabVehicules.push(definitionVehicule);
    
}
//console.log(tabVehicules);

// Affichage de l'état du véhicule
function affichageEtatDuVehicule(){
    for (let element in tabVehicules){
       
        console.log(`${tabVehicules[element]["_type"]} de ${tabVehicules[element]["player_name"]} :
        a parcouru ${tabVehicules[element]["distance_parcourue"]} km,
        il lui reste ${tabVehicules[element]["_niveau_de_carburant"]} litres de carburant dans le réservoir.`);
    }
}

// tant que _niveau_de_carburant > 0 => roule ()
// utiliser un setInterval pour le timer avec callback
// setInterval est dejà une boucle pas besoin donc de do while...
var interval:any;

function course(tabVehicules){   
    for (let element of tabVehicules) {
        element.rouler();   
    }    
}

course(tabVehicules);
