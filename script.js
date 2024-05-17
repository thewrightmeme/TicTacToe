var stolen=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

var player="x"
var computer = "o"
function attach00(){
    if(stolen[0][0]===0) {
        document.getElementById("00").innerText =player;
        stolen[0][0]=1
    }
}
function attach01(){
    if(stolen[0][1]===0) {
        document.getElementById("01").innerText =player;
        stolen[0][1]=1
    }
}
function attach02(){
    if(stolen[0][2]===0) {
        document.getElementById("02").innerText =player;
        stolen[0][2]=1
    }
}
function attach10(){
    if(stolen[1][0]===0) {
        document.getElementById("10").innerText =player;
        stolen[1][0]=1
    }
}
function attach11(){
    if(stolen[1][1]===0) {
        document.getElementById("11").innerText =player;
        stolen[1][1]=1
    }
}
function attach12(){
    if(stolen[1][2]===0) {
        document.getElementById("12").innerText =player;
        stolen[1][2]=1
    }
}
function attach20(){
    if(stolen[2][0]===0) {
        document.getElementById("20").innerText =player;
        stolen[2][0]=1
    }
}
function attach21(){
    if(stolen[2][1]===0) {
        document.getElementById("21").innerText =player;
        stolen[2][1]=1
    }
}
function attach22(){
    if(stolen[2][2]===0) {
        document.getElementById("22").innerText =player;
        stolen[2][2]=1
    }
}

function checkBoard() {

}


