// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("Hello from Jenny!");

const myName = "Jenny";
const myAge = 100;

console.log(myAge);


//Practical Javascript
//Show and hide an element on the page

//Find the element to hide
const toggledParagraph = document.querySelector('.show');
console.log(toggledParagraph);

// Write a function that toggles the show/hide classes
function toggleParagraph() {
	toggledParagraph.classList.toggle("hide");
	toggledParagraph.classList.toggle("show");
	console.log(toggledParagraph);
}

// Call the Function to hide
toggleParagraph();

//Call it again to show
toggleParagraph();

//Find the button and toggle the paragraph when we click it
const toggleButton = document.querySelector("#toggle-control");

toggleButton.addEventListener("click", toggleParagraph);
