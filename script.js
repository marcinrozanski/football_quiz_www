const submitButton = document.getElementById('submit-button');
const resultContainer = document.querySelector('.result-container');
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
    },
];

let score = 0;

function displayQuestions() {
    const questionsContainer = document.getElementById('questions');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${q.question}</p>
        `;

        q.options.forEach((option, i) => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="q${index}" value="${option}"> ${String.fromCharCode(97 + i)}) ${option}
            `;
            questionDiv.appendChild(label);
        });

        questionsContainer.appendChild(questionDiv);
    });
}

displayQuestions();

submitButton.addEventListener('click', () => {
    score = 0;
    const totalQuestions = questions.length;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    resultContainer.style.display = 'block';
    document.getElementById('score').textContent = `Score: ${score} / ${totalQuestions}`;
});
