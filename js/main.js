//---------------------------------Déclaration des variables
// Liste des mots sélectionnable par l'ordinateur
let words= [
    "texte",
    "pizza",
    "internet"
];
let userChoices=[];
let randomWord 
let display= [];
let tries = 7 ;

//---------------------------------Fonctions

//Choix ordinateur et décomposition en tableau
function randomComputer(){
    let computerChoice = words[Math.floor(Math.random()*words.length)];
           return randomWord = Array.from(computerChoice)
}

//Choix de l'utilisateur et vérification 
function checkChoice(){
    // for (let j=0; j<=3; j++){
    //     if (j===3){
    //     alert("Nous n'avons pas compris votre demande")
    //     }  
    //     else if (j<3){
            for (let i=0 ; i<3 ; i++){  
                let playerChoice = prompt("Entrer une lettre"+"\n"+ "Il vous reste " + tries + " tentatives" + "\n" + display.join("")); 
                if (isNaN(playerChoice)){
                    if (playerChoice.length==1){
                        return userChoices.push(playerChoice.toLowerCase());
                    }
                    else
                    alert("Merci d'entrer UNE SEULE lettre!");
                }
                else
                alert("Ceci n'est pas une lettre!")        
            }
         }   
    // }
// }

// Comparaison et underscore
//function .indexOf return -1 if false
function fillDisplay(){
    display = [];
    for (let i=0; i<randomWord.length;i++){
      if (userChoices.indexOf(randomWord[i])==-1){
        display.push("_");
        
      }
      else if (userChoices.indexOf(randomWord[i])!==-1){
       display.push(randomWord[i]);
      
      }
    }
    console.log(display.join(""));
}


    
// Fonction boucle de jeu
function play(){
    checkChoice();
    fillDisplay();
    
}






//Déroulement

alert("Bienvenue, vous aller jouer au jeu du pendu");
randomComputer();
console.log(randomWord);
//Init display for first round
display = new Array(randomWord.length).fill("_");

while(tries>0){
        if (display.join("")===randomWord.join("")){
            alert("bravo")
       break
        }
        
        else if (tries==0){
            alert("dommage")
        
        }
        play();
}

