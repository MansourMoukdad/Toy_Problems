// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods 
//across different instances.

function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){      // this is our class
  var rand=randInt(upper)
  makeGame.upper=upperbound
  makeGame.counter=0 ;
  makeGame.guessMyNumber=guessMyNumber;
  makeGame.giveUp=giveUp;
  makeGame.numOfGuesses=numOfGuesses;

}
var guessMyNumber = function(n){
    this.counter++;
      if (n > this.upper) {
        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    };

var giveUp=function(){
    var x=0;
      return this.rand;
    };
  var numOfGuesses=function(){
      return this.counter;
    };

//=========================

function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
  var upper=upperbound;
  var rand=randInt(upper)
  var counter=0;
  return {
    
    guessMyNumber:function(n){
      counter++;
      if (n > upper) {
        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
      } else if (n === rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    },

    giveUp:function(){
      return rand;
    },

    numOfGuesses:function(){
      return counter;
    }
  }
}





