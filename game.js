 let userscore = 0;
 let compscore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userscorepara = document.querySelector("#u");
 const compscorepara = document.querySelector("#c");


  const gencompchoice = () =>{
    const option=["rock","paper","scissors"];
    const randx = Math.floor(Math.random()*3)
    return option[randx];
  };

  const drawgame = () =>{
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "rgb(2, 6, 37)";
  };
  
  const showWinner = (userwin,userchoice,compchoice) =>{
   if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
     msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
     msg.style.backgroundColor = "green";
    } else{
      compscore++;
      compscorepara.innerText = compscore;
      msg.innerText = `You lose ${compchoice} beats ${userchoice}`;
      msg.style.backgroundColor = "red";
    }
  };

 const playgame = (userchoice) =>{
  console.log("user choice is",userchoice)
  const compchoice = gencompchoice();
  console.log("comp choice is",compchoice);
  if(userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if(userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if(userchoice === "paper"){
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin , userchoice , compchoice);
  }
 };

  choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      choice.style.opacity="0.8";
      const userchoice = choice.getAttribute("id");
      playgame(userchoice);
    })
  })