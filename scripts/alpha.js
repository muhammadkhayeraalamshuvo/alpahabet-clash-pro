function hideElementById(identity){
   const element=document.getElementById(identity);
   element.classList.add("hidden");
};

function visibleElementById(identity){
    const element=document.getElementById(identity);
    element.classList.remove("hidden");
};

function getRandomAlphabet(){
    const random=Math.round(Math.random()*25);
    return random;
};

function showInTheScreen(random){
 const alphabet=document.getElementById("showTheAlphabet");
 const allAlphabet="abcdefghigklmnopqrstuvwxyz";
 const arrayAlphabet=allAlphabet.split('');
 alphabet.innerText=arrayAlphabet[random].toUpperCase();
 
 const keybd=document.getElementById(arrayAlphabet[random]);
 keybd.style.backgroundColor='gold';
};



function removeBackgroundById(identity){
  const element=document.getElementById(identity);
  console.log(element);
  element.removeAttribute("style");
};

function gettingScore(identity){
  const element=document.getElementById(identity);
  const elementText=element.innerText;
  const elementScore=parseInt(elementText);
  return elementScore;
}
function updateTheScore(identity,newScore){
  const element=document.getElementById(identity);
 element.innerText=newScore;
}

function storeScore(newScore){
  return newScore;
}

function handleKeyboardKeyUpEvent(event){
  const playerPressed=event.key;
  if(playerPressed==='Escape'){
    gameOver();
  }
  const currentAlphabetElement=document.getElementById("showTheAlphabet");
  const currentAlphabet=currentAlphabetElement.innerText;
  const expectedAlphabet=currentAlphabet.toLowerCase();
  console.log(playerPressed,expectedAlphabet);
  if(expectedAlphabet===playerPressed)
  {
    console.log("you win ");
    // scrore update
    // const currentScoreElement=document.getElementById("current-score");
    // const currentScoreText=currentScoreElement.innerText;
    // const currentScore=parseInt(currentScoreText);
    const currentScore=gettingScore("current-score");
    const newScore=currentScore+1;
    const score=storeScore(newScore);
    // currentScoreElement.innerText=newScore;
    updateTheScore("current-score",newScore)
    // score update ended
    const random=getRandomAlphabet();
    removeBackgroundById(expectedAlphabet);
  showInTheScreen(random);  
  }
  else{
    console.log("you lost and lost a life");
    // const currentLifeElement=document.getElementById("current-life");
    // const currentLifeText=currentLifeElement.innerText;
    // const currentLife=parseInt(currentLifeText);
    const currentLife=gettingScore("current-life")
    const newLife=currentLife-1;
    // currentLifeElement.innerText=newLife;
    updateTheScore("current-life",newLife);
    if(newLife===0){
      gameOver();
    }

  }
  // showInTheScreen();
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);


function playNow(){
  hideElementById("section-1");
  visibleElementById("section-2");
  const random=getRandomAlphabet();
  showInTheScreen(random);

}

function gameOver(){
  hideElementById("section-2");
  visibleElementById("section-3");
  const scoreBoardElement=document.getElementById("score-board");
  scoreBoardElement.innerText=document.getElementById("current-score").innerText;
  // const scoreBoard=gettingScore("score-board");
  // updateTheScore
}

function playAgain(){
  hideElementById("section-3");
  visibleElementById("section-2");
  const newLife=5;
  updateTheScore("current-life",newLife);
  const newScore=0;
  updateTheScore("current-score",newScore);
}