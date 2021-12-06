//if we build it they will come
(function() {    
function buildQuiz() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        // add this question and its answers to the output
        output.push(
            `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`
        );

    // combine output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
});

//display the answers
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    };

    function showSlide(n) {

        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
            previousButton.style.display = 'none';
          }
          else{
            previousButton.style.display = 'inline-block';
          }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }
        function showNextSlide() {
            showSlide(currentSlide + 1);
    }
    function showPreviousSlide() {
        showSlide(currentSlide - 1);
      }

//lay out sections
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "Which html element should contain the Javascript reference?",
        answers: {
            1: "< Javascript >",
            2: "< Reference >",
            3: "< script >",
            4: "< java >",
        },
        correctAnswer: "3"
    },
    {
        question: "How do you call a function named funStuff in Javascript?",
        answers: {
            1: "callFunction = funStuff",
            2: "function(funStuff)",
            3: "fun 'funStuff'",
            4: "funStuff()",
        },
        correctAnswer: "4"
    },
    {
        question: "How do you write an IF statement in Javascript?",
        answers: {
            1: "if i==0 then i<5",
            2: "if (i==0)",
            3: "if then (i==0)",
            4: "if (i==0) then (i<5)",
        },
        correctAnswer: "2"
    },
    {
        question: "How do you add a comment in Javascript?",
        answers: {
            1: "// Comment",
            2: "<!-- Comment -->",
            3: "/* Comment */",
            4: "THIS IS A COMMENT",
        },
        correctAnswer: "1"
    }];

// Let's get this thing rocking!
buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
    };
});


// //timer
// var countdown = function() { 

// }
// //timer
// var newYear = new Date(); 
// newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
// $('#defaultCountdown').countdown({until: newYear}); 

// $('#removeCountdown').click(function() { 
//     var destroy = $(this).text() === 'Remove'; 
//     $(this).text(destroy ? 'Re-attach' : 'Remove'); 
//     $('#defaultCountdown').countdown(destroy ? 'destroy' : {until: newYear}); 
// });

// //timer panic at 5
// $('#highlightCountdown').countdown({until: 0, 
//     onTick: highlightLast5}); 

// function highlightLast5(periods) { 
//     if ($.countdown.periodsToSeconds(periods) === 5) { 
//         $(this).addClass('highlight'); 
//     } 
// } 

// $('#highlightButton').click(function() { 
//     $('#highlightCountdown').removeClass('highlight'). 
//         countdown('option', {until: +10}); 
// });
