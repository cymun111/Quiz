
function showAddQuestion(){
  document.getElementById('useraddsquestion').style.display = "block";
}
let questionOutput = document.getElementById('questionOutput');
let answerInput = document.getElementById('answerInput');
let opt1 = document.getElementById('answerOpt1');
let opt2 = document.getElementById('answerOpt2');
let opt3 = document.getElementById('answerOpt3');
let opt4 = document.getElementById('answerOpt4');

let addQuestion = document.getElementById('addQuestion');
let newQuestionAnswer = document.getElementById('newQuestionAnswer');
let newQuestionOpt1 = document.getElementById('newQuestionOpt1');
let newQuestionOpt2 = document.getElementById('newQuestionOpt2');
let newQuestionOpt3 = document.getElementById('newQuestionOpt3');
let newQuestionOpt4 = document.getElementById('newQuestionOpt4');

class Quiz {

  constructor() {
    this.progress = 0;
    this.grade = 0;
    this.questions = [
      {
        question:"How many continents are on Planet Earth?",
	      options:["5","8","9","7"],
	      answer:"7"
      },
      {
	      question:"How many oceans are on Planet Earth?",
	      options:["4","6","5","8"],
	      answer:"5"
      },
      {
	      question:"What year did World War II start?",
	      options:["1935","1940","1932","1939"],
	      answer:"1939"
      },
      {
	      question:"How many weeks does it take for a fetus to completely develop?",
	      options:["35","44","42","38"],
	      answer:"42"
      },
      {
	      question:"How many people died in World War II?",
	      options:["70 million","55 million","90 million","35 million"],
	      answer:"70 million"
      }];
      this.addQuestion = function(){
        this.questions.push({
          question: newQuestion.value,
          options:[newQuestionOpt1.value, newQuestionOpt2.value, newQuestionOpt3.value, newQuestionOpt4.value],
          answer: newQuestionAnswer.value
        })
      }
    }
  }

  let quiz = new Quiz();
  let userAnswers = [];

  function startQuiz() {
    document.getElementById('submitButton').disabled = false;
    questionOutput.innerHTML = quiz.questions[quiz.progress].question;
    answerOpt1.innerHTML = quiz.questions[quiz.progress].options[0];
    answerOpt2.innerHTML = quiz.questions[quiz.progress].options[1];
    answerOpt3.innerHTML = quiz.questions[quiz.progress].options[2];
    answerOpt4.innerHTML = quiz.questions[quiz.progress].options[3];
  }

  function nextQuestion() {

    if(quiz.progress < (quiz.questions.length - 1)) {
      quiz.progress += 1;
      userAnswers.push(answerInput.value);

      questionOutput.innerHTML = quiz.questions[quiz.progress].question;
      answerOpt1.innerHTML = quiz.questions[quiz.progress].options[0];
      answerOpt2.innerHTML = quiz.questions[quiz.progress].options[1];
      answerOpt3.innerHTML = quiz.questions[quiz.progress].options[2];
      answerOpt4.innerHTML = quiz.questions[quiz.progress].options[3];
    } else {
      userAnswers.push(answerInput.value);
      grade();
    }
  }

  function grade() {
    for(let i = 0; i < quiz.questions.length; i ++) {
      if(quiz.questions[i].answer === userAnswers[i]){
			  quiz.grade += 1;
		  }
    }

    alert(`You scored ${quiz.grade}/${quiz.questions.length}`);


  }

  function addaddQuestion() {
    quiz.addQuestion();
  }
