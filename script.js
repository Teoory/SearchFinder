let NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = 1;
let masterguessedcorrect = false
let rightGuessString = "You got it";
let rulesText = "5 words, ";
let masterSentence = "cat in flying car"
console.log(rightGuessString);


//get the input from the textbox and compare it to the master sentence
function checkinputsentence() {
    let input = document.getElementById("input").value;
    //var result = compareSentences(input, masterSentence);

    //convert the input to lowercase
    input = input.toLowerCase();

    //console.log(compareSentences(input, masterSentence));
    //Set element with line concatenated with x as id to the input variable
    document.getElementById("line" + currentGuess).innerHTML = compareSentences2(input,masterSentence);
    
   
    //if masterguessedcorrect is true after the compareSentences2 function is called, update the output element with the rightGuessString
    if (masterguessedcorrect) {
        document.getElementById("rules").innerHTML = "You got it, the prompt was " + masterSentence;
        document.getElementById('share').style.visibility = 'visible';
        let btn = document.querySelector('.btn');
        btn.removeEventListener('click', checkinputsentence);
    } else {
        document.getElementById("rules").innerHTML = rulesText + (NUMBER_OF_GUESSES - currentGuess - 1) + " guesses remaining";
    }
    
    currentGuess++;
    if(currentGuess == NUMBER_OF_GUESSES){
        let btn = document.querySelector('.btn');
        btn.removeEventListener('click', checkinputsentence);

        let output = document.getElementById("rules");

        output.innerHTML = "Game Over, the prompt was " + masterSentence;

    }
}





//add a click event to the button that calls the checkinputsentence function
window.onload = function() {
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', checkinputsentence);


    let rulesElement = document.getElementById("rules");
    rulesElement.innerHTML = rulesText + (NUMBER_OF_GUESSES - 1) + " guesses remaining";; 
}


//write a compareSentences2 function that takes the inputstring and compares it to the master sentence and updates the inputstring by making the background color green if the word is in the right place and yellow if the word is in the wrong place

function compareSentences2(inputstring, mastersentence) {
    let guessedcorrect = true;
    let newSentence = "";

    let compareString = inputstring.toLowerCase()
    //split the input string into an array
    let inputArray = inputstring.split(" ");
    let compareArray = compareString.split(" ");

    
    //split the master sentence into an array
    
    let masterArray = mastersentence.split(" ");
    //loop through the input array
    for (let i = 0; i < inputArray.length; i++) {
        console.log(compareArray[i]);
        //if the input array word is in the master array
        if (masterArray.includes(compareArray[i])) {
            //if the input array word is in the right place
            
            if (compareArray[i] === masterArray[i]) {
                //change the background color to green
                newSentence += "<span style='background-color: #0080007f;padding:5px; display:inline-flex;margin-top:2px;border-radius:20px'>" + inputArray[i] + "</span> ";
            }
            //if the input array word is in the wrong place
            else {
                //change the background color to yellow
                guessedcorrect = false;
                newSentence += "<span style='background-color: #ffff007f;padding:5px; display:inline-flex;margin-top:2px;border-radius:20px'>" + inputArray[i] + "</span> ";
            }
        }
        //if the input array word is not in the master array
        else {
            guessedcorrect = false;
            newSentence += "<span style='background-color: #8080807f;padding:5px; display:inline-flex;margin-top:2px;border-radius:20px'>" + inputArray[i] + "</span> ";
        }
    }


    if (masterArray.length != inputArray.length) {
        guessedcorrect = false;
    }

    //return the input string
    masterguessedcorrect = guessedcorrect;
    return newSentence;
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    console.log("I am coming from the plusSlides function");
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
        
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

}