const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Home Tool Markup Language",
        b: "Hotdog Tinola Menudo Letchon",
        c: "Hyper Link and Text Markup Language",
        d: "Hyper Text Markup Language",
        correct: "d",
    },
    {
        question: "Who is making the Web standards?",
        a: "The World Wide Web Consortium",
        b: "Microsoft",
        c: "Mozilla",
        d: "Google",
        correct: "a",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<h1>",
        b: "<heading>",
        c: "<head>",
        d: "<h6>",
        correct: "a",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<lb>",
        b: "<br>",
        c: "<break>",
        d: "<breakline>",
        correct: "b",
    },
    {
        question: "Choose the correct HTML element to define important text",
        a: "<i>",
        b: "<important>",
        c: "<strong>",
        d: "<b>",
        correct: "c",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button
            `
        }
    }
})