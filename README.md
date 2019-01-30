Ce TP vous permettra d'approfondir le concept d'objet avec le langage Typescript. L'idée et de simuler une sorte de mini course de véhicules. On se concentre ici sur l'aspect backend, et aucune interface n'est à coder. Tout se fait dans la console. Pour ceux qui auront fini à l'avance, vous avez quelques suggestions pour continuer. Je suis resté assez vague dans les tâches à réaliser, faites preuve d'imagination et de logique pour atteindre les différents objectifs à réaliser. N'hésitez pas à me poser des questions si quelque chose ne vous semble pas clair...



Mettez en place votre environnement de dev dans un nouveau dossier.
Créez la classe mère Vehicule, et les classes filles moto, voiture, camion (si possible dans des fichiers séparés).
Faites une première étape de test avec des console log distincts dans chaque constructeur


Rajouter un attribut type a la classe véhicule, avec ses getters et setters. Il aura trois valeurs possibles : moto, voiture, camion
Définnissez le type de véhicule dans le constructeur de chaque classe fille
Créez une procédure affiche_type() dans la classe véhicule (qui ne fait qu'afficher le type du véhicule), puis exécuter la sur un objet


Créez un attribut capacite_du_reservoir et un attribut niveau_de_carburant
Créez les getters / setters respectifs
Définissez une capacité maximum du réservoir pour chaque type (ex : moto 30, voiture 50, camion 200)


Creéz une procédure qui permet de rajouter du carburant (mettre_du_carburant)
N'oubliez pas que le niveau de carburant doit etre compris entre 0 et la capacité max.
Attention à placer vos controle d'intégrité aux bons endroits

Mettre un coup de klaxon quand le plein est terminé. Chaque véhicule à son propre klaxon.


Dans votre script "main" (principal), créez un tableau de participants (des personnes), et faites en sorte de leur attribuer chacun un véhicule différent.
Vous pouvez rajouter un attribut player_name, et lui attribuer des valeurs.


Créez les attributs consommation, vitesse_max et distance_parcourue.
Faire une métode rouler qui va influer sur les propriétés consommation et distance_parcourue
cette méthode "rouler" va décrémenter la propriété niveau_de_carburant et incrémenter la propriété distance_parcourue.
Vous pouvez vous baser sur un simple timer pour gérer "les cycles", et une fonction récursive.
Si le réservoir est vide, le joueur doit faire le plein, et doit attendre plus longtemps que d'habitude pour pouvoir rouler à nouveau.


Créer un attribut distance_a_parcourir, un attribut static rank et un attribut win.
Faites en sorte que quand un joueur dépasse la distance a parcourir, le programme stop sa course, affiche son rang d'arivée et mette un coup de klaxon


Pour finir, écrivez une méthode privée dans chaque classe fille qui illustre la glorieuse victoire (ex : wheeling, dérapage controllé, fumée blanche).
Exécuter les quand les joueurs finissent la courses.


Créer un attribut statique "nombre de joueurs" dans la classe véhicule.
Créer un attribut statique "joueurs ayant fini" dans la classe véhicule.
Créer une méthode statique dans la classe véhicule qui va déterminer la fin de la course est afficher un message de félicitation aux joueurs.

A faire en plus si vous avez fini :

- ajouter la notion "d'interfaces" vu dans le premier cours (par ex : définition d'un joueur)


Interface graphique :
- Créer une page index.html et lancer votre script depuis un navigateur web, avec l'aide de requireJS (pour les modules)
- Installer Jquery en tant que module, et faites en sorte que Jquery soit accessible depuis votre script JS (voir les définitions avec typing)(note : vous devez être capable d'importer jquery EN TANT QUE MODULE dans votre script, et que TS vous émette des erreurs si vous utilisez des méthodes Jquery qui n'existe pas)

- Faire une interface graphique pour saisir le nom des joueurs et leur type de véhicule respectif (champ texte + liste déroulante)
- Faire un bouton "Go !" qui vérifiera que tous les participants sont prets, et qui lancera la course
- Répercuter les données "temps réel" de tous vos participants dans l'interface graphique


Interaction :
- imaginer des interactions entre les véhicules# TP_Vehicules

