(function() {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question)

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again!')
            sc = callback(false);
        }

        this.displayScore(sc);

    };

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is ' + score);
        console.log('-------------------------------------------------')
    };

    var q1 = new Question('Which Apollo mission landed the first humans on the Moon?', ['Apollo 7', 'Apollo 9', 'Apollo 11', 'Apollo 13'], 2);

    var q2 = new Question('Which volcano is best known for its eruption in AD 79 that led to the destruction of the Roman cities of Pompeii and Herculaneum?', ['Mount Etna', 'Mount Stromboli', 'Mount Vulture', 'Mount Vesuvius'], 3);

    var q3 = new Question('What was the name of Ian Dury\'s backing band?', ['The Blackheads', 'The Blockheads', 'The Boneheads', 'The Pinheads'], 1);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion()
        } else {
            console.log('Thank you for playing!');
        }
    }

    nextQuestion();

})();
