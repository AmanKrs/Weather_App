async function weather() {
  if (document.getElementById("cityname").value.trim() == "") {
    alert("Please enter CityName!");
    return false;
  }
  document.getElementById("content").style.display = "none";
  document.getElementById("content1").style.display = "block";

  let cityName = document.getElementById("cityname").value;
  console.log(cityName);
  document.getElementById("city").innerHTML += cityName;

  var report = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=293388d62b092ca9f36c62239d4e543c&units=metric"
  );
  console.log(report);
  var cityWeather = await report.json();
  console.log(cityWeather);

  let temp = cityWeather.main.temp;
  temp = Math.round(temp);
  console.log("temp", temp);
  temp = temp + "°";

  let tempMax = cityWeather.main.temp_max;
  tempMax = Math.round(tempMax);
  tempMax = tempMax + "°";

  let tempMin = cityWeather.main.temp_min;
  tempMin = Math.round(tempMin);
  tempMin = tempMin + "°";

  let feelLike = cityWeather.main.feels_like;
  feelLike = Math.round(feelLike);
  feelLike = feelLike + "°";

  let humidity = cityWeather.main.humidity;
  humidity = humidity + "%";

  let description = cityWeather.weather[0].main;
  let windSpeed = cityWeather.wind.speed;
  windSpeed = Math.round(windSpeed);
  windSpeed = windSpeed + "Km/h";

  let country = cityWeather.sys.country;

  document.getElementById("temp").innerText = temp;
  document.getElementById("temp_min").innerText = tempMin;
  document.getElementById("temp_max").innerText = tempMax;
  document.getElementById("humid").innerText = humidity;
  document.getElementById("feel").innerText = feelLike;
  document.getElementById("des").innerText = description;
  document.getElementById("wind").innerText = windSpeed;
  document.getElementById("country").innerText = country;
  var iconurl =
    "http://openweathermap.org/img/w/" + cityWeather.weather[0].icon + ".png";
  document.getElementById("icon").src = iconurl;
}
function back() {
  document.getElementById("content").style.display = "flex";
  document.getElementById("content1").style.display = "none";
  document.getElementById("city").innerHTML = "";
}
