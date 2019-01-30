"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicule = /** @class */ (function () {
    function Vehicule() {
        this._capacite_du_reservoir = 0;
        this._niveau_de_carburant = 0;
        this.distance_parcourue = 0;
    }
    Object.defineProperty(Vehicule.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (newType) {
            this._type = newType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "capacite_du_reservoir", {
        get: function () {
            return this._capacite_du_reservoir;
        },
        set: function (newCapacity) {
            this._capacite_du_reservoir = newCapacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "niveau_de_carburant", {
        get: function () {
            return this._niveau_de_carburant;
        },
        set: function (newLevelCarburant) {
            if (newLevelCarburant <= this._capacite_du_reservoir) {
                this._niveau_de_carburant = newLevelCarburant;
            }
            else {
                console.log('Votre réservoir a débordé');
            }
        },
        enumerable: true,
        configurable: true
    });
    Vehicule.prototype.affiche_type = function () {
        console.log("Je suis un(e) " + this._type);
    };
    Vehicule.prototype.mettre_du_carburant = function (litre_de_gasoil) {
        var new_niveau_de_carburant = Math.round(this._niveau_de_carburant + litre_de_gasoil);
        if (new_niveau_de_carburant <= this._capacite_du_reservoir) {
            this._niveau_de_carburant = new_niveau_de_carburant;
            console.log("Votre niveau de carburant est de : " + this._niveau_de_carburant + " litres");
            if (new_niveau_de_carburant == this._capacite_du_reservoir) {
                console.log(this._klaxon + " : votre r\u00E9servoir est plein !");
            }
        }
        else {
            console.log('Votre réservoir a débordé');
        }
    };
    Vehicule.prototype.faire_le_plein = function () {
        console.log("Votre niveau de carburant est : " + this._niveau_de_carburant);
        while (this._niveau_de_carburant < this._capacite_du_reservoir) {
            this.mettre_du_carburant(1);
        }
    };
    // Faire une métode rouler qui va influer sur les propriétés consommation 
    // et distance_parcourue
    Vehicule.prototype.rouler = function () {
        this.faire_le_plein();
        // Pour vérification :
        console.log(this.player_name + " roule :\n        Distance d\u00E9j\u00E0 parcourue : " + this.distance_parcourue + " km\n        Consommation : " + this.consommation + "\n        Niveau de carburant : " + this._niveau_de_carburant + " litres");
        // variable qui détermine la longueur en km de la course
        var kmTotalDeLaCourse = 1000;
        while (this.distance_parcourue <= kmTotalDeLaCourse) {
            // incrémente la propriété distance_parcourue.
            this.distance_parcourue += this.vitesse_max;
            // décrémente la propriété niveau_de_carburant
            var litresConsommes = Math.round(this.vitesse_max * this.consommation);
            var newNiveauCarburant = this._niveau_de_carburant - litresConsommes;
            if (newNiveauCarburant <= 0) {
                this.faire_le_plein();
                this._niveau_de_carburant = newNiveauCarburant;
            }
            else {
                this._niveau_de_carburant = newNiveauCarburant;
            }
            console.log("   \n            => Total distance parcourue : " + this.distance_parcourue + " km \n            => Nouveau niveau de carburant " + this._niveau_de_carburant + " litres\n            ");
        }
    };
    return Vehicule;
}());
exports.default = Vehicule;
