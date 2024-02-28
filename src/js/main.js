"use strict";

// test med utskrift av länder

const url = "https://restcountries.com/v3.1/all?fields=name,population";




async function init() {
    try {
        const response = await fetch (url);
        const countries = await response.json();

       displayCountries(countries);

    } catch {

        document.getElementById("error").innerHTML = "<p>Något gick fel, prova igen senare!</p>";

    }

}

init();

function displayCountries(countries) {
    const countriesEl = document.getElementById("countries-list");

    countries.forEach((country) => {
        countriesEl.innerHTML +=
        `<tr>
            <td>${country.name.common}</td>
            <td>${country.population}</td>
        </tr>`;
    });  

}




