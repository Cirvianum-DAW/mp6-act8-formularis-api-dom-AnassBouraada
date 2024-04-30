const api = 'www.weatherapi.com';

document.getElementById('meteoForm').addEventListener('submit', async function (event) {

    event.preventDefault();


    const ciutat = document.getElementById('ciutat').value;
    const codiPostal = document.getElementById('codiPostal');
    const pais = document.getElementById('pais').value;

    if (!ciutat) {
        alert('Has de introduir una ciutat');
        return;
    }

    // if (!codiPostal) {
    //     alert('Has de introduir un codi Postal obligatoriament fill de la gran puta');
    //     return;
    // }

    try {
        const key = '96ee6b4ca0664ce697c213300242904';
        const meteoActual = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${ciutat}&country=${pais}&aqi=no`;
        const meteoPronostic = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${ciutat}&country=${pais}&days=2`;

        const actual = await fetch(meteoActual).then(response => response.json());

        const pronostic = await fetch(meteoPronostic).then(response => response.json());

        console.log(pronostic.current.condition.text);

        const informacio = document.getElementById('weatherResults');
        const localitzacio = document.getElementById('location');
        const temperatura = document.getElementById('temperature');
        const descripcio = document.getElementById('weatherDescription');
        const logo = document.getElementById('weatherIcon');
        const temperaturaPronostic = document.getElementById('forecastTemperature');
        const descripcioPronostic = document.getElementById('forecastWeatherDescription');
        const logoPronostic = document.getElementById('forecastWeatherIcon');

        localitzacio.textContent = `${actual.location.region} - ${actual.location.country}`;
        temperatura.textContent = `Temperatura: ${actual.current.temp_c}C`;
        descripcio.textContent = `Descripcio: ${actual.current.condition.text}`;
        logo.src = actual.current.condition.icon;
        temperaturaPronostic.textContent = `Temperatura: ${pronostic.current.temp_c}C`;
        descripcioPronostic.textContent = `Descripcio: ${pronostic.current.condition.text}`;
        logoPronostic.src = pronostic.current.condition.icon;

        informacio.classList.remove('hidden');

    } catch (error) {
        console.error("Error en la petició a l'API:", error);
    }

})