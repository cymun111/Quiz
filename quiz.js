let myArr = [];
let correctAnswers = [];
let total = 25;
function firstQuestion(){
var value = parseInt(prompt(`What is 2 + 2? 5, 3, 4 or 6`));
  if(value === 4){
    correctAnswers.push(5);
    console.log(correctAnswers);
    secondQuestion();
 }else{
   correctAnswers.push(0);
   secondQuestion();
  }
}
function secondQuestion(){
  var value = prompt(`What is Pi? 3.13, 3.2, 3.14 or 3.41`);
  if(value === "3.14"){
    correctAnswers.push(5);
    console.log(correctAnswers);
    thirdQuestion();
 }else{
   correctAnswers.push(0)
   thirdQuestion();
  }
}
function thirdQuestion(){
  var value = prompt(`What is caliber of the Ak-47? 5.56, .223, 7.62 or .30-06`);
  if(value === "7.62"){
    correctAnswers.push(5);
    console.log(correctAnswers);
    fourthQuestion();
 }else{
   correctAnswers.push(0)
   fourthQuestion();
  }
}
function fourthQuestion(){
  var value = prompt(`What is the cause of war? Hate, Greed, Pride or Religion`);
  if(value === "Greed"){
    correctAnswers.push(5);
    console.log(correctAnswers);
    fifthQuestion();
 }else{
   correctAnswers.push(0)
   fifthQuestion();
  }
}
function fifthQuestion(){
  var value = prompt("What is the best atribute? Speed, Agility, Intellegence or Charisma");
  if(value === "Intellegence"){
    correctAnswers.push(5);
    console.log(correctAnswers);
 }else{
   correctAnswers.push(0)
  }
}
function sumTotal(){
  let score = correctAnswers.reduce(add,0);
  document.getElementById("results").innerHTML = `You scored ${score} out of ${total} on this test.`
  if(score === total){
    alert("You got a perfect score!!!")
  }else{
    alert("Keep trying you will be smart one day")
  }
  console.log(correctAnswers.reduce(add,0));
}
function add(a,b){
  return a + b;
}
