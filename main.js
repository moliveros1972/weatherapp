// select our elements and create variables
var API_KEY = "d1782c5104aa65b2233e49646bff3fb2";
var ROOT_URL = "http://api.openweathermap.org/data/2.5/weather?zip=";
// select the elements citytitle, zip input bar, weather div, img with class icon,span
// with class temp, span with class humid, select the span with the class deg
var citytitle = document.querySelector(".city_title");
var zip = document.querySelector(".zip");
var weather = document.querySelector(".weather");
var icon = document.querySelector(".icon");
var temp = document.querySelector(".temp");
var humid = document.querySelector(".humid");
var deg = document.querySelector(".deg");
var convert = document.querySelector('convert');
var kelvin;
var icon = {
    "Clouds": "img/cloudy.png"
}

// define functions
function KtoF(kelvin) {
    return Math.round((kelvin - 273.15) * 1.8 + 32);

}
// convert to farenheit
function KtoC(kelvin) {
    return Math.round((kelvin - 273.15);
}

function getWeather(zipCode) {
    // console.log("Getting Weather");
    // "http://api.openweathermap.org/data/2.5/weather?zip=1111"
    fetch(`${ROOT_URL}${zipCode},us&appid=${API_KEY}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            citytitle.textContent = data.name;
            weather.textContent = data.weather[0].main;
            humid.textContent = data.main.humidity;
            kelvin = data.main.temp;
            temp.textContent = KtoF(kelvin);
            icon.src = icons[data.weather[0].main];
        })
        .catch(function (error) {
            console.log("There was an error");
        })
}




// call functions and add event listeners
zip.addEventListener("keypress", function (event) {
    // console.log(event);
    if (event.key == "Enter") {
        // console.log("Hit enter");
        getWeather(zip.value);
    }
})

convert.addEventListener("click", function () {
    // console.log("ready to convert")
    if (convert.textContent == "Convert to C") {
        temp.textContent = KtoC(kelvin);
        deg.innerHTML = '&deg; C';
        convert.textContent = "Convert to F";
    } else {
        temp.textContent = KtoF(kelvin);
        deg.innerHTML = '&deg; F';
        convert.textContent = "Convert to C";
    }
});

getWeather('33144');

