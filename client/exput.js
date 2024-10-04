import { updateInput } from "./textBox.js";

function showExput() {
  let outputDiv = document.getElementById("output");
  let userInput = updateInput();
  outputDiv.innerHTML = `<h4>You said: ${userInput}</h4>`;
}

document.querySelector("button").addEventListener("click", showExput);
