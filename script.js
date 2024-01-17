const NumberBox = document.getElementById('guess');
const FeedbackBox = document.getElementById('feedback');

const newNumber = Math.ceil(Math.random() * 100);

NumberBox.addEventListener('change', checkNumber);

function checkNumber() {
    const guess = NumberBox.value;
  //  let currentTop = Number(NumberBox.style.top.replace('px', ''));
    if (guess < newNumber) {
        FeedbackBox.innerText = 'Too low';
      //  NumberBox.style.top = `${currentTop - newNumber - guess}px`;
    }
    else if (guess > newNumber) {
        FeedbackBox.innerText = 'Too high';
     //   NumberBox.style.top = `${currentTop + guess - newNumber}px`;
    }
    else {
        FeedbackBox.innerText = 'You got it!';
    }
}

const inputSquare = document.getElementById('sqin');
const outputSquare = document.getElementById('sqout');


inputSquare.addEventListener('mouseenter', Sqcheck);

function Sqcheck() {
    const sqguess = inputSquare.value;
    outputSquare.innerText = sqguess**2;
}