
let questions = [
    {
        id: 1,
        question: "What is the full meaning of HTML?",
        correctAnswer: "Hyper Text Markup Language",
        options: [
            "Hyper Technical Memory Logistics.",
            "Hyper Transcriptive Machine Language",
            "Hyper Text Markup Language",
            "Hyper Test Markup language",
        ]

    },
    {
        id: 2,
        question: "Which is more effective in creating a very responsive webpage?",
        correctAnswer: "Bootstrap",
        options: [
            "Html",
            "Css",
            "Bootstrap",
            "Php",
        ]

    },
    {
        id: 3,
        question: "What does CSS stand for?",
        correctAnswer: "Cascading Style sheet",
        options: [
            "Cathode sheet style",
            "Cascading style sheet",
            "Convertible style sheet",
            "None of the above",
        ]
    },
    {
        id:4,
        question: "All these are ways of inserting CSS into HTMl except.",
        correctAnswer: "External styling",
        options: [
            "Internal style sheet",
            "External style sheet",
            "Inline styling",
            "External styling",
        ]
    },
    {
        id:5,
        question: "What is the main purpose of JavaScript?",
        correctAnswer: "To program the behavior of web pages",
        options: [
            "To program the behavior of web pages",
            "To specify the layout of web pages",
            "To define the content of web pages",
            "None of these",
        ]
    },
    {
        id:6,
        question: "ISP stands for:",
        correctAnswer: "Internet Service Provider",
        options: [
            "Internet Survey Period",
            "Internet Service Provider",
            "Internet Security Protocol",
            "Integrated Service Provider"
        ]
    },
    {
        id:7,
        question: "A JPG stands for:",
        correctAnswer: "A format for an image file",
        options: [
            "A format for an image file",
            "Jumper Programmed Disk",
            "A type of hard disk",
            "A unit of measure for memory",
        ]
    },
    {
        id:8,
        question: " How many bits makes up a byte?",
        correctAnswer: "8",
        options: [
            "32",
            "16",
            "8",
            "64",
        ]
    },
    {
        id:9,
        question: "'DB' in computer means?",
        correctAnswer: "DataBase",
        options: [
            "Double Base",
            "DataBase",
            "Data Block",
            "None of these",
        ]
    },
    {
        id:10,
        question: "What is the Full Form of RAM?",
        correctAnswer: "Random Access Memory",
        options: [
            "Run Accept Memory",
            "Random All Memory",
            "Random Access Memory",
            "None of these",
        ]
    },
];

let question_count = 0;
let points = 0;

window.onload = function(){
    show(question_count);

};

function show(count){
    let question  = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();

}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i <option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i< option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){
      

    if(question_count = question.length -1){
        location.href = 'final.html'
    }
        console.log(question_count)



let user_answer = querySelectorAll("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points +=10;
    sessionStorage.setItem("points",points)
}
console.log(points);

//question_count++
show(question_count);//

}
