const Questions = [
    {
        question: "Kedarnath.jpg",
        answer: ["kedarnath"]
    },
    {
        question: "Varanasi.jpg",
        answer: ["varanasi", "banaras"]
    },
    {
        question: "Badrinath.jpg",
        answer: ["badrinath"]
    },
    {
        question: "Ayodhaya.jpeg",
        answer: ["ayodhaya", "ayodhya"]
    },
    {
        question: "Rameshwaram.jpg",
        answer: ["rameshwaram"]
    },
];

let ShuffleQuestions = [];
let Index = 0;
let Answer = "";

document.getElementById("Quiz").style.display = "none";

document.getElementById("Intro").addEventListener('keydown', function(event){
    if(event.code === 'Enter'){
        handleIntro();
    }
});

document.getElementById("Answer").addEventListener('keydown', function(event){
    if(event.code == 'Enter'){
        checkAnswer();
    }
});

function handleQuestions() { 
    while (ShuffleQuestions.length <= 4) {
        const random = Questions[Math.floor(Math.random() * Questions.length)]
        if (!ShuffleQuestions.includes(random)) {
            ShuffleQuestions.push(random)
        }
    }
}

handleQuestions();

function displayQuestion(){
    const CurrentQuestion = ShuffleQuestions[Index];
    if(Index > 4){
        document.getElementById("Quiz").style.display = "none";
        document.getElementById("Outro").style.display = "block";
    }
    else{
        var pic = document.createElement("img");
        pic.setAttribute('src', CurrentQuestion.question);
        pic.setAttribute('id', "Question");
        pic.height = 450;
        pic.width = 700;
        document.getElementById("Question").replaceWith(pic);
    }
        
}

function checkAnswer(){
    const CurrentQuestion = ShuffleQuestions[Index];
    Answer = document.getElementById("Answer").value;
    Answer = Answer.toLowerCase();
    /*if(Answer == CurrentQuestion.answer){
        ++Index;
        document.getElementById("Answer").value = "";
        displayQuestion();
    }
    else{
        window.alert("Incorrect Answer");
    }*/
    var check=0;
    for(var i=0; i <= CurrentQuestion.answer.length; i++){
        if(CurrentQuestion.answer[i] == Answer){
            check++;
            break;
        }
    }
    if(check == 1){
        ++Index;
        document.getElementById("Answer").value = "";
        displayQuestion();
    }
    else
        window.alert("Incorrect Answer");
}


function handleIntro(){
    document.getElementById("Info").style.display = "none";
    document.getElementById("Quiz").style.display = "block";
    displayQuestion();
}
