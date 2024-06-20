const apiKey = "1e25ed5c0a8b490d94422ecfa5263ca4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const humidityPic = document.querySelector(".humidity-pic");
const windPic = document.querySelector(".wind-pic");
humidityPic.src = "https://cdn-icons-png.flaticon.com/512/1621/1621724.png";
windPic.src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/wind-85-162753.png?f=webp";

async function checkWeather(city) {
    const response = await fetch(`${apiUrl} ${city} &appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " <sup>o</sup>c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";
        
       
        const weatherdata = data.weather[0].main;
        if (weatherdata == "Clouds") {
            weatherIcon.src = " https://openweathermap.org/img/wn/04n@2x.png"
        }
        else if (weatherdata == "Thunderstorm") {
            weatherIcon.src = " https://openweathermap.org/img/wn/11d@2x.png"
        }
        else if (weatherdata == "Drizzle") {
            weatherIcon.src = " https://openweathermap.org/img/wn/09d@2x.png"
        }
        else if (weatherdata == "Rain") {
            weatherIcon.src = " https://openweathermap.org/img/wn/10d@2x.png"
        }
        else if (weatherdata == "Snow") {
            weatherIcon.src = " https://openweathermap.org/img/wn/13d@2x.png"
        }
        else if (weatherdata == "Clear") {
            weatherIcon.src = " https://openweathermap.org/img/wn/01d@2x.png"
        }
        else if (weatherdata == "Mist" || weatherdata == "Smoke" || weatherdata == "Haze" || weatherdata == "Dust" || weatherdata == "Fog" || weatherdata == "Sand" || weatherdata == "Dust") {
            weatherIcon.src = " https://openweathermap.org/img/wn/50d@2x.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}


searchbtn.addEventListener("click", function () {
    checkWeather(searchinput.value);
});

// Event listener for pressing the Enter key in the search input
searchinput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkWeather(searchinput.value);
    }
});