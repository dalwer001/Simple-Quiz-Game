


function start() {
    if(quiz.Ended()) {
        showScores();
    }
    else {
        // show question
        
       var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, assume) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.assume(assume);
        start();
    }
};


function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    let gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score' style='text-align:center; color:chocolate; font-size:25px;'> Your scores: <hr style= 'margin-top: 10px;'><br>"+ quiz.score + "</h2>";
    gameOverHTML+="<a href='../index.html' style='margin-left:215px; margin-top:20px;  font-size: 25px;padding: 10px 10px;width: 250px;text-align: center;margin-bottom: 1rem;text-decoration: none;color: white;background: linear-gradient(90deg,rgb(221, 132, 31)0%,rgba(255, 0, 85, 0.685)100%);border-radius: 4px;'>Nice! Play Again</a>"
    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  
};

// create questions
var questions =[
    new Query("What is 2+2 ?",['5','4','8','10'],'4'),
    new Query("What is 10+2 ?",['15','40','12','10'],'12'),
    new Query("What is 33+31 ?",['62','64','80','50'],'64'),
    new Query("What is 99-1 ?",['98','100','99','97'],'98'),
    new Query("What is 36*12 ?",['512','621','432','260'],'432'),
    new Query("What is 120/6 ?",['20','50','30','40'],'20'),
    new Query("What is 41-49 ?",['8','7','9','10'],'8'),
    new Query("What is 19*19 ?",['360','650','361','371'],'361'),
    new Query("What is 39-71 ?",['32','34','-32','-34'],'-32'),
    new Query("What is 121/11 ?",['10','12','9','11'],'11')
    
];

// create quiz
var quiz = new Game(questions);

// display quiz
start();




