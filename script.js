let doneBtn = document.querySelector(".done");
let inputValue = document.querySelector('.input');
let quesDiv = document.querySelector(".ques");
let ansDiv = document.querySelector(".ans");
let genBtn = document.querySelector(".gen");

function generateQuestion() {
    quesDiv.innerHTML = inputValue.value;
}

let yes = ["Yes", "Absolutely", "Of course", "Definitely", "Sure thing", "Without a doubt", "Certainly", "Affirmative", "You bet", "Indubitably","No", "Not at all", "Absolutely not", "No way", "Negative", "I don't think so", "Certainly not", "By no means", "Not in a million years", "Nope"];
doneBtn.addEventListener('click',generateQuestion);

genBtn.addEventListener('click', function() {
    ansDiv.innerHTML = yes[Math.floor(Math.random() * yes.length)];
})