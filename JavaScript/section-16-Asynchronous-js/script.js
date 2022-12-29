"use strict"

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies);
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}">
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country_row"><span>👫 </span> ${(+data.population / 100000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${languages[0]}</p>
        <p class="country__row"><span>💰</span>${currencies[0].name}</p>
    </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    // countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText("beforeend", msg);
    // countriesContainer.style.opacity = 1;
};


/*const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    // console.log(request.responseText);

    request.addEventListener("load", function () {
        // console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const languages = Object.values(data.languages);
        const currencies = Object.values(data.currencies);
        const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}">
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 100000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${languages[0]}</p>
        <p class="country__row"><span>💰</span>${currencies[0].name}</p>
    </div>
    </article>
    `;
        countriesContainer.insertAdjacentHTML("beforeend", html);
        countriesContainer.style.opacity = 1;
    });
};
getCountryData("india");*/
// getCountryData("maldives");
// getCountryData("uae");
// getCountryData("egypt");

/*const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);

        // Get neighbour country
        const [neighbour] = data.borders;


        if (!neighbour) return;
        const request2 = new XMLHttpRequest();
        request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener("load", function () {
            // console.log(this.responseText);
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);

            console.log(JSON.parse(this.responseText))

            renderCountry(data2, "neighbour");
        })
    });
};
// getCountryAndNeighbour("india");
// getCountryAndNeighbour("uae");
getCountryAndNeighbour("usa");*/

/*setTimeout(() => {
    console.log("1 second passed");
    setTimeout(() => {
        console.log("2 seconds passed");
        setTimeout(() => {
            console.log("3 seconds passed");
            setTimeout(() => {
                console.log("4 seconds passed");
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);*/

/*const request = fetch("https://restcountries.com/v3.1/name/india");
console.log(request);*/

/*const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
        console.log(response)
    });
};
getCountryData("portugal");*/

/*const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            renderCountry(data[0]);
        });
};
getCountryData("india");*/

/*const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};
getCountryData("portugal");*/

const getCountryData = function (country) {
    // country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            console.log(response);

            if (!response.ok)
                throw new Error(`Country not found (${response.status})`);

            return response.json()
        },
            // err => alert(err)
        )
        .then(data => {
            renderCountry(data[0]);
            // const neighbour = data[0].borders[0];
            const neighbour = "fuefhds";

            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then(response => {
            if (!response.ok)
                throw new Error(`Country not found (${response.status})`);
            response.json();
        })
        .then(data => renderCountry(data[0], "neighbour"))
        .catch(err => {
            console.error(`${err}`);
            renderError(`Something went wrong ${err.message}. Try again!`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};
btn.addEventListener("click", function () {
    getCountryData("india");
});
// getCountryData("jdshf")