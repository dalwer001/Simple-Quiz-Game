

function Game(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Game.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Game.prototype.assume = function(answer) {
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Game.prototype.Ended = function() {
    return this.questionIndex === this.questions.length;
}