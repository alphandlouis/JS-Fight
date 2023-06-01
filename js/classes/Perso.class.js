class Perso {
	constructor(name, hp, attack, defense, magie) {
	    //création des propriétés name, hp, attack, defense et magie
	    this.name = name
	    this.hp = hp
	    this.attack = attack
	    this.defense = defense
	    this.magie = magie
	}
	
	attaquer(perso) {
	    //on enlève les points d'attaque par rapport aux points de défense de l'adversaire on stock dans une variable dégats
	    let degats = this.attack - perso.defense
	    //si les dégats sont inférieur à 10
	    if (degats < 10) {
	        //on indique dans l'historique que l'adversaire ne sent rien
	        let p = document.createElement("p")
	        p.innerHTML = perso.name +'ne sent plus rien....'
	        document.querySelector("#info p").appendChild(p)
	        //on met 10 pts de dégats par défaut
	        degats = 10
	    }   
	   //on soustrait les pts de dégats au pts de vie de l'adversaire
	   perso.hp -= degats
	   //on racontre ce qui s'est passé dans l'historique
	    let p2 = document.createElement("p")
	    p2.innerHTML = this.name +' Attaque, il enlève '+ degats + ' hp a '+ perso.name
	     document.querySelector("#info p").appendChild(p2)
	   //si l'adversaire a ses pts de vie inférieur ou égal à zero
	   if  (perso.hp <= 0) {
	        //on attribut 0 hp à celui-ci
	        perso.hp = 0
	   }     
	   //on ajoute une phrase à l'historique qui indique l'état de vie de l'adversaire
	   let p3 = document.createElement("p")
	   p3.innerHTML = perso.name +' a  '+ perso.hp+ ' hp' 
	   document.querySelector("#info p").appendChild(p3)
	    
	}
	
	sort(perso) {
	    //si il y'a encore des pts de magie
	    if (this.magie > 0) {
	        //on tire un chiffre aléatoire entre 1 et ses pts de magies actuel on stock dans une variable degats
	    	let degats = getRandomInteger(1, this.magie);
	        //on raconte dans l'historique qu'oon jette un sort à l'adversaire
	        let p = document.createElement("p")
	        p.innerHTML = this.name +  ' jete un sort,il enlève '+ degats + ' hp a '+ perso.name
	        document.querySelector("#info p").appendChild(p)
	        //on soustrait les points de dégat à la vie de l'adversaire
			perso.hp -= degats;
			this.magie -=  degats;
	        //si l'adversaire a ses pts de vie inférieur ou égal à zero
			if  (perso.hp <= 0) {
    	        //on attribut 0 hp à celui-ci
    	        perso.hp = 0
			}    
    	    //on ajoute une phrase à l'historique qui indique l'état de vie de l'adversaire
    		let p2 = document.createElement("p")
    		p2.innerHTML = perso.name +' a  '+ perso.hp+ ' hp'
    		document.querySelector("#info p").appendChild(p2)
        //sinon
	    }else{  
            //on raconte dans l'historique qu'on a plus de pts de magie
            let notSort = document.createElement("p")
            notSort.innerHTML = "Vous n avez plus de point de magie...."
            document.querySelector("#info p").appendChild(notSort)
	    }    
	}
	
	defendre() {
	    //on crée une variable ratio afin de pour augmenter la défense (Math.random)
	    let ratio =  Math.round(this.defense * Math.random());
	    //on indique dans l'historique qu'on augmente les points de défense (ratio)
	    let p = document.createElement("p")
	    p.innerHTML = this.name+' augmente sa defense de '+ ratio + ' point'
	    document.querySelector("#info p").appendChild(p)
	    //on ajoute au points de défense le ratio /2
	    this.defense += ratio/2;
	    //on indique dans l'historique les pts de defense de la personne qui se défend
	    let p2 = document.createElement("p")
	    p2.innerHTML = this.name +'a une defense à :'+ this.defense
	    document.querySelector("#info p").appendChild(p2)
	    
	}
}