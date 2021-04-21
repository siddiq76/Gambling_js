console.log("welcome to the game");

const stake = 100;
const bet = 1;

const win = 1;
const loss = 0;

function winnerDecider() {
    let decider = Math.floor(Math.random() * 2);
    if (decider == 0){
        console.log("Lost");
    }else {
        console.log("won")
    }
}
 winnerDecider();