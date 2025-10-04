const urlChambers = 'data/members.json';

const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(urlChambers);
    const data = await response.json();
    console.table(data);
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h4');
        let portrait = document.createElement('img');
        let website = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${member.name}`;
        website.textContent = `${member.website}`
        address.textContent = `${member.address}`
        phone.textContent = `${member.phone}`

        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('class', 'member-img');
        card.setAttribute('class', 'card')


        card.appendChild(name);
        card.appendChild(website);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}