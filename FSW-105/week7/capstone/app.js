const readline = require("readline-sync");
const name = readline.question("Welcome Vault Hunter, what is your name? ").toUpperCase();
console.log("    " + name + " alright back there time to wake up ")
console.log("  ")
console.log("//// -A man tells you as you ride in the back of an old bus he is driving, something you'd see in a post apocalypse. //// ")
console.log ("  ")
console.log("Sooo? You want to hear a story hunh? one where the very fate of Pandora hangs in the balance?")
console.log("if not to bad! I'm telling you anyway.")
console.log("  ")
console.log("//// -The man speaks again, and explains the adventrue ahead as your ride through pandora . ////")
console.log("  ")
console.log("First, there was The Vault- an alien prison opened with a mystical key.")
console.log("To the warriors who opened it the vault was just a container of tentacles and disappointment.")
console.log(" They Vanished into the wastelands, certain that the vault had held no treasure at all. They were wrong")
console.log("The Vault's opening triggered the growth of Iridium, a priceless alien element. soon the rare and Valuable mineral emerged all across Pandroa.")
console.log("It attracted many, Including the Hyperion Corporation...")


const lootDrop = [" Gun ", " Shield " , " Class Mod ", " Gernade ", " Eridium ", "Relic"]
let userLoot =[]
let userHP = 100


//============================= List of User Options==============================================//

function theList(num){
    console.log("  ")
    console.log("_________________Controls_________________")
    console.log("__________________________________________")
    console.log("       w ........to Walk                  ")
    console.log("       i ....to Show Inventory            ")
    console.log("       x ........to Quit                  ")
    console.log("__________________________________________")
    console.log("  ")
    let theOption = readline.question("What would you like to do ?: ").toLocaleLowerCase();
    if (theOption === "w"){
        return theOption
    }else if(theOption === "i"){
        return theOption
    }else if (theOption === "x"){
        userQuit()
    }else{
        console.log("try another option " + name + " I dont understand that input")
        theList()
    }
    
}

//========================== User Options ... fighting=========================================//

function userOptions(){
    console.log("  ")
    console.log("____________________________________")
    console.log("                                    ")
    console.log("        a .... to attack            ")
    console.log("                                    ")
    console.log("        r .... to run away          ")
    console.log("____________________________________")
    console.log("  ")
    let userAction = readline.question( name + " What ACTION do you take? -->  ").toLowerCase()
    if (userAction === "a"){
        return userAction
    }else if(userAction === "r"){
        return userAction
    }else{
        console.log("  ")
        console.log("invalid input " + name + " I dont understand that input")
        userOptions()
    }
}
//-----------------------------------------------------------------------------------------------------//
//                                      Enimies list
//----------------------------------------------------------------------------------------------------//
function Monsters (name, type, hp){
    this.name = name;
    this.type = type;
    this.hp = hp;
};

Monsters.prototype.printStats = function(){
    console.log("                           Name : " + this.name);
    console.log("                         MAX HP : " + this.hp);
    console.log("                           Type : " + this.type);
    console.log(" ")
}
const monster0 = new Monsters("Skag" , "Adult", 35);
const monster1 = new Monsters("Midget" , "Bandit" , 50);
const monster2 = new Monsters("Bruiser" , "Bandit" , 65);
const monster3 = new Monsters("Goliath", "Badass", 85);

function randomMonster(){
    let numMonster = (Math.floor(Math.random()* 4))
    if (numMonster === 1){
        return monster1
    }else if (numMonster === 2){
        return monster2
    }else if (numMonster === 3){
        return monster3
    }else{
        return monster0
    }
}

function userQuit(){
    console.log(name + "  Thanks for playing.")
    userHP = 0
}
   
//                                      Display User info

function userInventory(){
    console.log(name + "  Your Inventory:")
    for (i=0; i < userLoot.length ; i++){
        console.log(userLoot[i])
    }
}
//                          MAIN function of the Game

function startGame(){
    let currentMonster = randomMonster()
    let monsterHP = currentMonster.hp
   
    const userOption = theList()
    if (userOption === "x" ){
        console.log("quit")
        userQuit()
    }else if (userOption === "i"){
        userInventory()
    }else if (userOption ==="w" ){
        let odds = Math.random()
        if (odds <= .3){
            console.log("walking...")
           
        }else if (odds >= .3){
            console.log("  ")
            console.log( name + " you are faced with a ")
            currentMonster.printStats()
           actionLoop:
            while (monsterHP > 0 && userHP > 0){ //both alive
                let userPicked = userOptions(); // returns a attack  or r run
                let monsterAP = Math.floor(Math.random()* 20)+1
                let userAP = Math.floor(Math.random()* 25) +1
                switch (userPicked){
                    case "r":
                        let userRun = Math.random()
                        if (userRun < .5){
                            console.log("You try to run away but ... " + currentMonster.name + " attacks you for " + monsterAP)
                            continue actionLoop
                        }else{
                            console.log( name + " You successfully ran away")
                            break actionLoop
                        }
                    case "a":
                        currentMonster.hp -= userAP
                        console.log("")
                        console.log("--->" + name + " You landed a hit for " + userAP )
                        console.log("--->" +currentMonster.name + " reamining HP: " + currentMonster.hp)
                        console.log(" ")
                        userHP -= monsterAP
                        console.log(" ")
                        console.log("--->" +currentMonster.name + " hit you for " + monsterAP )
                        console.log("--->" + name + " Your current HP:  " + userHP)
                        console.log(" ")
                        console.log(" ")
                        if  (userHP <= 0){
                            if(currentMonster.hp <= 0){
                                console.log(" ")
                                console.log("__________________________________________________________________________________________________")
                                console.log(name + currentMonster.name + " killed you ")
                                console.log(" ~~~~~~~~~~~~~~~~~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~~~~")
                                console.log( "You also killed ... " + currentMonster.name + "The Hyperion coporation would like to thank you.. ")
                                console.log("__________________________________________________________________________________________________")
                                break actionLoop
                            }else{
                                console.log(" ")
                                console.log(name + currentMonster.name + " has killed you ")
                                console.log(" nice hit. ")
                                console.log(" ")
                                userQuit()
                            }
                        }else if (currentMonster.hp <= 0 ){
                            let drop =  lootDrop[Math.floor(Math.random()* lootDrop.length)];
                            console.log(" Killstreak ")
                            console.log(" You have killed " + currentMonster.name)
                            console.log(" " )
                            console.log("You search the " + currentMonster.name + " body and find...")
                            console.log( "......." + drop + " and is now in your inventory") 
                            console.log(" ")
                            userLoot.push(drop)
                            break actionLoop
                        }

                }
            }
        }// w Odds else if end
    }//userOption else if end

}
while (userHP > 0) {
    healUser =function(){
        userHP = 100
    }
    healUser()
    startGame()
}