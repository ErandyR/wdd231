const currentWeather = document.querySelector('#today-forecast');
const tomorrowWeather = document.querySelector('#tomorrow-forecast');

//const urlOverview = 'https://api.openweathermap.org/data/2.5/forecast/climate?lat=19.17&lon=-98.23&units=imperial&appid=7822224c6321267d1e7d577018ada79d';


async function apiFetch() {
    try {
        const response = await fetch(urlOverview);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentWeather.innerHTML = `${data.main.temp}&deg;F`;
    tomorrowWeather.innerHTML = `${data.main.temp}&deg;F`;
}