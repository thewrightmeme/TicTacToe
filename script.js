var stolen=[
    [0,0,0]
    [0,0,0]
    [0,0,0]
]


function check(player) {
    for(let row =0;row<3; row++){
        if(stolen[row][0]===player && stolen[row][1]===player&& stolen[row][2]===player){
            return true;
        }
    }
    for(let col =0;col<3; col++){
        if(stolen[col][0]===player && stolen[col][1]===player&& stolen[col][2]===player){
            return true;
        }
    }
    if(stolen[0][0]===player && stolen[1][1]===player&& stolen[2][2]===player){
        return true;
    }
    if(stolen[2][0]===player && stolen[1][1]===player&& stolen[0][2]===player){
        return true;
    }
}


