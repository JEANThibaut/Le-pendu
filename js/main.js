alert("Bienvenue, vous aller jouer au jeu du pendu");


// Liste des mots sélectionnable par l'ordinateur
let words= [
    "texte",
    "pizza",
    "internet"
];
//Le joueur choisi une lettre



function checkChoice(){
    for (let i=0 ; i<3 ; i++){  
        let playerChoice = prompt("Entrer une lettre"); 
                
        if (playerChoice.length==1){
                    alert("merci")
                    return playerChoice
                }
                else
                alert("merci d'entrer une seule lettre");
            
    }
}
let choice = checkChoice()

console.log(choice);