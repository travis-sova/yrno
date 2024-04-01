import fetch from 'node-fetch';

// Funktsioon, mis teeb päringu Yr.no API-sse ja prindib ilmateate andmed ekraanile
async function fetchWeatherForecast() {
    try {
        // Koordinaadid Tallinna jaoks
        const latitude = '59.2613';
        const longitude = '24.4512';

        // Koostame päringu URL-i koos koordinaatidega ja lisame kompaktkujul päringu
        const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`;
        console.log(url);

        // Saadame päringu Yr.no API-sse
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'node-fetch'
            }
        });

        // Kontrollime, kas päring õnnestus
        if (!response.ok) {
            throw new Error('Päring ebaõnnestus: ' + response.statusText);
        }

        // Loeme vastuse JSON formaadis
        const data = await response.json();

    } catch (error) {
        console.error('Viga:', error.message);
    }
}

// Käivitame funktsiooni
fetchWeatherForecast();
