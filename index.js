var readLineSync=require('readline-sync')
var chalk=require('chalk')

var userName=readLineSync.question(chalk.green("MAY I KNOW YOUR NAME?"))
console.log(chalk.blue(`Welcome ${userName} to FRIENDS Quiz Challenging you on How well do you know your friend Pragyan !`))
console.log(chalk.green("Let's Start !"))
console.log("...........................................................")

var score=0

var questions=[{
    question:chalk.blue(`What is Pragyan's Birthday month?
    1. January
    2. September
    3. April`),
    answer:"3"
},
{
    question:chalk.blue(`What is Pragyan's favourite colour ?
    1. Orange
    2. Purple
    3. Pink`),
    answer:"1"
},
{
    question:chalk.blue(`What do Pragyan uses the most?
    1. Facebook
    2. Instagram
    3. Whatsapp`),
    answer:"2"
},
{
    question:chalk.blue(`If Pragyan had one wish to make, what it would be?
    1. To be a billionare
    2. Have superpowers
    3. To be best at everything`),
    answer:"3"
},
{
    question:chalk.blue(`What is Pragyan's eye color?
    1. Dark-brown
    2. Black
    3. Hazel`),
    answer:"2"
},
{
    question:chalk.blue(`What will Pragyan prefer?
    1. Tea
    2. Coffee
    3. Juice`),
    answer:"1"
},
{
    question:chalk.blue(`What excites Pragyan the most?
    1. Travelling
    2. Watching favourite movie
    3. Yummy food`),
    answer:"1"
},
{
    question:chalk.blue(`According to Pragyan, the best quality in a person is?
    1. Empathy
    2. Maturity
    3. Openness`),
    answer:"1"
},
{
    question:chalk.blue(`Who is Pragyan's favourite cricketer?
    1. Virat Kohli
    2. Sachin Tendulkar
    3. M.S. Dhoni`),
    answer:"3"
},
{
    question:chalk.blue(`What does Pragyan loves doing in leisure time?
    1. Read books
    2. Binge watch
    3. Painting`),
    answer:"3"
}]

function play(question,answer)
{
    var userAnswer=readLineSync.question(question)
    if(userAnswer===answer){
        console.log(chalk.green("Good !!! You know me right"))
        score++
        console.log(chalk.yellow("You scored ")+chalk.green(score))
        console.log("----------------------------------------")
    }
    else{
        console.log(chalk.red("Oops !!! That's not me"))
    }
}

for(let i=0; i<questions.length;i++){
    play(questions[i].question,questions[i].answer)
}

console.log(chalk.yellow("Your final score is ")+chalk.green(score))

const scores=[5,6]
var result
function checkScores(a){
    for(let i=0; i<a.length; i++){
    
            if(score>a[i]){
            result=chalk.green("Yay !!! You got the Highest scores")
            }
        
            else{
            result=chalk.green("Sorry !!! You couldn't beat the High score")
            }
            return result
        }

}
console.log(checkScores(scores))
console.log(chalk.grey("..................................."))
console.log(chalk.grey(`SCORE BOARD:
Srishti: 5
Vidya  : 6 `))
console.log(chalk.grey("..................................."))
console.log(chalk.grey("Send me your scores in screenshot and I will update the score board"))

