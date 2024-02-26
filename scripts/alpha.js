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



const audio=new Audio;
let isSelected=false;
const artBoard=document.getElementById("art-board");


function handleKeyboardKeyUpEvent(event){
  if(isSelected===false) return;
  const playerPressed=event.key;
  if(playerPressed==='Escape'){
    gameOver();
  }
  const currentAlphabetElement=document.getElementById("showTheAlphabet");
  const currentAlphabet=currentAlphabetElement.innerText;
  const expectedAlphabet=currentAlphabet.toLowerCase();

  if(expectedAlphabet===playerPressed)
  {
    console.log("you win ");
    console.log(audio);
    audio.src="../success.mp3";
    audio.play();
    // scrore update

    const currentScore=gettingScore("current-score");
    const newScore=currentScore+1;
  
    // currentScoreElement.innerText=newScore;
    updateTheScore("current-score",newScore)
    // score update ended
    const random=getRandomAlphabet();
    removeBackgroundById(expectedAlphabet);
  showInTheScreen(random);  
  }
  else{

    audio.src="../wronganswer.mp3"
    audio.play();
    const currentLife=gettingScore("current-life")
    const newLife=currentLife-1;
    const newLifePercentage=(newLife/5)*100;
    console.log(newLifePercentage);
    artBoard.style.background=`linear-gradient(#ffffffb2 ${newLifePercentage}%,red)`;
    updateTheScore("current-life",newLife);
    if(newLife===0){
      gameOver();
    }

  }

}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);


function playNow(){
  isSelected=true;
  hideElementById("section-1");
  visibleElementById("section-2");
  const random=getRandomAlphabet();
  showInTheScreen(random);

}

function gameOver(){
  isSelected=false;
  hideElementById("section-2");
  visibleElementById("section-3");
  const scoreBoardElement=document.getElementById("score-board");
  scoreBoardElement.innerText=document.getElementById("current-score").innerText;

}

function playAgain(){
  isSelected=true;
  hideElementById("section-3");
  visibleElementById("section-2");
  const newLife=5;
  updateTheScore("current-life",newLife);
  const newScore=0;
  updateTheScore("current-score",newScore);
  artBoard.removeAttribute("style","background");
}