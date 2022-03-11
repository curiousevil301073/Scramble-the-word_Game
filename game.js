console.log("hello");

const msg = document.querySelector('.msg');
const guess =document.querySelector('input');
const btn = document.querySelector('.btn');
let play =false;
let newWords="";
let randomWords="";
let swords =['python','javascript','html','pearl','golang','java','react','angular','jquery','ruby','bootstrap','nodejs',];
const createNewWords =() =>{
    let ranNum = Math.floor(Math.random() * swords.length);
    let newTempSwords =swords[ranNum];
    //console.log(newTempSwords.split(""));
    return newTempSwords;
}

const scrambleWords = (arr) =>{
    for(let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

btn.addEventListener('click', function() {
if(!play){
    play=true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    newWords = createNewWords();
    randomWords = scrambleWords(newWords.split("")).join("");
    // console.log(randomWords.join(""));
    msg.innerHTML= `Guess The Word: ${randomWords}`;
}else{
    let tempWord = guess.value;
    if(tempWord === newWords){
        // console.log('correct');
        play = false;
        msg.innerHTML = `Awesome Its correct it is ${newWords}.`;
        btn.innerHTML = "Next Word";
        guess.classList.toggle('hidden');
        guess.value="";
    }else{
        console.log('incorrect');
        msg.innerHTML = ` Sorry Its incorrect Guess Again : ${randomWords}`;
        guess.value="";
    }
}
})           


