import { topicsData } from '../data/prompts.mjs';

const topics = topicsData.topics;

const cards = document.querySelector("#prompt-cards");

topics.forEach(topic => {
    let card = document.createElement("section");
    let topicTitle = document.createElement("h3");
    let containerButton = document.createElement("p");
    let moreButton = document.createElement("a");

    topicTitle.innerHTML = `${topic.title}`;
    moreButton.innerHTML = "Show prompts";

    containerButton.setAttribute("class", "container-answerButton")
    topicTitle.setAttribute("class", "topic-h3");
    moreButton.setAttribute("class", "topic-button");

    containerButton.appendChild(moreButton);
    card.appendChild(topicTitle);
    card.appendChild(containerButton);

    cards.appendChild(card);


    moreButton.addEventListener('click', () => {
        displayTopicPrompts(topic);
    })
});

const promptsShown = document.querySelector("#topic-prompts");


function displayTopicPrompts(topic) {
    promptsShown.innerHTML = '';
    promptsShown.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${topic.title}</h2>
        <h3>Click on the prompt you would like to answer:</h3>
        <p><a id="propmt1" class="prompts">${topic.prompts[0]}</a></p>
        <p><a id="propmt2" class="prompts">${topic.prompts[1]}</a></p>
        <p><a id="propmt3" class="prompts">${topic.prompts[2]}</a></p>
        <p><a id="propmt4" class="prompts">${topic.prompts[3]}</a></p>
        <p><a id="propmt5" class="prompts">${topic.prompts[4]}</a></p>
    `;
    promptsShown.showModal();

    const prompts = document.querySelectorAll(".prompts");
    prompts.forEach(prompt => {
        const txt = prompt.textContent;
        prompt.addEventListener('click', () => {
            promptsShown.innerHTML = `
                <button id="closeModal2">❌</button>
                <h3>Your prompt: </h3>
                <p>${txt}</p>
                <h3>Your answer: </h3>
                <label><textarea id="answerText" name="comments" rows="5" cols="40" placeholder="Type your answer to any prompt here..."></textarea>
                </label><br/>
                <input type="submit" id="saveAnswer" class="topic-button" value="Save answer">
            `;


            const saveAnswerButton = document.getElementById("saveAnswer");
            saveAnswerButton.addEventListener('click', () => {
                promptsShown.close();
                const answer = document.getElementById("answerText").value;
                saveAnswer(answer);
            });

            const closeModal2 = document.getElementById("closeModal2");
            closeModal2.addEventListener('click', () => {
                promptsShown.close();
            });
        })
    });



    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener('click', () => {
        promptsShown.close();
    });

}

const saveAnswer = (answer) => {
    const savedResponses = JSON.parse(localStorage.getItem("mindfulResponses")) || [];

    const entry = {
        answer,
        date: new Date().toLocaleString(),
    };
    savedResponses.push(entry);

    localStorage.setItem("mindfulResponses", JSON.stringify(savedResponses));

}

const showMyResonses = () => {
    document.getElementById("viewBtn").addEventListener("click", () => {
        const savedResponses = JSON.parse(localStorage.getItem("mindfulResponses")) || [];
        const container = document.getElementById("responses");

        let answersSaved = " ";

        if (savedResponses.length === 0) {
            answersSaved = "<p>No responses yet.</p>";
        } else {
            answersSaved = savedResponses
                .map(r => `<p><strong>${r.date}</strong>: ${r.answer}</p>`)
                .join("");
        }

        container.innerHTML = `
            <button id="closeResponsesModal">❌</button>
            <section>${answersSaved}</section>
            `;
        container.showModal();

        const closeModal = document.getElementById("closeResponsesModal");
        closeModal.addEventListener('click', () => {
            container.close();
        });

    });
}

showMyResonses();



const mindfulText = document.querySelector('.mindful-text');
window.addEventListener('scroll', () => {
    const rect = mindfulText.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        mindfulText.classList.add('visible');
    }
});

const runningModal = document.querySelector('#running-info');
const liftingModal = document.querySelector('#lifting-info');

runningModal.addEventListener('click', () => {
    let movement = 1;
    displayMovement(movement);
})

liftingModal.addEventListener('click', () => {
    let movement = 2;
    displayMovement(movement);
})


const movementModal = document.querySelector("#movement-modal");

const displayMovement = (movement) => {
    let movementShown = " ";
    let text = " ";
    if (movement === 1) {
        movementShown = "Running";
        text = "Running is a powerful way to boost both body and mind. It strengthens your stamina, improves cardiovascular health, and increases energy levels, making everyday activities easier. Beyond the physical benefits, running helps clear your mind and release stress, turning each run into a moving meditation. Focusing on your breath and the rhythm of your steps encourages mindfulness, helping you stay present and centered. Over time, running builds not just endurance, but also mental clarity and emotional resilience."
    }
    else if (movement === 2) {
        movementShown = "Weight Lifting";
        text = "Lifting weights is more than building muscle—it’s a practice that strengthens your body and sharpens your mind. Regular strength training improves endurance, boosts metabolism, and supports joint and bone health, making daily movements easier and more efficient. Focusing on form, breath, and controlled movements turns each session into a mindful experience, helping you stay present and connected to your body. Over time, lifting not only sculpts your physique but also builds confidence, discipline, and mental resilience."
    }
    movementModal.innerHTML = '';
    movementModal.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>Why ${movementShown}?</h2>
        <p>${text}</p>
    `;
    movementModal.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener('click', () => {
        movementModal.close();
    });
}