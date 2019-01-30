export default class Vehicule{
    protected _type: string;
    protected _capacite_du_reservoir:number = 0;
    protected _niveau_de_carburant :number = 0;
    protected _klaxon : string;
    public consommation : number;
    public vitesse_max : number;
    public distance_parcourue : number = 0;
    public player_name : string;

    get type(){
        return this._type;
    }
    get capacite_du_reservoir(){
        return this._capacite_du_reservoir;
    }
    get niveau_de_carburant(){
        return this._niveau_de_carburant;
    }
    
    set type(newType){
        this._type = newType;
    }
    set capacite_du_reservoir(newCapacity){
        this._capacite_du_reservoir = newCapacity;
    }
    set niveau_de_carburant(newLevelCarburant:number){
        if(newLevelCarburant <= this._capacite_du_reservoir){
            this._niveau_de_carburant = newLevelCarburant;
        } else {
            console.log('Votre réservoir a débordé');
        }   
    }
    
    affiche_type() {
        console.log(`Je suis un(e) ${this._type}`);
    }

    mettre_du_carburant(litre_de_gasoil:number){
        let new_niveau_de_carburant = Math.round(this._niveau_de_carburant + litre_de_gasoil);

        if (new_niveau_de_carburant <= this._capacite_du_reservoir){
            this._niveau_de_carburant = new_niveau_de_carburant;
            console.log (`Votre niveau de carburant est de : ${this._niveau_de_carburant} litres`);
            if (new_niveau_de_carburant == this._capacite_du_reservoir) {
                console.log (`${this._klaxon} : votre réservoir est plein !`); 
            }   
        } else {
            console.log('Votre réservoir a débordé');
        }
    }

    faire_le_plein(){
        console.log(`Votre niveau de carburant est : ${this._niveau_de_carburant}`);

        while(this._niveau_de_carburant < this._capacite_du_reservoir){
            this.mettre_du_carburant(1);
        }
    }

    // Faire une métode rouler qui va influer sur les propriétés consommation 
    // et distance_parcourue
     
    rouler(){
        this.faire_le_plein();
        // Pour vérification :
        console.log(`${this.player_name} roule :
        Distance déjà parcourue : ${this.distance_parcourue} km
        Consommation : ${this.consommation}
        Niveau de carburant : ${this._niveau_de_carburant} litres`);

        // variable qui détermine la longueur en km de la course
        var kmTotalDeLaCourse = 1000;

        while(this.distance_parcourue<=kmTotalDeLaCourse){

            // incrémente la propriété distance_parcourue.
            this.distance_parcourue += this.vitesse_max;

            // décrémente la propriété niveau_de_carburant
            var litresConsommes = Math.round(this.vitesse_max * this.consommation);
            
            var newNiveauCarburant = this._niveau_de_carburant - litresConsommes;
            
            if(newNiveauCarburant<=0){
                this.faire_le_plein();
                this._niveau_de_carburant = newNiveauCarburant;      
            }else{
                this._niveau_de_carburant = newNiveauCarburant;
            }

            console.log(`   
            => Total distance parcourue : ${this.distance_parcourue} km 
            => Nouveau niveau de carburant ${this._niveau_de_carburant} litres
            `);

            
        }
    }
    
    

}



