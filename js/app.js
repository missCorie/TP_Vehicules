"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moto_1 = require("./moto");
var voiture_1 = require("./voiture");
var camion_1 = require("./camion");
// création d'une variable paramètre de la fonction mettre_du_carburant
var litre_de_gasoil = 0;
/*Création de 3 nouveaux véhicules et test des fonctions :
- affiche_type()
- mettre du carburant
- faire le plein

let moto1 = new Moto("moto1");
moto1.affiche_type();
moto1.niveau_de_carburant(20);
moto1.mettre_du_carburant(10);*/
var flashMcQueen = new voiture_1.default("flashMcQueen");
//flashMcQueen.affiche_type();
//flashMcQueen.mettre_du_carburant(3);
//flashMcQueen.faire_le_plein();
//flashMcQueen.rouler(10);
//flashMcQueen.rouler(20);
var martin = new camion_1.default("Martin");
// martin.affiche_type();
//martin.mettre_du_carburant(300);
// tableau de participants et attribution d'un véhicule
var tabParticipants;
tabParticipants = [
    {
        participant_name: "Amandine",
        type_vehicule: "moto"
    },
    {
        participant_name: "Corinne",
        type_vehicule: "voiture"
    },
    {
        participant_name: "Julien",
        type_vehicule: "camion"
    }
];
// Création d'un tableau d'objet vehicules
var tabVehicules = [];
for (var _i = 0, tabParticipants_1 = tabParticipants; _i < tabParticipants_1.length; _i++) {
    var joueur = tabParticipants_1[_i];
    // console.log(joueur); => correspond à un objet
    var definitionVehicule;
    switch (joueur["type_vehicule"]) {
        case 'moto':
            definitionVehicule = new moto_1.default(joueur["participant_name"]);
            break;
        case 'voiture':
            definitionVehicule = new voiture_1.default(joueur["participant_name"]);
            break;
        case 'camion':
            definitionVehicule = new camion_1.default(joueur["participant_name"]);
            break;
        default:
            console.log('Désolé, ceci n\'est pas un véhicule.');
    }
    tabVehicules.push(definitionVehicule);
}
//console.log(tabVehicules);
// Affichage de l'état du véhicule
function affichageEtatDuVehicule() {
    for (var element in tabVehicules) {
        console.log(tabVehicules[element]["_type"] + " de " + tabVehicules[element]["player_name"] + " :\n        a parcouru " + tabVehicules[element]["distance_parcourue"] + " km,\n        il lui reste " + tabVehicules[element]["_niveau_de_carburant"] + " litres de carburant dans le r\u00E9servoir.");
    }
}
// tant que _niveau_de_carburant > 0 => roule ()
// utiliser un setInterval pour le timer avec callback
// setInterval est dejà une boucle pas besoin donc de do while...
var interval;
function course(tabVehicules) {
    for (var _i = 0, tabVehicules_1 = tabVehicules; _i < tabVehicules_1.length; _i++) {
        var element = tabVehicules_1[_i];
        element.rouler();
    }
}
course(tabVehicules);
