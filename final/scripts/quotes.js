const quoteTxt = document.getElementById("quote-text");
const quoteContent = document.getElementById("quote-author");

const url_api = "https://zenquotes.io/api/random";

const container = document.querySelector(".quote-container");

async function fetchQuote() {
    try {
        // Use CORS proxy for browser
        const response = await fetch(url_api);
        const data = await response.json();
        const quoteData = JSON.parse(data.contents)[0];



        quoteTxt.textContent = `"${quoteData.q}"`;
        quoteContent.textContent = `— ${quoteData.a}`;


    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

fetchQuote();
