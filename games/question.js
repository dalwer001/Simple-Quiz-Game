function Query(text,choices,answer)
{
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Query.prototype.correctAnswer = function(choice){
    return choice === this.answer;
}


