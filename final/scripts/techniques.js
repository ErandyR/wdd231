import { breathingTechniques } from '../data/breathingTechniques.mjs';


const techniqueSections = document.querySelectorAll(".techniques-button");

techniqueSections.forEach(technique => {
    technique.addEventListener("click", (event) => {
        const idValue = event.target.id;
        console.log(idValue);
        printModal(idValue);
    })
})

const techniquesDescription = document.getElementById("technique-details");

const printModal = (idValue) => {
    techniquesDescription.innerHTML = " ";
    breathingTechniques.forEach(technique => {
        if (technique.techniqueNumber === idValue) {
            const modalCloseButton = document.createElement("button");
            const modalTitle = document.createElement("h3");
            const modalDescription = document.createElement("p");
            const howTo = document.createElement("h4");
            const benefits = document.createElement("h4");
            const listPractice = document.createElement("ul");
            const listBenefits = document.createElement("ul");

            modalCloseButton.textContent = "❌";
            modalTitle.textContent = technique.title;
            modalDescription.textContent = technique.description;

            howTo.textContent = "How to Practice:";
            benefits.textContent = "Benefits";

            listPractice.innerHTML = '';
            listBenefits.innerHTML = '';

            technique.howToPractice.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                listPractice.appendChild(li);
            });

            technique.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                listBenefits.appendChild(li);
            });

            modalCloseButton.setAttribute("id", "closeModalTechniques");

            techniquesDescription.appendChild(modalCloseButton);
            techniquesDescription.appendChild(modalTitle);
            techniquesDescription.appendChild(modalDescription);
            techniquesDescription.appendChild(howTo);
            techniquesDescription.appendChild(listPractice);
            techniquesDescription.appendChild(benefits);
            techniquesDescription.appendChild(listBenefits);

            techniquesDescription.showModal();

            const closeModal = document.getElementById("closeModalTechniques");
            closeModal.addEventListener('click', () => {
                techniquesDescription.close();
            });
        }
    })
}