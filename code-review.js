// 🔍 Code Review: What's Wrong with This Color Changer?


// Instructions: Fix this code so it correctly changes color when clicked.
// There are 3 Problems. list them below and fix therm in the code.
// PROBLEM 1: Typo.  > document.querySelector
// PROBLEM 2: That code simply would not work.  > box.style.backgroundColor
// PROBLEM 3: Not a valid property.  > box.innerText to change the displayed text inside the element.

const btn = document.querySelecter("#color-button");
const box = document.getElementById("color-box");

btn.addEventListener("click", () => {
  box.backgroundColor = "coral"; 
  box.insideText = "New Color Applied!"; 
});





