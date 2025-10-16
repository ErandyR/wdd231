import { items } from "../data/items.mjs";

let currentIndex = 0;

function loadCarousel(startIndex) {
    const container = document.getElementById("carousel-items");
    container.innerHTML = "";
    for (let i = startIndex; i < startIndex + 3 && i < items.length; i++) {
        const item = items[i];
        container.innerHTML +=
            `<figure>
                <img class="items-images" src="${item.image}" alt="${item.alt}" loading="lazy">
                <figcaption>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="more-button"><a href="${item.page}">Learn more</a></p>
                </figcaption>
            </figure>`;
    }
}


// slides
document.querySelector(".prev").addEventListener("click", () => {
    currentIndex -= 3;
    if (currentIndex < 0) currentIndex = items.length - 3;
    loadCarousel(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
    currentIndex += 3;
    if (currentIndex >= items.length) currentIndex = 0;
    loadCarousel(currentIndex);
});


loadCarousel(currentIndex);