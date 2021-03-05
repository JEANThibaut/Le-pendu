//---------------------------------Déclaration des variables
// Liste des mots sélectionnable par l'ordinateur
let words= [
    "texte",
    "pizza",
    "internet"
];
 let userChoices=[];
 let display=[];

 //Choix ordinateur et décomposition en tableau

let computerChoice = words[Math.floor(Math.random()*words.length)];
    console.log(computerChoice);

let computerChoiceArray = Array.from(computerChoice);
console.log(computerChoiceArray);


//---------------------------------Fonctions
//Comparer les deux choix


//Choix de l'utilisateur, vérification et affichage des underscores
function makeChoice(){
    for (let i=0 ; i<3 ; i++){  
        let playerChoice = prompt("Entrer une lettre" + display  ); 
        if (isNaN(playerChoice))
            if (playerChoice.length==1){
                        alert("Merci!")
                        return userChoices.push(playerChoice.toLowerCase());
                        
                    }
                    else
                    alert("Merci d'entrer UNE SEULE lettre!");
        else 
        alert("Ceci n'est pas une lettre!")        
    }
}




//Déroulement

alert("Bienvenue, vous aller jouer au jeu du pendu");
let choice = makeChoice();



    for (var compare of computerChoiceArray){
        for (var i of userChoices){
            if (compare.includes(i)){
            display.push(i);
                //console.log("Lettre trouvée");
            }
            else
            display.push("_");
            //console.log("Aucune lettre trouvée");
        }
    }

console.log(userChoices);
console.log(display.join(""));

















// Comparer les valeurs du nouveau tableau au choix du joueur et afficher un message






// console.log(choice);
