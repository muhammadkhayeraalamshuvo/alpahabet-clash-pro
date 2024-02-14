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
 alphabet.innerText=arrayAlphabet[random];
 
 const keybd=document.getElementById(arrayAlphabet[random]);
 keybd.style.backgroundColor='gold';
};

function playNow(){
  hideElementById("section-1");
  visibleElementById("section-2");
  const random=getRandomAlphabet();
  showInTheScreen(random);

}
