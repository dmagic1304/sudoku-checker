import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SudokuBoard from './SudokuBoard.js';



function handleForm(event) {
  event.preventDefault();
  const size = document.getElementById("size").value;
  for(let i = 0; i < size; i++){
    const divRow = document.createElement("div");
    for(let j = 0; j < size; j++){
      const input = document.createElement("input");
      input.setAttribute("type", "number");
      input.setAttribute("id", i+j);
      input.value = 0;
      divRow.append(input);
      divRow.append(document.createElement("br"));

    }
    document.getElementById("board").append(divRow);
  }
}

window.addEventListener("load", function () {
  this.document.getElementById("board-form").addEventListener("submit", handleForm);
});
