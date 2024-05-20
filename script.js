var stolen=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

var stolen2=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

drawOrNot=false
let turn =1
let player="X"
let computer = "O"

function attach(r,c){
    if(stolen[r][c]===0){
        if(turn===1){
            turn=0
            document.getElementById(r.toString()+c.toString()).innerHTML=player;
            stolen[r][c]=1
            stolen2[r][c]=2
            document.getElementById("turn").innerHTML="PLAYER2'S TURN";
        }
        else if(turn===0){
            turn=1
            document.getElementById(r.toString()+c.toString()).innerHTML=computer;
            stolen[r][c]=1
            stolen2[r][c]=3
            document.getElementById("turn").innerHTML="PLAYER1'S TURN";
        }
    }
    winOrLoss()
}

function winOrLoss(){
    if(stolen2[0][2]===2&&stolen2[1][1]===2&&stolen2[2][0]===2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    }
    else if(stolen2[0][0]===2&&stolen2[1][1]===2&&stolen2[2][2]===2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    }
    else if(stolen2[0][0]===2&&stolen2[0][1]===2&&stolen2[0][2]===2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    }
    else if(stolen2[1][0]===2&&stolen2[1][1]===2&&stolen2[1][2]===2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    }
    else if(stolen2[2][0]===2&&stolen2[2][1]===2&&stolen2[2][2]===2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    }
    else if(stolen2[0][0]===2&&stolen2[1][0]===2&&stolen2[2][0]===2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    }
    else if(stolen2[0][1]===2&&stolen2[1][1]===2&&stolen2[2][1]===2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    }
    else if(stolen2[0][2]===2&&stolen2[1][2]===2&&stolen2[2][2]===2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    }
    else if(stolen2[0][2]===3&&stolen2[1][1]===3&&stolen2[2][0]===3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    }
    else if(stolen2[0][0]===3&&stolen2[1][1]===3&&stolen2[2][2]===3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    }
    else if(stolen2[0][0]===3&&stolen2[0][1]===3&&stolen2[0][2]===3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    }
    else if(stolen2[1][0]===3&&stolen2[1][1]===3&&stolen2[1][2]===3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    }
    else if(stolen2[2][0]===3&&stolen2[2][1]===3&&stolen2[2][2]===3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    }
    else if(stolen2[0][0]===3&&stolen2[1][0]===3&&stolen2[2][0]===3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    }
    else if(stolen2[0][1]===3&&stolen2[1][1]===3&&stolen2[2][1]===3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    }
    else if(stolen2[0][2]===3&&stolen2[1][2]===3&&stolen2[2][2]===3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    }

}


function noMore() {
    stolen=[0][0]=1
    stolen=[0][1]=1
    stolen=[0][2]=1
    stolen=[1][0]=1
    stolen=[1][1]=1
    stolen=[1][2]=1
    stolen=[2][0]=1
    stolen=[2][1]=1
    stolen=[2][2]=1
}



