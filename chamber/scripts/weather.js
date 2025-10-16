const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=19.17&lon=-98.23&units=imperial&appid=7822224c6321267d1e7d577018ada79d';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(data.main);
            currentTemp.innerHTML = `${data.main.temp}&deg;F`;
            const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            let desc = data.weather[0].description;
            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', "weather icon");
            captionDesc.textContent = `${desc}`;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

