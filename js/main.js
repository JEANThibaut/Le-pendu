//---------------------------------Déclaration des variables
// Liste des mots sélectionnable par l'ordinateur
let words= [
    "texte",
    "pizza",
    "internet"
];
let userChoices=[];
let randomWord 
let display = [];

 
//---------------------------------Fonctions

//Choix ordinateur et décomposition en tableau
function randomComputer(){
    let computerChoice = words[Math.floor(Math.random()*words.length)];
           return randomWord = Array.from(computerChoice)
}


//Choix de l'utilisateur, vérification et affichage des underscores
function checkChoice(){
    
    let playerChoice = prompt("Entrer une lettre \n"); 
    
    for (let i=0 ; i<3 ; i++){  
        if (isNaN(playerChoice))
            if (playerChoice.length==1){
                        alert("Merci!")
                        return userChoices.push(playerChoice.toLowerCase());
                    }
                    else{
                        alert("Merci d'entrer UNE SEULE lettre!");
                    }
                        else {
                        alert("Ceci n'est pas une lettre!")        
                    }
    }
}

function fillDisplay(){
    let display = [];
    for (var compare of randomWord){
        for (var i of userChoices){
            if (compare.includes(i)){
            display.push(i);
            
                console.log("Lettre trouvée");
            }
            else
            display.push("_");
            
                console.log("Aucune lettre trouvée");
        }
        
    }console.log(display.join(""));
}
// //Affichage des caractères

// function displayCaracters(){
//     if(display.lenght ==0){
//        display = display.push("_").repeat(randomWord.length);
//     }
//     else{ 

//     }
// }


//Déroulement

alert("Bienvenue, vous aller jouer au jeu du pendu");
randomComputer();
console.log(randomWord);
//Début du jeu
checkChoice();
console.log(userChoices);
fillDisplay();








// displayCaracters();



// computerToArray();




// console.log(userChoices);

 

















// Comparer les valeurs du nouveau tableau au choix du joueur et afficher un message






// console.log(choice);
