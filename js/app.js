console.log("Linked and working!")


//document.querySelectorAll("button")[0]

const wordA = "People";
//const word = ["C", "D", "R", "D", "S"];

const word = wordA.split("");


//EDGE CASE: lowerCase

//Gets all the divs
let wordBankDivs = document.getElementsByClassName("wordBank")[0];

let hangmanImageSources = ["images/drawHead.png", "images/drawBody.png",
 "images/drawLeftLeg.png", "images/drawRightLeg.png", "images/drawLeftArm.png","images/drawRightArm.png"];

 let hanganImageObj = document.getElementsByTagName("img")[0];

console.log(hanganImageObj);
 


//wordBankDivs.children[2].textContent = "T";

//grab input from user 
//Let's say it's A

//check if it's part of the word array
// console.log(word.indexOf("A"));
// if(word.indexOf("A") !== -1){
// 	let myIndex = word.indexOf("A");
// 	wordBankDivs.children[myIndex].textContent = word[myIndex];
//}

function popOut(evt){
	alert("HELLO");
}

//btnA.addEventListener('click', popOut);

// btnA.addEventListener('click', function(event){
// 	//Inside of an event listener, 'this refers to the element we call addEventListener on'


// })

// const btnA = document.querySelector("button");

// btnA.addEventListener('click', function() {
// 	//alert('Clicked A!');
// 	//wordBankDivs.children[2].textContent = "M";
// 	if(word.indexOf(this.value) !== -1){
// 	let myIndex = word.indexOf(this.value);
// 	wordBankDivs.children[myIndex].textContent = word[myIndex];
// }

// });

// //document.querySelectorAll("button")[0]
// const btnB = document.querySelectorAll("button")[1];

// btnB.addEventListener('click', function() {
// 	//alert('Clicked B!');
// 	//wordBankDivs.children[2].textContent = "M";
// 	if(word.indexOf(this.value) !== -1){
// 	let myIndex = word.indexOf(this.value);
// 	wordBankDivs.children[myIndex].textContent = word[myIndex];
// 	}

// });

// const btnC = document.querySelectorAll("button")[2];


// btnC.addEventListener('click', function() {
// 	//alert('Clicked C!');
// 	//wordBankDivs.children[2].textContent = "M";
// 	if(word.indexOf(this.value) !== -1){
// 	let myIndex = word.indexOf(this.value);
// 	wordBankDivs.children[myIndex].textContent = word[myIndex];
// 	}

// });

// const btnT = document.querySelectorAll("button")[3];


// btnT.addEventListener('click', function() {
// 	//alert('Clicked C!');
// 	//wordBankDivs.children[2].textContent = "M";
// 	if(word.indexOf(this.value) !== -1){
// 	let myIndex = word.indexOf(this.value);
// 	wordBankDivs.children[myIndex].textContent = word[myIndex];
// 	}else{
		// hanganImageObj.src = hangmanImageSources[0];
		// hangmanImageSources.shift();
// 	}

// });

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(i = 0; i < letters.length; i++) {
    var button = document.createElement("button");
    button.textContent = letters[i];
    button.value = letters[i];
    //button.innerHTML = Chapter[i];
    //button.className = "btn btn-outline-success";
    //let buttonDiv = document.getElementsByClassName("keyboard");
    //document.getElementById("id").appendChild(element);
    //document.getElementsByClassName("wordBank")[0].appendChild("ABC");
    //document.getElementsByClassName("keyboard").appendChild("ABC");
    //$(".keyboard").append(button);
    document.getElementsByClassName("keyboard")[0].append(button);
  }

for(let i = 0; i < word.length; i++){
	let divElement = document.createElement("div");
	document.getElementsByClassName("wordBank")[0].append(divElement);
}


const btnA = document.querySelector("button");

// btnA.addEventListener('click', function() {
// 	//alert('Clicked A!');
// 	//wordBankDivs.children[2].textContent = "M";
	// if(word.indexOf(this.value) !== -1){
	// let myIndex = word.indexOf(this.value);
	// wordBankDivs.children[myIndex].textContent = word[myIndex];
// }

// });

let buttons = document.querySelectorAll(".keyboard button");
console.log("Buttons: " ,buttons);
//var i = 0, length = buttons.length;
for (let i=0; i < buttons.length; i++) {

   buttons[i].addEventListener("click", function() {
        // use keyword this to target clicked button
        //alert(buttons[i].value);
        if(word.indexOf(buttons[i].value) !== -1){

        	for(let j = 0; j < word.length; j++){
        		if(buttons[i].value === word[j]) {
        			let myIndex = j;
        			console.log(myIndex);
        			wordBankDivs.children[myIndex].textContent = word[j];
        		}
        	}
        		
        	// 	//console.log(myIndex);
        	// 	//wordBankDivs.children[myIndex].textContent = buttons[i].value;
        	// }
        	//do a for loop here
			// let myIndex = word.indexOf(buttons[i].value);
			// wordBankDivs.children[myIndex].textContent = word[myIndex];
			buttons[i].style.background = "green";
		}else if(hangmanImageSources.length <= 0){
			alert("YOU LOSE!");
		}else {
			hanganImageObj.src = hangmanImageSources[0];
			hangmanImageSources.shift();
			buttons[i].style.background = "red";
		}
		buttons[i].disabled = true

    });

};