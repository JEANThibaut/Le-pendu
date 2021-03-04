//Déclaration des variables
alert("Bienvenue, vous aller jouer au jeu du pendu");
let choice = checkChoice();



// Liste des mots sélectionnable par l'ordinateur
let words= [
    "texte",
    "pizza",
    "internet"
];

//---------------------------------Fonctions

//Vérification choix utilisateur
function checkChoice(){
    for (let i=0 ; i<3 ; i++){  
        let playerChoice = prompt("Entrer une lettre"); 
        if (isNaN(playerChoice))
            if (playerChoice.length==1){
                        alert("Merci!")
                        return playerChoice.toLowerCase()
                    }
                    else
                    alert("Merci d'entrer UNE SEULE lettre!");
        else 
        alert("Ceci n'est pas une lettre!")        
    }
}
//Choix ordinateur
let computerChoice = words[Math.floor(Math.random()*words.length)];
    console.log(computerChoice);

//Décomposer le choix de l'ordinateur en tableau

let computerChoiceArray = Array.from(computerChoice);
console.log(computerChoiceArray);









//Recherche valeur dans array
if(computerChoiceArray.includes(choice)){
    console.log(choice)
}













// Comparer les valeurs du nouveau tableau au choix du joueur et afficher un message


//Déroulement



// console.log(choice);
