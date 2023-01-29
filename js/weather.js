const WEATHER_API = config.apikey;

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const mainWeather = document.querySelector("#weather");

            console.dir(mainWeather);

            const city = mainWeather.querySelector("strong");
            const current_temp = mainWeather.querySelector("#current_temp");
            const temp = mainWeather.querySelector("#temp");
            let id = data.weather[0].id;

            if (800 <= parseInt(id) && parseInt(id) <= 802) {
                console.log(id);
                const icon = data.weather[0].icon;
                id += "-" + icon.substring(icon.length - 1, icon.length);
            }

            city.innerHTML = data.name;
            current_temp.innerHTML = `${data.main.temp}`;
            //Min 22°C Max 26°C
            temp.innerHTML = `Min ${data.main.temp_min} Max ${data.main.temp_max}`;

            const locationIconImg = mainWeather.querySelector("i");
            locationIconImg.classList.add("owf-" + id);

            mainWeather.classList.remove("hidden");
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
