const API_KEY = "6c913d6b4b13ec67c9e8cb8703719e42";

function onGeoOk(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherIcon = document.createElement("img");
            weatherIcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherIcon.alt="icon";
            const weatherRow = document.querySelector("#weather li:first-child");
            weatherRow.appendChild(weatherIcon);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${Math.ceil(data.main.temp)}°C`;
            city.innerText = data.name; 
            
        });
}
function onGeoError(){
    alert("Cant't find you, no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);