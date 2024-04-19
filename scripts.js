
function convertTemperature() {
  var temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
  var unitSelect = document.getElementById('unitSelect').value;
  var resultElement = document.getElementById('result');
  var convertedTemperature;

  if (isNaN(temperatureInput)) {
    resultElement.innerText = 'Please enter a valid number.';
    return;
  }

  if (unitSelect === 'celsius') {
    convertedTemperature = (temperatureInput - 32) * 5 / 9;
    resultElement.innerText = 'Converted temperature: ' + convertedTemperature.toFixed(2) + ' °C';
  }
  else if (unitSelect === 'fahrenheit') {
    convertedTemperature = (temperatureInput * 9 / 5) + 32;
    resultElement.innerText = 'Converted temperature: ' + convertedTemperature.toFixed(2) + ' °F';
  }
  else if (unitSelect === 'kelvin') {
    convertedTemperature = temperatureInput + 273.15;
    resultElement.innerText = 'Converted temperature: ' + convertedTemperature.toFixed(2) + ' K';
  }
}

// const apiKey = "2e3fafb5d267a4ac26bfd4338541bf1e";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// constweatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


//   if (response.status == 404) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   }
//   else {
//     var data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

//     if (data.weather[0].main == "Clouds") {
//       weatherIcon.src = "images/cloudy.jpeg";
//     } else if (data.weather[0].main == "Clear") {
//       weatherIcon.src = "images/claer.jpeg";
//     } else if (data.weather[0].main == "Rain") {
//       weatherIcon.src = "images/rainy.jpeg";
//     } else if (data.weather[0].main == "Drizzle") {
//       weatherIcon.src = "images/drizzle.jpeg";
//     } else if (data.weather[0].main == "Mist") {
//       weatherIcon.src = "images/mist.jpeg";
//     }

//     document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";

//   }

//   searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
//   })

// }