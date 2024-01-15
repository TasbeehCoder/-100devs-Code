//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

// fighting fame constructor 

function StreetFighter(punch, kick, catchPhrase, specialMove) {
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.spespecialMove = specialMove

    this.taunt = function () {
        console.log(`You can't hand my ${this.spespecialMove}`)
    }
    this.winning = function () {
        console.log(`haha! ${this.catchPhrase}`)
    }
    this.dash = function () {
        console.log('Whoop, Missed me!')
    }

}

let rayan = new StreetFighter('high', 'high', 'GET OVER HERE', 'HADDDUKKEEN')

// NOW CONSOLE IT WITH NAME 