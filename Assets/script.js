var startBtn = $("#startBtn");
var questions = $("#questions");
var timeRemaining = 10;
var timerText = $("#timer");
var questionsArr = ["What does the word Affably mean?","what does Misanthropic mean", "what is an Affably Misanthropic human?"];
var answersArr = [
  "friendly, good-natured, or easy to talk to",
  "disliking humankind and avoiding human society","Someone who is good natured and easy to talk to that dislikes humankind and avoids human society"
];

function displayQuestions() {
  for (var i = 0; i < questionsArr.length; i++) {
     var question = questionsArr[i];
     questions.text(question);
    
    console.log(question);
  }
}



// on start button click run timer and present question function
function timerCountDown() {
  var timerDisplay = setInterval(function () {
    if (timeRemaining > 0) {
      timeRemaining--;
      timerText.text("Time left" + " " + timeRemaining);
    }
  }, 1000);
}

function startFunction() {
  timerCountDown();
  displayQuestions();
}

startBtn.on("click", startFunction);




// $(".startBtn").click(startFunction);

// next question after last question was answered function

// on wrong question time counts down function

// all questions answered or timer reaches 0 game over function

// game over message displayed function
// // locally store initials and score function

// // play again on button click function
