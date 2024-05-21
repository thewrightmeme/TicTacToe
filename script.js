var stolen = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

var stolen2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]


let turn = 1
let player = "X"
let computer = "O"

function attach(r, c) {
    if (stolen[r][c] === 0) {
        if (turn === 1) {
            turn = 0
            document.getElementById(r.toString() + c.toString()).innerHTML = player;
            stolen[r][c] = 1
            stolen2[r][c] = 2
            document.getElementById("turn").innerHTML = "PLAYER2'S TURN";
        } else if (turn === 0) {
            turn = 1
            document.getElementById(r.toString() + c.toString()).innerHTML = computer;
            stolen[r][c] = 1
            stolen2[r][c] = 3
            document.getElementById("turn").innerHTML = "PLAYER1'S TURN";
        }
    }
    winOrLoss()
}

function computer1() {
    //computer picks RANDOM SPOT IN ARRAY (that isn't already taken) to place an "O" in that spot
    //When pressing the "1 PLAYER" button, this code begin to act after the player goes first (player is turn 1, computer is turn 0)
    //
    for (let r1 = 0; r1 >= 0 && r < 3;r1++) {
        for (let c1 = 0; c1 >= 0 && c1 < 3;c1++) {
            if (stolen[r1][c1] === 0) {
                if(turn===0){
                    turn=1
                    r1=Math.floor(Math.random())
                }
        }
    }
    }

}

function winOrLoss() {
    //intention:if draw=true
    let draw=true;
    if (stolen2[0][2] === 2 && stolen2[1][1] === 2 && stolen2[2][0] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
        draw=false;
    } else if (stolen2[0][0] === 2 && stolen2[1][1] === 2 && stolen2[2][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
        draw=false;
    } else if (stolen2[0][0] === 2 && stolen2[0][1] === 2 && stolen2[0][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[1][0] === 2 && stolen2[1][1] === 2 && stolen2[1][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[2][0] === 2 && stolen2[2][1] === 2 && stolen2[2][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[0][0] === 2 && stolen2[1][0] === 2 && stolen2[2][0] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[0][1] === 2 && stolen2[1][1] === 2 && stolen2[2][1] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[0][2] === 2 && stolen2[1][2] === 2 && stolen2[2][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[0][2] === 3 && stolen2[1][1] === 3 && stolen2[2][0] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][0] === 3 && stolen2[1][1] === 3 && stolen2[2][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][0] === 3 && stolen2[0][1] === 3 && stolen2[0][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[1][0] === 3 && stolen2[1][1] === 3 && stolen2[1][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[2][0] === 3 && stolen2[2][1] === 3 && stolen2[2][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][0] === 3 && stolen2[1][0] === 3 && stolen2[2][0] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][1] === 3 && stolen2[1][1] === 3 && stolen2[2][1] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][2] === 3 && stolen2[1][2] === 3 && stolen2[2][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else {
        let full = true
        for (let r = 0; r >= 0 && r < 3;r++) {
            for (let c = 0; c >= 0 && c < 3;c++) {
                if (stolen[r][c] ===0) {
                    full = false
                }
            }
        }
        if(full===true){
            document.getElementById("displayWinner").innerHTML = "TIE"
            noMore()
        }
    }
}


function noMore() {
    stolen = [0][0] = 1
    stolen = [0][1] = 1
    stolen = [0][2] = 1
    stolen = [1][0] = 1
    stolen = [1][1] = 1
    stolen = [1][2] = 1
    stolen = [2][0] = 1
    stolen = [2][1] = 1
    stolen = [2][2] = 1
}



