const NumberBox = document.getElementById('guess');
const FeedbackBox = document.getElementById('feedback');

const newNumber = Math.ceil(Math.random() * 100);

NumberBox.addEventListener('change', checkNumber);

function checkNumber() {
    const guess = NumberBox.value;
    if (guess < newNumber) {
        FeedbackBox.innerText = 'Too low';
        NumberBox.style.top = `${newNumber - guess}px`;
    }
    else if (guess > newNumber) {
        FeedbackBox.innerText = 'Too high';
        NumberBox.style.top = `${guess - newNumber}px`;
    }
    else {
        FeedbackBox.innerText = 'You got it!';
    }
}