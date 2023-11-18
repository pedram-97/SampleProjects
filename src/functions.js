function randomGenerator(a) {
  const cpu = ['rock','paper','scissor'];
  const b = cpu[Math.floor(Math.random() * 3)];
  const statusElm = document.getElementById("status");
  console.log(b);
  switch (a) {
    case "rock" :
       if (b === a){
        statusElm.innerHTML = "Draw!"
       } else if (b === "paper") {
        statusElm.innerHTML = "lose!"
       } else if (b === "scissor") {
        statusElm.innerHTML = "won!"
       } 
      break;
    case "paper" :
      if (b === a){
        statusElm.innerHTML = "Draw!"
       } else if (b === "rock") {
        statusElm.innerHTML = "won!"
       } else if (b === "scissor") {
        statusElm.innerHTML = "lose!"
       } 
      break;
    case "scissor" :
      if (b === a){
        statusElm.innerHTML = "Draw!"
       } else if (b === "paper") {
        statusElm.innerHTML = "won!"
       } else if (b === "rock") {
        statusElm.innerHTML = "lose!"
       } 
      break;
  }  
};
