const pumpkins = document.getElementById("pumpkins")
let pv = document.getElementById("pv")

function play(){
    let b = true
    pumpkins.innerHTML = ""
        for (let i = 0; i < 7 ; i++){
            if (Math.floor(Math.random()*3) == 2 && b ){
                let el = `<div class="pumpkin"><button onclick="game()" onclick="reload()" id="pv"><img src="pixil-frame-0 (2).png"></button></div>`
                b = false
                pumpkins.innerHTML += el
            }
            else{
                let el = `<div class="pumpkin"><button id="p"><img src="pixil-frame-0 (1).png"></button></div>`
                pumpkins.innerHTML += el
            }
        }
}

function reload(){
    location.reload()
}

let a = 0
let counter = document.getElementById("counter")
function game(){

    counter.innerText ++
    play()
}
