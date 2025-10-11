const messageContainer = document.getElementById('visit-message');

const lastVisit = localStorage.getItem('lastVisit');

const now = Date.now();
console.log(now);
console.log(lastVisit);

if (!lastVisit) {
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - Number(lastVisit);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
        messageContainer.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        messageContainer.textContent = "You last visited 1 day ago.";
    } else {
        messageContainer.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem('lastVisit', now);
