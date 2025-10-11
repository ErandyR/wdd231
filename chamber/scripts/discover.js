const urlItems = 'data/items.json';

const itemsCards = document.querySelector("#items-cards");

async function getItemData() {
    const response = await fetch(urlItems);
    const data = await response.json();
    displayItems(data.items);
}

getItemData();

const displayItems = (items) => {
    items.forEach((item) => {
        let card = document.createElement('div');
        let title = document.createElement('h2');
        let figure = document.createElement('figure');
        let portrait = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let learnMore = document.createElement('a');

        title.textContent = `${item.title}`;
        address.textContent = `Address: ${item.address}`;
        description.textContent = `Description: ${item.description}`;
        learnMore.textContent = "Learn more..."

        portrait.setAttribute('src', item.image);
        portrait.setAttribute('alt', `Portrait of ${item.title}`);
        portrait.setAttribute('loading', 'lazy');
        figure.setAttribute('class', 'fig-img');
        portrait.setAttribute('class', 'item-img');
        learnMore.setAttribute('class', 'learn-button');
        card.setAttribute('class', 'card-items')


        card.appendChild(title);
        card.appendChild(figure)
        figure.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learnMore);

        itemsCards.appendChild(card);
    });
}