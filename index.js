// Your code goes here

let idUpdate = function(){
  document.getElementById("text").innerHTML = "Javascript is so cool. It lets me add text to my page programmatically.";
}

document.addEventListener("DOMContentLoaded",
  function(){
    idUpdate();
  }
)