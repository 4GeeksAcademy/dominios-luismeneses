import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const pronoun = ['the', 'our']
  const adj = ['great', 'big']
  const noun = ['jogger', 'racoon']
  const verbs = ['.com', '.es', '.io', '.net']

  pronoun.forEach( i=> adj.forEach( j=> noun.forEach( k=> verbs.forEach( l=> console.log('forEach -->',i+j+k+l)))))
  
  console.log("cualquier string");
};

 