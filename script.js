
const city = document.getElementById("cityResult");
const image = document.getElementById("pictResult");
const temp = document.getElementById("tempResult");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidityResult");
const windSpeed = document.getElementById("windSpeedResult");
const avgTemp = document.getElementById("avgTemp");

async function loadWeather(){
    const input = document.getElementById("city").value;
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=2ec71c3dae592ec447aa3ce9c3bc2cd6&units=metric');
    const data =  await response.json();
        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) +"°C";
        weather.innerHTML = data.weather[0].description;
        humidity.innerHTML = data.main.humidity+"%";
        windSpeed.innerHTML = data.wind.speed + "m/s";
        avgTemp.innerHTML = "temperature from "+data.main.temp_min+"°C to "+data.main.temp_max+"°C";
        if (data.weather[0].main == "Clouds"){
            image.src = "image/PartlyCloudy.png";
        }
        else if (data.weather[0].main == "Clear"){
            image.src = "image/Sunny.png";
        }
        else if (data.weather[0].main == "Rain"){
            image.src = "image/Rainy.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            image.src = "image/drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
            image.src = "image/mist.png";
        }
        else {
            image.src = "image/humidity.png";
        }
        document.querySelector(".result").style.display = "block";
    } catch (error) {
        document.querySelector(".result").style.display = "none";
        alert("please input the valid places");
    }
    document.getElementById("city").value = "";
}

