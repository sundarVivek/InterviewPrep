function getAngularQuestionsAndAnswers() {
    fetch('angular.json')
        .then(response => response.json())
        .then(data => {
            const questionsContainer = document.getElementById('questionsContainer');
            data.forEach(qa => {
                const card = document.createElement('div');
                card.className = 'card mb-3';
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                const question = document.createElement('h5');
                question.className = 'card-title';
                question.textContent = qa.question;
                const answer = document.createElement('p');
                answer.className = 'card-text p-2';
                answer.textContent = qa.answer;
                answer.style.display = 'none';

                question.addEventListener('click', () => {
                    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
                });

                cardBody.appendChild(question);
                cardBody.appendChild(answer);
                card.appendChild(cardBody);
                questionsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', getAngularQuestionsAndAnswers);