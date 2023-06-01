class Program {

	constructor() {
	    //on initialise notre perso et le dragon (instancie la classes avec les propriétés pour customiser)
	    this.gege = new Perso('Kratos', 300, 50, 7, 120);
		this.nanard = new Perso('Dragon', 280, 45, 18, 160);
	    
	    //appel de la fonction affichage
	    this.affichage()
	    //création du gestionnaire d'événements
	    
	    //ton this par défaut représente l'élément qui a déclenché l'événement
	    //si on bind on transmet le this de la class dans l'élément
	    document.querySelector("#attaquer").addEventListener("click", this.onClickAttaque.bind(this))
	    document.querySelector('#defendre').addEventListener('click', this.onClickDefense.bind(this));
		document.querySelector('#sort').addEventListener('click', this.onClickSort.bind(this));
	    //document.querySelector("#destroy").addEventListener("click", this.onDestroy)
	}
	
	affichage() {
	    //si les points de vie des deux joueurs sont suppérieurs à zero
	    if(this.gege.hp > 0 && this.nanard.hp > 0) {
	        //on affiche tout en bas les points de vie, d'attaque de défense et de magie des 2 persos
	    	document.querySelector("#perso1").innerText = this.gege.name+ ' : '+this.gege.hp+' HP, attaque : ' + this.gege.attack + ', defense : '+ this.gege.defense +', magie : '+ this.gege.magie;
	    	
	    	document.querySelector("#perso2").innerText = this.nanard.name+ ' : '+this.nanard.hp+' HP, attaque : ' + this.nanard.attack + ', defense : '+ this.nanard.defense +', magie : '+ this.nanard.magie;
	    //sinon
	    }else{
	        //on cache la palette de commande
	        document.querySelector("#commande").style.display = "none"
	        //si le joueur à encore des pts de vie
	        if(this.gege.hp > 0) {
	            //on affiche tout en bas notre victoire
	            document.querySelector("#affichage").innerHTML = '<p>Victoire de : '+this.gege.name+'</p>'
	       //sinon
	        }else{
	            //on affiche tout en bas notre défaite
	            document.querySelector("#affichage").innerHTML = '<p>Victoire de : '+this.nanard.name+'</p>'
	        }
	    }       
	}
	
	/*onDestroy = (e)=>{
		console.log("destroy", this)
	}*/
	
	onClickAttaque(event) {
	    //suppression du comportement par défault du navigateur
	    event.preventDefault()
	    //on vide l'historique
	    document.querySelector("#info p").innerHTML = ""
	    //notre perso attaque (appel de fonction)
	    this.gege.attaquer(this.nanard);
	    //l'adversaire contre
	    this.contre()
	    //on affiche l'état des joueurs(appel fonction)
	    this.affichage()
	}
	
	onClickSort(event) {
	    //suppression du comportement par défault du navigateur
	    event.preventDefault()
	    //on vide l'historique
	    document.querySelector("#info p").innerHTML = ""
	    //si on a toujours de la magie
	    if (this.gege.magie > 0) {
	        //on jette un sort sur l'adversaire
	        this.gege.sort(this.nanard);
	        //l'adversaire contre
	        this.contre()
	        //on affiche l'état des joueurs(appel fonction)
	        this.affichage()
	   //sinon
	    }else{
	    	//console qu'on a plus de magie
	    	console.log('plus de points de magie, veuillez jouer autre chose');
	    }
	        
	}
	
	onClickDefense(event) {
	    //suppression du comportement par défault du navigateur
	    event.preventDefault()
	    //on vide l'historique
	    document.querySelector("#info p").innerHTML = ""
	    //on se défend (appel de fonction)
	    this.gege.defendre();
	    //l'aversaire contre
	    this.contre()
	   //on affiche l'état des joueurs(appel fonction)
	   this.affichage()
	}
	
	contre() {
	    //on tire un chiffre au hasard entre 1 et 3
	    let random = getRandomInteger(1, 3);
	    switch(random){
	    	case 1:
	    		//le dragon attaque
	    		this.nanard.attaquer(this.gege);
	    	break;
	    	case 2:
	    		//si le dragon a toujours des pts de magie
	    		if(this.nanard.magie > 0) {
	    			//il peut jeter un sort
	    			this.nanard.sort(this.gege);
	    		}else{//sinon
	    			console.log('Plus de points de magie, on change de technique');
	    			//on relance un contre
					this.contre();
	    		}
	    	break;
	    	case 3:
	    		//le dragon se defend
	    		this.nanard.defendre();
	    	break;
	    }
	}
}