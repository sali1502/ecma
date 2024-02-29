"use strict";

const url = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

async function init() {

    // fetch-anrop

    try {
        const response = await fetch(url);
        const courses = await response.json();


        // Sortera data omvänt med högsta talet först - .reverse().
        //countries.sort((a, b) => a.population - b.population).reverse();

        // Sortera data utifrån namn omvänt, Ö först- .reverse().
        //countries.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1).reverse();

        //Filtrera data
        //let filteredCountries = countries.filter((country) => {
            //return country.name.common.toLowerCase().includes("an");
        //});


        displayCourses(courses);

    } catch {

        document.getElementById("error").innerHTML = "<p>Något gick fel, prova igen senare!</p>";

    }

}

init();


// Utskrift till DOM

function displayCourses(courses) {
    const coursesEl = document.getElementById("course-list");

    courses.forEach((course) => {
        coursesEl.innerHTML +=
            `<tr>
            <td>${course.code}</td>
            <td>${course.coursename}</td>
            <td>${course.progression}</td>
        </tr>`;
    });

}




