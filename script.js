
const submit = document.getElementById("submit");
const grid = document.getElementById("grid");
const grid_items = document.getElementsByClassName("grid-items");
const container = document.getElementsByClassName("container");





submit.addEventListener("click",() =>{
    let turn  = 1;
    const name1 = document.getElementById("player-1").value;
    const name2 = document.getElementById("player-2").value;
    const heading = document.getElementById("heading");
   heading.textContent = name1+" your turn";
    
})

// heading.textContent = name1+" this is your turn";
let res = [
    ["","",""],
    ["","",""],
    ["","",""]
];
let turn  = 1;
for(let i =0;i<grid_items.length;i++){
    
    grid_items[i].addEventListener("click",() =>{
        const heading = document.getElementById("heading");
        const name1 = document.getElementById("player-1").value;
        const name2 = document.getElementById("player-2").value;
        if(check("X")){
        }
        else if(check("O")){
            heading.textContent = name2+" you won the game";
        }
        else{
            if(turn === 1){
                grid_items[i].textContent = "X"
                let id = i;
                let index = 0;
                for(let i =0;i<res.length;i++){
                    let v = res[i];
                    for(let j = 0;j<v.length;j++){
                        if(i+j+index === id){
                            res[i][j] = "X";
                            console.log(res);
                            break;
                        }
                        
                    }
                    index = index + 2;
                }
               
                heading.textContent = name2+" this is your turn"
                turn = 2;
            }
            else{
                grid_items[i].textContent = "O";
                let id = i;
                let index = 0;
                for(let i =0;i<res.length;i++){
                    let v = res[i];
                    for(let j = 0;j<v.length;j++){
                        if(i+j+index === id){
                            res[i][j] = "O";
                            console.log(res);
                            break;
                        }
                        
                    }
                    index = index + 2;
                }
                grid_items[i].style.backgroundColor = "rgb(128,0,128)";
                turn = 1;
                heading.textContent = name1+" this is your turn";
            }
            
        }
    
    })
}
const reset = document.getElementById("re-start");
reset.addEventListener("click",() =>{
    location.reload();
})

function check(val){
    for(let i =0;i<res.length;i++){
        if(res[i][0] === val && res[i][1] === val && res[i][2] === val){
            return true;
        }
    }
    for(let i =0;i<res[0].length;i++){
        if(res[0][i] == val && res[1][i] === val && res[2][i] === val){
            return true;
        }
    }
    if(res[0][0] === val && res[1][1] === val && res[2][2] === val||
        res[2][0] === val && res[1][1] === val && res[0][2]){
            return true;
    }
    return false;
}


