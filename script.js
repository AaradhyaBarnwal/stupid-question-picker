let doneBtn = document.querySelector(".done");
let inputValue = document.querySelector('.input');
let quesDiv = document.querySelector(".ques");
let genBtn = document.querySelector(".gen");

function generateQuestion() {
    quesDiv.innerHTML = inputValue.value;
}

doneBtn.addEventListener('click',generateQuestion);