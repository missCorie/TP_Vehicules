import Vehicule from "./vehicule";

export default class Voiture extends Vehicule{
    
    public constructor(participant:string){
        super();
        this._type = "voiture";
        this._capacite_du_reservoir = 50;
        this._niveau_de_carburant = 0;
        this._klaxon = "Tut Tut !"
        this.player_name = participant;
        this.consommation = 5/100 ;
        this.vitesse_max = 150;
    }
}
