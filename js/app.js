console.log("Linked and working!")

const btnA = document.querySelector("button");

console.log(btnA);

function popOut(evt){
	alert("HELLO");
}

//btnA.addEventListener('click', popOut);

// btnA.addEventListener('click', function(event){
// 	//Inside of an event listener, 'this refers to the element we call addEventListener on'


// })

btnA.addEventListener('click', function() {
	alert('title click!');
});