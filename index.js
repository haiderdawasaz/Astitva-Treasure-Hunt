const Questions = [
    {
        question: "Kedarnath.jpg",
        answer: "kedarnath"
    },
    {
        question: "Varanasi.jpg",
        answer: "varanasi"
    },
    {
        question: "Badrinath.jpg",
        answer: "badrinath"
    },
    {
        question: "Ayodhaya.jpeg",
        answer: "ayodhaya"
    },
    {
        question: "Rameshwaram.jpg",
        answer: "rameshwaram"
    },
];

let ShuffledQuestions = [];
let Index = 0;
let Answer = "";

document.getElementById("Quiz").style.display = "none";

document.getElementById("Intro").addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        handleIntro();
    }
});

document.getElementById("Answer").addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        checkAnswer1();
    }
});

function handleQuestions() { 
    while(ShuffledQuestions.length <= 4){
        const random = Questions[Math.floor(Math.random() * Questions.length)]
        if (!ShuffledQuestions.includes(random)) {
            ShuffledQuestions.push(random)
        }
    }
}

handleQuestions();
function NextQuestion(){
    const CurrentQuestion = ShuffledQuestions[Index];
    var pic = document.createElement("img");
    pic.setAttribute('src', CurrentQuestion.question);
    document.getElementById("Question").innerHTML = document.body.appendChild(pic);
    Answer = document.getElementById("Answer").value;
    Answer = Answer.toLowerCase();
    checkAnswer(Answer, CurrentQuestion)
}

function checkAnswer(Answer, CurrentQuestion){
    if(Answer == CurrentQuestion.answer){
        ++Index;
        document.getElementById("Answer").value = "";
    }
    else{
        window.alert("Incorrect Answer");
    }
}

function displayQuestion(){
    const CurrentQuestion = ShuffledQuestions[Index];
    if(Index > 4){
        document.getElementById("Quiz").style.display = "none";
        document.getElementById("Outro").style.display = "block";
    }
    else{
        var pic = document.createElement("img");
        pic.setAttribute('src', CurrentQuestion.question);
        pic.setAttribute('id', "Question");
        pic.height = 500;
        pic.width = 750;
        document.getElementById("Question").replaceWith(pic);
    }
        
}

function checkAnswer1(){
    const CurrentQuestion = ShuffledQuestions[Index];
    Answer = document.getElementById("Answer").value;
    Answer = Answer.toLowerCase();
    if(Answer == CurrentQuestion.answer){
        ++Index;
        document.getElementById("Answer").value = "";
        displayQuestion();
    }
    else{
        window.alert("Incorrect Answer");
    }
}

function handleIntro(){
    document.getElementById("Info").style.display = "none";
    document.getElementById("Quiz").style.display = "block";
    displayQuestion();
}