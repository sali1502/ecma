"use strict";

// test med utskrift av länder

const url = "https://restcountries.com/v3.1/all?fields=name,population";

async function init() {

    // fetch-anrop

    try {
        const response = await fetch (url);
        const countries = await response.json();


        // Sortera data omvänt med högsta talet först - .reverse().
        //countries.sort((a, b) => a.population - b.population).reverse();

        // Sortera data utifrån namn omvänt, Ö först- .reverse().
        //countries.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1).reverse();

        //Filtrera data
        //let filteredCountries = countries.filter((country) => {
            //return country.name.common.toLowerCase().includes("an");
        //});


       displayCountries(countries);

    } catch {

        document.getElementById("error").innerHTML = "<p>Något gick fel, prova igen senare!</p>";

    }

}

init();


// Utskrift till DOM

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




