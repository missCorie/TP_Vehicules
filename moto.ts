import Vehicule from "./vehicule";
//import { Vehicule } from "./vehicule";

export default class Moto extends Vehicule{

    public constructor(participant:string){
        super();
        this._type = "moto";
        this._capacite_du_reservoir = 30;
        this._niveau_de_carburant = 0;
        this._klaxon = "Bip Bip !"
        this.player_name = participant;
        this.consommation = 2/100 ;
        this.vitesse_max = 180;
    }

}

