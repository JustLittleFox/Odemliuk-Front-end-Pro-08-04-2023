const city = "WROCLAW";
const apiKey = "5d066958a60d315387d9492393935c19";

const xhr = new XMLHttpRequest();
const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + apiKey;

xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        let weather = "";
        weather += "city: " + data.name + "<br>";
        weather += "temp: " + data.main.temp + "<br>";
        weather += "pressure: " + data.main.pressure + "<br>";
        weather += "description: " + data.weather[0].description + "<br>";
        weather += "humidity: " + data.main.humidity + "<br>";
        weather += "wind speed: " + data.wind.speed + "<br>";
        weather += "wind deg: " + data.wind.deg + "<br>";
        weather += "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";
        document.getElementById("weather").innerHTML = weather;
    }
};
xhr.send();
