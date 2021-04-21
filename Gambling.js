console.log("welcome to the game");

var stake = 100;
var bet = 1;

const win = 1;
const loss = 0;


while(stake > 50 && stake < 150){
    var random = Math.floor(Math.random() * 2);
    if (random == win){
        stake++;
    }else {
        stake--;
    }
    console.log(stake);
}
 