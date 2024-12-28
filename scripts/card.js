const alternatives = [
    { text: "oww really? that hurts honey :< ", images: "pictures/sad.gif" },
    { text: "cmon, quit stalling and just agree already", images: "pictures/bite.gif" },
    { text: "THE FUCK?? just say yes, u stubborn piece of shit", images: "pictures/fuck.gif" },
    { text: "for fucks sake, quit acting like an idiot n say YES!!!!!!!!!!!!!!!", images: "pictures/mad.gif" },
    { text: "whatever i hate u", images: "pictures/idiot.gif" },
];

const ohyes = { text: "yeah i knew it dumbass", images: "pictures/hehe.jpeg" };

const question = document.querySelector('.text');
const cat = document.querySelector('.cat');      
const yesButton = document.querySelector('.button__yes'); 
const noButton = document.querySelector('.button__no');   
const errorButton = document.querySelector('.button__error'); 
const nextButton = document.querySelector('.button__next'); // New button for navigation

let questionNumber = 1; 
let noCount = 0;        

function updateDisplay(item) {
    cat.src = item.images;
    cat.style.display = 'block'; 
    question.innerHTML = item.text; 
}

function resetGame() {
    questionNumber = 1;
    noCount = 0;
    cat.style.display = 'none';
    
    question.innerHTML = "would u choose me over everything else?";
    cat.src = "pictures/beg.gif"; 
    cat.style.display = 'block';
    
    yesButton.style.display = 'inline-block';
    noButton.style.display = 'inline-block';
    errorButton.style.display = 'none';
    nextButton.style.display = 'none'; // Hide the next button on reset
}

function handleAnswer(answer) {
    if (questionNumber === 1) {
        if (answer === 'yes') {
            questionNumber = 2;
            question.innerHTML = "do u wanna fuck me?";
            cat.src = "pictures/fck.gif"; 
            cat.style.display = 'block';
        } else {
            alert("You must answer 'Yes' to proceed!");
            resetGame(); 
        }
    } else if (questionNumber === 2) {
        if (answer === 'yes') {
            questionNumber = 3;
            question.innerHTML = "would u marry me?";
            cat.src = "pictures/nghe.gif"; 
            cat.style.display = 'block';
        } else {
            noCount++;
            if (noCount < alternatives.length) {
                updateDisplay(alternatives[noCount - 1]); // Show the current alternative
            } else {
                question.innerHTML = "you've said 'No' too many times! Resetting...";
                cat.src = "pictures/think.gif"; 
                cat.style.display = 'block';
                errorButton.style.display = 'inline-block';
                yesButton.style.display = 'none';
                noButton.style.display = 'none';
            }
        }
    } else if (questionNumber === 3) {
        if (answer === 'yes') {
            updateDisplay(ohyes);
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            nextButton.style.display = 'inline-block'; // Show the next button
        } else {
            noCount++;
            if (noCount < alternatives.length) {
                updateDisplay(alternatives[noCount - 1]); // Show the current alternative
            } else {
                question.innerHTML = "you've said 'No' too many times! Resetting...";
                cat.src = "pictures/think.gif";
                cat.style.display = 'block';
                errorButton.style.display = 'inline-block';
                yesButton.style.display = 'none';
                noButton.style.display = 'none';
            }
        }
    }
}

// Listener for Reset button
errorButton.addEventListener('click', resetGame);

// Listeners for Yes and No buttons
yesButton.addEventListener('click', function() {
    handleAnswer('yes');
});

noButton.addEventListener('click', function() {
    handleAnswer('no');
});