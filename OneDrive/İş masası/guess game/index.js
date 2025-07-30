let btn =document.querySelector(".btn")

let input=document.querySelector(".input")
let result=document.querySelector("#result")
let resetBtn = document.querySelector(".reset");
let winDisplay = document.querySelector("#win");
let counterDisplay = document.querySelector("#counter");
let counter = 0;
let win = 0;
 resetBtn.addEventListener("click", function () {
    result.innerText = "";
    input.value = "";
 resetBtn.style.display = "none"; 
      counterDisplay.innerText = "Counter: 0"
      winDisplay.innerText = "Win: 0"
 counter=0
        win=0
         btn.disabled = false;
        input.disabled = false;
       
});
document.addEventListener("keydown",function (e) {
    if (e.key==="Enter") {
        btn.click()
          input.value=""
     resetBtn.style.display = "inline"; 
         
    }
    else if(e.key==="r"){
        counter=0
        win=0
        result.innerText=""
        input.value=""
        counterDisplay.innerText = "Counter: 0"
           winDisplay.innerText = "Win: 0"
            resetBtn.style.display = "inline"
             btn.disabled = false;
        input.disabled = false;
    }
}
)
btn.addEventListener("click",function () {
   if (!input.value) {
        result.innerText = "Please enter a number.";
          resetBtn.style.display = "inline"
        
        return;
    }
     

    let random=Math.floor(Math.random()*14)+1
console.log(random);
let mynumber=Number(input.value)
console.log(mynumber);
if (random===mynumber) {
result.innerText=` ${random}
Congratulations, you are the winner.`
resetBtn.style.display = "inline"
 input.value=""


}
else if (mynumber>0&&mynumber<16&&mynumber!==random){
result.innerText=`${random}
"Oops! Your guess was wrong. Try again!"`
 resetBtn.style.display = "inline"
input.value=""

}
else{ result.innerText="Please enter a number between 1 and 15"
     resetBtn.style.display = "inline"
     
}
if (mynumber===random) {
    win++;
winDisplay.innerText = `win: ${win}`;

  if (win === 3) {
        
        result.innerText += `
        🎉 You won 3 times! The game is over!`;
        btn.disabled = true;
        input.disabled = true;
    }
}
if (mynumber>0&&mynumber<16) {
    counter++;
counterDisplay.innerText = `Counter: ${counter}`;
}


})


