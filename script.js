let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let newelem=document.createElement("p");

let rangenChoice = () => {
  let option = ["rock", "paper", "sicissor"];
  let index = Math.floor(Math.random() * 3);
  return option[index];
};

let playGame = (userChoic) => {
  let compchoice = rangenChoice();
  if (compchoice === userChoic) {
    let result =document.querySelector("#resutl-board");
    newelem.style.display="none";
    result.innerHTML=`${"Match Draw"}`;
    result.style.backgroundColor="gray";
  }
  else if (
    (userChoic === "rock" && compchoice === "paper") ||
    (userChoic === "paper" && compchoice === "sicissor") ||
    (compchoice==="rock" && userChoic==="sicissor")
  ) {
    compScore++;
    newelem.style.display="block";
    document.querySelector("#comp-score").innerHTML=compScore;
    let result =document.querySelector("#resutl-board");
    
    result.innerHTML=`${"You Lost!"}`;
    newelem.style.backgroundColor="green";
    newelem.classList.add("newelem");
    newelem.innerText=`You Choose ${userChoic} and Computer Choose ${compchoice}`
    result.after(newelem);
    newelem.style.backgroundColor="red";
    result.style.backgroundColor="red";
  }else{
    userScore++;
    newelem.style.display="block";
    document.querySelector("#user-score").innerText=userScore;
    let result =document.querySelector("#resutl-board");

    result.innerText=`You Win!`;
    newelem.style.backgroundColor="green";
    newelem.classList.add("newelem");
    newelem.innerText=`You Choose ${userChoic} and Computer Choose ${compchoice}`
    result.after(newelem);
    result.style.backgroundColor="green";
   
  }
  //genrating the radom vlue;
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoic = choice.getAttribute("id");
    playGame(userChoic);
  });
});
