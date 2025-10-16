// Import the module
import { items } from '../data/items.mjs';

const itemsCards = document.querySelector("#items-cards");

// Function that builds and displays all the cards
const displayItems = (items) => {
    items.forEach((item) => {
        let card = document.createElement('div');
        let title = document.createElement('h2');
        let figure = document.createElement('figure');
        let portrait = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let learnMore = document.createElement('a');

        title.textContent = item.title;
        address.textContent = `Address: ${item.address}`;
        description.textContent = `Description: ${item.description}`;
        learnMore.textContent = "Learn more...";

        portrait.setAttribute('src', item.image);
        portrait.setAttribute('alt', `Portrait of ${item.title}`);
        portrait.setAttribute('loading', 'lazy');

        figure.classList.add('fig-img');
        portrait.classList.add('item-img');
        learnMore.classList.add('learn-button');
        card.classList.add('card-items');

        card.appendChild(title);
        card.appendChild(figure);
        figure.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learnMore);

        itemsCards.appendChild(card);
    });
};

// Call the display function right away
displayItems(items);
