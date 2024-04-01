import fetch from 'node-fetch';

async function fetchWeatherForecast() {
    try {
        const latitude = '59.2613';
        const longitude = '24.4512';

        const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`;

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'ilmaEnnustus/0.1 https://github.com/travis-sova/yrno'
            }
        });

        if (!response.ok) {
            throw new Error('Päring ebaõnnestus: ' + response.statusText);
        }

        const data = await response.json();

        console.log("Järgmiste tundide ilmaennustus:");
        for (let i = 0; i < 3; i++) {
            const forecast = data.properties.timeseries[i];
            const time = new Date(forecast.time).toLocaleString();
            const temperature = forecast.data.instant.details.air_temperature + "°C";
            console.log(`${time} ${temperature}`);
        }

    } catch (error) {
        console.error('Viga:', error.message);
    }
}

fetchWeatherForecast();