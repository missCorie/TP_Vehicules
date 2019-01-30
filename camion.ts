import Vehicule from "./vehicule";

export default class Camion extends Vehicule{
    
    public constructor(participant:string){
        super();
        this._type = "camion";
        this._capacite_du_reservoir = 200;
        this._niveau_de_carburant = 0;
        this._klaxon = "POUM POUM !"
        this.player_name = participant;
        this.consommation = 30/100 ;
        this.vitesse_max = 90;
    }
}


