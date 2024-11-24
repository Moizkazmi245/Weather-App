const inputValue = document.querySelector("#inputValue");
const btn = document.querySelector("#btn");
const container2 = document.querySelector(".container2");

btn.addEventListener("click", (e) => {
    console.log(inputValue.value);
    fetch(`http://api.weatherapi.com/v1/current.json?key=a5da6ef1a5814bbea7c162012240703&q=${inputValue.value}&aqi=yes`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            container2.innerHTML = ` <div class="card">
        <h1 id="city-name">${res.location.name}</h1>
        <div class="temperature">
            <span id="temp">${res.current.temp_c}°C</span>
        </div>
        <div class="details-temp">
            <p>Feels Like: <span>${res.current.feelslike_c}°C</span></p>
            <p>Humidity: <span>${res.current.humidity}%</span></p>
            <p>Wind Speed: <span>${res.current.wind_kph} km/h</span></p>
        </div>
    </div>`

            inputValue.value = "";

        })
        .catch((err) => {
            console.log(err);

        })
})