const api = 'www.weatherapi.com';

document.getElementById('meteoForm').addEventListener('submit', async function (event) {

    const ciutat = document.getElementById('ciutat').value;
    const codiPostal = document.getElementById('codiPostal').value;
    const pais = document.getElementById('pais').value;

    if (!ciutat) {
        alert('Has de introduir una ciutat');
        return;
    }

    if (!codiPostal) {
        alert('Has de introduir un codi Postal obligatoriament fill de la gran puta');
        return;
    }

    try {
        const key = '96ee6b4ca0664ce697c213300242904';
        const meteoActual = `https://api.weatherapi.com/v1/current.json?key=${key}$&q=${ciutat}&aqi=no`;
        const meteoPronostic = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${ciutat}&days=2&aqi=no&alerts=no`;

        const actual = (await fetch(meteoActual));
        const pronostic = (await fetch(meteoPronostic));

        const actualData = await actual.json();
        const pronosticData = await pronostic.json();

        console.log(actualData);
        console.log(pronosticData);


    } catch (error) {
        console.error("Error en la petició a l'API:", error);
    }

})