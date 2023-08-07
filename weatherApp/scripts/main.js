const apiKey = "1b5273f8540268032b6672569e86626a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const card = document.querySelector(".card");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const background = document.getElementById("bg");
//* async function
async function checkWeather(city) {
  //* fetch data
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json(); //* obtain JSON data from var "response"
    //* assign data to respective elements
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".temp_max").innerHTML =
      "max " + data.main.temp_max + "°";
    document.querySelector(".description-main").innerHTML =
      data.weather[0].main;

    document.querySelector(".description").innerHTML =
      data.weather[0].description;
    document.querySelector(".temp_min").innerHTML =
      "min " + data.main.temp_min + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    console.log(data);

    //  * link the icon code to the url
    weatherIcon.src =
      "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    if (data.weather[0].main == "Clouds") {
      background.style.backgroundImage = "";
      background.style.backgroundImage = "url('./images/cloudySky.jpeg')";
    } else if (data.weather[0].main == "Clear") {
      background.style.backgroundImage = "";
      background.style.backgroundImage = "url('./images/sunny.jpeg')";
    } else if (data.weather[0].main == "Rain") {
      background.style.backgroundImage = "";
      background.style.backgroundImage =
        "url('./images/natural-water-rain-drops.png')";
    } else if (data.weather[0].main == "Drizzle") {
      background.style.backgroundImage = "";
      background.style.backgroundImage =
        "url('./images/natural-water-rain-drops.png')";
    } else if (data.weather[0].main == "Mist") {
      background.style.backgroundImage = "";
      background.style.backgroundImage = "url('./images/hilltops-fog.png')";
    } else if (data.weather[0].main == "Snow") {
      background.style.backgroundImage = "";
      background.style.backgroundImage = "url('./images/cloud-sky.png')";
    } else if (data.weather[0].main == "Haze") {
      background.style.backgroundImage = "";
      background.style.backgroundImage = "url('./images/hilltops-fog.png')";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
// allow search by pressing ENTER key
searchBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    checkWeather(searchBox.value);
  }
});

let getTime = () => {
  const currentTime = new Date().toLocaleTimeString();
  document.querySelector(".currentTime").innerHTML = currentTime;
};

let getDate = () => {
  date = new Date().toDateString();
  const currentDate = document.querySelector(".currentDate");
  currentDate.innerHTML = date;
};

setInterval(getTime, 1000);
setInterval(getDate, 1000);
