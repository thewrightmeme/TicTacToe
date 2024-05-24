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
let computerEnabled = false
function attach(r, c) {
    if (stolen[r][c] === 0) {
        if (turn === 1) {
            turn = 0
            document.getElementById(r.toString() + c.toString()).innerHTML = player;
            stolen[r][c] = 1
            stolen2[r][c] = 2
            document.getElementById("turn").innerHTML = "PLAYER2'S TURN";
        }
        else if(turn===0&& computerEnabled === true){
            //Current error: computer only picks a spot if player 2 clicks again
            while(true) {
                let r1=Math.floor(Math.random()*3)
                let c1=Math.floor(Math.random()*3)
                if (stolen[r1][c1] === 0) {
                    if(turn===0){
                        turn=1
                        document.getElementById(r1.toString() + c1.toString()).innerHTML = computer;
                        stolen[r1][c1] = 1
                        stolen2[r1][c1] = 3
                        document.getElementById("turn").innerHTML = "PLAYER1'S TURN";
                        break;
                    }
                }
            }
        }
        else if (turn === 0 && computerEnabled === false) {
            turn = 1
            document.getElementById(r.toString() + c.toString()).innerHTML = computer;
            stolen[r][c] = 1
            stolen2[r][c] = 3
            document.getElementById("turn").innerHTML = "PLAYER1'S TURN";
        }
    }
    winOrLoss()
}

function computerEnabler() {
    computerEnabled =true
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



