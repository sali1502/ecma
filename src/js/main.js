"use strict";


const url = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

async function init() {

    // fetch-anrop

    try {
        const response = await fetch(url);
        const courses = await response.json();

    //Sorterar data från lägst till högst. .reverse(); gör det omvända.

    courses.sort((a, b) => (a.code > b.code) ? 1 : -1);

    courses.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);

    courses.sort((a, b) => (a.progression > b.progression) ? 1 : -1);

    //Filtrerar data
        let filteredCourses = courses.filter((course) => {
            return course.coursename.includes("webb");
            });
        
        //displayCourses(filteredCourses);

        displayCourses(courses);

    } catch {

        document.getElementById("error").innerHTML = "<p>Något gick fel, prova igen senare!</p>";

    }

}

init()


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


//Eventlyssnartest

let courseListEl = document.getElementById("course-list");
courseListEl.addEventListener("click", sort);

function sort(courses) {
let coursesSort = courses.sort((a, b) => (a.code > b.code) ? 1 : -1);
return coursesSort;
};

displayCourses(coursesSort);















