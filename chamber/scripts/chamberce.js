const url = 'https://github.com/ErandyR/wdd231/chamber/data/members.json';

const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembers(data.members);
}

getMemberData();

const displayMemberss = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`
        phone.textContent = `Phone: ${member.phone}`

        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('class', 'member-img');
        card.setAttribute('class', 'card')


        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}