console.log("Linked and working!")

let input = 'PEOPLE';
const word = input.toUpperCase().split("");


let hangmanImageSources = ["images/drawHead.png", "images/drawBody.png",
 "images/drawLeftLeg.png", "images/drawRightLeg.png", "images/drawLeftArm.png","images/drawRightArm.png"];

let hanganImageObj = document.getElementsByTagName("img")[0];

let wordBankDivs = document.getElementsByClassName("wordBank")[0];

let remainingTurns = document.getElementById("remainingTurns");
let turnsLeft = hangmanImageSources.length + 1;

// remainingTurns.textContent = "ABC";
// remainingTurns.style.color = "red";
console.log("Remaining turns: ", remainingTurns);

//confirm("Welcome! To play the game simply press the start button. A random word will be generated for you");
// fetch('https://example.com/profile/avatar', {
//   method: 'PUT',
//   body: formData
// })
// .then((response) => response.json())
// .then((result) => {
//   console.log('Success:', result);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

//fetch('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
//https://random-word-api.herokuapp.com/word?key=6679SYNZ&number=1/_?key=_&swear=0
//https://random-word-api.herokuapp.com/word?number=1
fetch('https://random-word-api.herokuapp.com/word?number=1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  	//let randIndex = Math.random(data.length * 10-3 + 3);
    //input = data;
    console.log("Word: ", data[0]);
    const word = data[0].toUpperCase().split("");
    displayWordBankBlanks(word);
	displayButtons();
	turnOffButtons();
	displayletters(word);
	turnOnButtons();
  });


console.log(input);

//document.querySelectorAll("button")[0]


//const word = ["C", "D", "R", "D", "S"];

function displayWordBankBlanks(word) {
	for(let i = 0; i < word.length; i++){
	let divElement = document.createElement("div");
	document.getElementsByClassName("wordBank")[0].append(divElement);
	}

}

function turnOffButtons() {
	let buttons = document.querySelectorAll(".keyboard button");
	console.log(buttons);
	for(let i=0; i < buttons.length; i++){
		buttons[i].disabled = true;
	}

}

function turnOnButtons() {
	let buttons = document.querySelectorAll(".keyboard button");
	console.log(buttons);
	for(let i=0; i < buttons.length; i++){
		buttons[i].disabled = false;
	}

}

//turnOffButtons();

function displayButtons(){
	var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	for(i = 0; i < letters.length; i++) {
    	let button = document.createElement("button");
	    button.textContent = letters[i];
	    button.value = letters[i];

	    if(button.value === "A" || button.value === "E" || button.value === "I" || button.value === "O" || button.value == "U" ){
	    	//button.style.color = "white";
			button.style.background = "orange";
	    }
	    // button.disabled = true;
	    //button.innerHTML = Chapter[i];
	    //button.className = "btn btn-outline-success";
	    //let buttonDiv = document.getElementsByClassName("keyboard");
	    //document.getElementById("id").appendChild(element);
	    //document.getElementsByClassName("wordBank")[0].appendChild("ABC");
	    //document.getElementsByClassName("keyboard").appendChild("ABC");
	    //$(".keyboard").append(button);
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
	console.log("Buttons: " ,buttons);
	let correctLetterCounter = 0;
	//var i = 0, length = buttons.length;
	for (let i=0; i < buttons.length; i++) {


	   buttons[i].addEventListener("click", function() {
	        // use keyword this to target clicked button
	        //alert(buttons[i].value);
	        console.log(this);	
	        if(word.indexOf(buttons[i].value) !== -1){

	        	for(let j = 0; j < word.length; j++){
	        		if(buttons[i].value === word[j]) {
	        			let myIndex = j;
	        			console.log(myIndex);
	        			//create span
	        			let spanElem = document.createElement("span");
	        			//add letter to span
	        			spanElem.append(word[j]);
	        			//add span to button]
	        			let buttonTop = this.getBoundingClientRect().top;
	        			let butonLeft = this.getBoundingClientRect().left;
	        			spanElem.style.top = `${Math.floor(buttonTop)}px`;
	        			spanElem.style.left = `${Math.floor(butonLeft)}px`;

	        			console.log("Button Top: ", buttonTop);


	        			buttons[i].before(spanElem);

	        			//24
	        			//15
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
	        			console.log(wordBankDivs.children[myIndex]);
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
				hanganImageObj.src = hangmanImageSources[0];
				hangmanImageSources.shift();
				turnsLeft--;
				colorCodeRemainingTurns();
				buttons[i].style.background = "red";
				buttons[i].style.color = "white";
			}
			///buttons[i].style.background = "black";
			buttons[i].disabled = true

    });

};
}



//const word = input.toUpperCase().split("");


//EDGE CASE: lowerCase

//Gets all the divs




console.log(hanganImageObj);
 




//let position = wordBankDivs.children[0].getBoundingClientRect();

const btnA = document.querySelector("button");

// btnA.addEventListener('click', function() {
// 	//alert('Clicked A!');
// 	//wordBankDivs.children[2].textContent = "M";
	// if(word.indexOf(this.value) !== -1){
	// let myIndex = word.indexOf(this.value);
	// wordBankDivs.children[myIndex].textContent = word[myIndex];
// }

// });
