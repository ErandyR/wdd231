const memberships = [
    {
        idValue: 'npModal',
        level: 'NP',
        cost: 'Free',
        title: 'Non profit organizations',
        benefits: 'Access to networking events, Community service project participation, Basic directory listing on the Chamber website',
    },
    {
        idValue: 'bronzeModal',
        level: 'Bronze',
        cost: '10',
        title: 'Bronze Membership',
        benefits: 'All NP benefits included, Event discounts (10%), Access to member-only training, Enhanced directory listing',
    },
    {
        idValue: 'silverModal',
        level: 'Silver',
        cost: '20',
        title: 'Silver Membership',
        benefits: 'All Bronze benefits included, Priority advertising placement, Spotlight position on home page, Event discounts (20%)',
    },
    {
        idValue: 'goldModal',
        level: 'Gold',
        cost: '30',
        title: 'Gold Membership',
        benefits: 'All Silver benefits included, Exclusive VIP events, Featured advertising and promotions, Event discounts (30%), Leadership recognition within the Chamber',
    }
]


const membershipDetails = document.querySelector("#membership-details");


function displayMembershipDetails(membership) {
    membershipDetails.innerHTML = '';
    membershipDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${membership.level}</h2>
        <h3>${membership.title}</h3>
        <p><strong>Monthly Cost</strong>: $${membership.cost}.00</p>
        <p><strong>Benefits</strong>:</p>
        <p>${membership.benefits}</p>
    `;
    membershipDetails.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener('click', () => {
        membershipDetails.close();
    });
}

const openModal = document.querySelectorAll(".open-modal");


openModal.forEach(modal => {
    modal.addEventListener("click", () => {
        memberships.forEach(membership => {
            if (modal.id == membership.idValue) {
                displayMembershipDetails(membership);
                console.log(modal.id);
                console.log(membership.idValue);
            }
        })
    });
})