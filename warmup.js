// ✅ Label-the-Code Warm-Up

// Instructions: Add comments next to each line describing what each DOM method does

const button = document.querySelector("#changeColor"); 
// Selects the first element in the doc with ID "changeColor" and stores it in the variable "button"
const box = document.getElementById("box");             
// Selects the element with ID "box" and stores it in the variable "box"

button.addEventListener("click", () => {
    // Adds a click event listner to the "button" element. When clicked, the following function will run
  box.style.backgroundColor = "lightblue";              
  // Changes background color of "box" element to light blue
  box.innerText = "Color Changed!";                    
  // Changes the text inside the "box" element to say "Color Changed!"
});