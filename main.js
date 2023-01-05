document.getElementById("rock").addEventListener("click", RPS)
document.getElementById("paper").addEventListener("click", RPS)
document.getElementById("scissors").addEventListener("click", RPS)
let outputE1 = document.getElementById("output1")
let outputE2 = document.getElementById("output2")

function RPS(){
    let CPU = Math.random();
    let player = 
if(CPU<0.3) {
 CPU = 'Rock'} else 
 if( CPU<0.6) {
    CPU= 'Paper'
 }else {
    CPU='Scissors'
}
 let winner = checkwinner 
}
