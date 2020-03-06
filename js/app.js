console.log("Linked and working!")

//Default word to guess
let input = 'WELCOME';
const word = input.toUpperCase().split("");


let hangmanImageSources = ["images/drawHead.png", "images/drawBody.png",
 "images/drawLeftLeg.png", "images/drawRightLeg.png", "images/drawLeftArm.png","images/drawRightArm.png"];

let hangmanImageObj = document.getElementsByTagName("img")[0];
let wordBankDivs = document.getElementsByClassName("wordBank")[0];
let remainingTurns = document.getElementById("remainingTurns");

let turnsLeft = hangmanImageSources.length + 1;

fetch('https://random-word-api.herokuapp.com/word?number=1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Word: ", data[0]);
    const word = data[0].toUpperCase().split("");
    displayWordBankBlanks(word);
	displayButtons();
	turnOffButtons();
	displayletters(word);
	turnOnButtons();
  });


function displayWordBankBlanks(word) {
	for(let i = 0; i < word.length; i++){
	let divElement = document.createElement("div");
	document.getElementsByClassName("wordBank")[0].append(divElement);
	}

}

function turnOffButtons() {
	let buttons = document.querySelectorAll(".keyboard button");
	for(let i=0; i < buttons.length; i++){
		buttons[i].disabled = true;
	}

}

function turnOnButtons() {
	let buttons = document.querySelectorAll(".keyboard button");
	for(let i=0; i < buttons.length; i++){
		buttons[i].disabled = false;
	}

}

function displayButtons(){
	var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	for(i = 0; i < letters.length; i++) {
    	let button = document.createElement("button");
	    button.textContent = letters[i];
	    button.value = letters[i];

	    if(button.value === "A" || button.value === "E" || button.value === "I" || button.value === "O" || button.value == "U" ){
			button.style.background = "orange";
	    }
	  
	    document.getElementsByClassName("keyboard")[0].append(button);
  }
}

function colorCodeRemainingTurns() {
	if(hangmanImageSources.length === 5){
		remainingTurns.style.color = "#32CD32";
	}else if (hangmanImageSources.length === 4){
		remainingTurns.style.color = "#FFA500"; 
	}else if (hangmanImageSources.length === 3){
		remainingTurns.style.color = "#FF6347"; 
	}else if (hangmanImageSources.length === 2){
		remainingTurns.style.color = "#df5015"; 
	}else if(hangmanImageSources.length === 1){
		remainingTurns.style.color = "#FF4500"; 
	}else{
		remainingTurns.style.color = "#fe001a";
	}

	remainingTurns.textContent = `Remaining Turns: ${turnsLeft}`;
}
function displayletters(word) {
	let buttons = document.querySelectorAll(".keyboard button");
	let correctLetterCounter = 0;
	for (let i=0; i < buttons.length; i++) {


	   buttons[i].addEventListener("click", function() {
	        // use keyword this to target clicked button
	        if(word.indexOf(buttons[i].value) !== -1){

	        	for(let j = 0; j < word.length; j++){
	        		if(buttons[i].value === word[j]) {
	        			let myIndex = j;
	        			//create span
	        			let spanElem = document.createElement("span");
	        			//add letter to span
	        			spanElem.append(word[j]);
	        			//add span to button]

	        			let buttonTop = this.getBoundingClientRect().top;
	        			let butonLeft = this.getBoundingClientRect().left;
	        			spanElem.style.top = `${Math.floor(buttonTop)}px`;
	        			spanElem.style.left = `${Math.floor(butonLeft)}px`;


	        			buttons[i].before(spanElem);

	        			let wordBankDivTop = wordBankDivs.children[myIndex].getBoundingClientRect().top;
	        			let wordBankDivLeft = wordBankDivs.children[myIndex].getBoundingClientRect().left+10;


	        			spanElem.style.top = `${Math.floor(wordBankDivTop)}px`;
	        			spanElem.style.left = `${Math.floor(wordBankDivLeft)}px`;
	        			spanElem.style.opacity = '1';
	        			correctLetterCounter++;

	        			setTimeout(function() {
	        				 spanElem.style.opacity = 0; 
	        				 wordBankDivs.children[myIndex].textContent = word[j];

	        			}, 1000)
	        		}
	        	}

	        	if(correctLetterCounter === word.length){
	        		alert("WINNER!");
	        		turnOffButtons();
	        	}
	        	buttons[i].style.color = "white";
				buttons[i].style.background = "green";
			}else if(hangmanImageSources.length <= 0){
				turnsLeft--;
				colorCodeRemainingTurns();
				alert("YOU LOSE!");
				turnOffButtons();
	        }
			else {
				hangmanImageObj.src = hangmanImageSources[0];
				hangmanImageSources.shift();
				turnsLeft--;
				colorCodeRemainingTurns();
				buttons[i].style.background = "red";
				buttons[i].style.color = "white";
			}
			buttons[i].disabled = true

    });

};
}