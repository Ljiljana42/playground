let player1=prompt("Player 1 name");
let player2=prompt("Player 2 name");
let round=0;
play1Res=0;
play2Res=0;

let igra=setInterval(function (){
round++;
console.log("***ROUND "+round+"***");
let play1=Math.ceil((Math.random()*6));
let play2=Math.ceil((Math.random()*6));
console.log(player1+":" + play1 +"--------" +player2+":"+play2);
if (play1>play2){
  play1Res++;
} else if (play1<play2) {play2Res++
 };
    if (round===10 && play1Res>play2Res){
      console.log("REZULTAT " + player1+":"+play1Res+ "-----"+ player2+":"+ play2Res)
      console.log("WINNER is " + player1 + "!")}
    else if (round===10 && play1Res<play2Res){
      console.log("REZULTAT "+ player1+":"+play1Res+ "-----"+ player2+":"+play2Res)
      console.log("WINNER is " + player2 + "!")}
    else if (round===10 && play1Res===play2Res){
        console.log("REZULTAT "+ player1+":"+play1Res+ "-----"+ player2+":"+play2Res)
        console.log("DRAW!")}

},1000);

setTimeout(function(){
  clearInterval(igra)
},10000);
