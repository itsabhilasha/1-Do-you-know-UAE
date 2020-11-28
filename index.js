
var rs = require("readline-sync")
const chalk = require('chalk');

// output
console.log(chalk.green("Hello!"),chalk.cyan("How much do you know about UAE? Let's find out!"));

// input
var player = rs.question("\nPlease enter your name: ")

// processing

var welcomeMessage = `Welcome, ${player}! Please answer all the questions.`

console.log(chalk.yellow(welcomeMessage))

//function

var score = 0


function gameplay(question,correctAnswer)
{
  var isAnswerCorrect
  var answer=rs.question(`\n${chalk.green(question)}`)
  if (answer.toUpperCase()===correctAnswer.toUpperCase())
  {
    isAnswerCorrect="Yes"
    score=score+2
  } else
  {
    isAnswerCorrect="No"
    score=score-1
    console.log(chalk.blue("The right answer is: ")+chalk.red(correctAnswer))
  }

  return isAnswerCorrect
}


//list of questions

var questionList =
[
  {
    question:"How many emirates does UAE have? ",
    answer:"7"
  },
  {
    question:"Which emirate is UAE's capital? ",
    answer:"Abu Dhabi"
  },
  {
    question:"Which emirate is Burj Khalifa in? ",
    answer:"Dubai"
  },
  {
    question:"UAE national day is in which month? ",
    answer:"December"
  },
  {
    question:"Is UAE a monarch? ",
    answer:"Yes"
  },
  {
    question:"UAE flag has yellow colour? ",
    answer:"No"
  },
  {
    question:"Which location in Abu Dhabi has the fastest roller coaster in the world? ",
    answer:"Ferrari World"
  },
  {
    question:"Which is the famous man-made island in Dubai? ",
    answer:"Palm Jumeirah"
  },
  {
    question:"Is it true that UAE police has ferraris and lamborghinis? ",
    answer:"Yes"
  },
  {
    question:"Which Indian cricketing tournament has been held multiple times in UAE? ",
    answer:"IPL"
  }
]

for(i=0;i<questionList.length;i++)
{
  var isCorrect=gameplay(questionList[i].question,questionList[i].answer)
  console.log(chalk.blue("Were you right? "), chalk.red(isCorrect))
  console.log(chalk.blue("Your score is: "),
  chalk.cyan(score)) 
}
console.log("-------------------------")
const playerScoreboardList = [
  {
    "name":"Rohit", 
    "score":"10"
  },
  {
    "name":"Abhilasha", 
    "score":"0"
  },
  {
    "name":"Rosh", 
    "score":"8"
  }
]
var flag=0
console.log(chalk.cyan(`This is the current scoreboard:`))
for (i=0;i<playerScoreboardList.length;i++) {
  console.log(playerScoreboardList[i].name+" scored "+playerScoreboardList[i].score)
  if (score>=playerScoreboardList[i].score)
  {
    flag=1
  }
}
if(flag===1)
{
  console.log(chalk.red("You have beaten a high score, please send a screenshot to me so that I can update your score in the scoreboard!"))
}
else
{
  console.log(chalk.red("Uh-oh! You couldn't beat the scores in the scoreboard. Please try again!"))
}

