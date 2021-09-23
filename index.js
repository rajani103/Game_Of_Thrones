var readlinesync = require('readline-sync');
var chalk = require('chalk')
console.log("************************************************")
console.log(chalk.magenta("Welcome to **How much do you about __Game Of Thrones__ QUIZ**"))
console.log("************************************************")
console.log(chalk.green("Each right answer will give you a + 1 score every time \n\nLets BEGINNNN..!!! \n\nARE YOU EXCITED...??"))
console.log("*************************************************")
console.log(chalk.blue("How to play? Guidlines\n"))
console.log(chalk.blue("Answer with a,b,c,d (use smallcase only)"))
console.log("*************************************************")

 var score = 0;
 function quiz(question,answer){
    var answerByUser = readlinesync.question(question)
    if(answerByUser=== answer){
      console.log(chalk.green("The answer is right"))
      score =score +1;;
    }
    else{
      console.log(chalk.red("your answer is wrong..!"))    }
    console.log("Your score : " + score)
    console.log("--------------------------\n")
 }

 var allQuestions = [  firstQuestion ={
    question : "What is the name of arya's sister?\na.Ceresi Lannister\nb.Sansa Stark\nc.Melisandre\nd.Margaery Tyrell\nYour Answer : ",
  
    answer: "b"
  },

  secondQuestion ={
    question :"Who is the king in the North?\na.Bran Stark\nb.Stannis Baratheon\nc.Eddad Stark\nd.Darrio Naharis\nYour Answer : ",
    answer: "c"
  },


 thirdQuestion ={
    question : "How many dragons do _Mother of dragons_ have?\na.Three\nb.One\nc.None \nd.five \nYour Answer : ",
    answer: "a"
  }
,
fourthQuestion ={
    question : "Who is Robb Stark's wife?\na.Missandie\nb.Ceresi \nc.Talisa\nd.Ygritte\nYour Answer : ",
    answer: "c"
  }
,

 fifthQuestion ={
    question : "Who killed Joffrey Baratheon?\na.sandor Clegane\nb.Tyrion Lannister\nc.Jorah Mormont\nd.Ollena Tyrell\nYour Answer : ",
    answer: "d"
  }
  
  ]

 for (i=0; i<allQuestions.length; i++){
   var currentQuestion = allQuestions[i]
   quiz(currentQuestion.question , currentQuestion.answer)
 }


var highscores = [Rajani = {score : "5"},
Shivani ={score : "5"},
Akash = {score : "5"}
]

console.log(chalk.red("Final Score is : " + score))
console.log("\n***************************\n")
 console.log("Below are the people who GOT all right :")
 console.log(chalk.yellow("Rajani :" + Rajani.score  ))
 console.log(chalk.yellow("Shivani :" + Shivani.score  ))
 console.log(chalk.yellow("Akash :" + Akash.score  ))
console.log("\n********************************************\n")
if (score ==5){
  console.log(chalk.magenta("yyyayyyy!!! you GOT it all right bud!!! \n"))
  
  console.log(chalk.cyan("Please send me Screenshot of your score !!!"))}
else{console.log(chalk.green("Better luck next time!!!"))
  }
