const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);


function handlerInput(evt) {
  output.textContent = evt.currentTarget.value || "Anonymous"
}