let tempObject = document.querySelector("p.temp-textbox")
let windObject = document.querySelector("p.wind-textbox")
let humidityObject = document.querySelector('p.humidity-textbox')
let weatherObject = document.querySelector("p.wether-textbox")


const URL = "https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=140dec0d94451657d664115b6ecfef64"
        fetch(URL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            let curTemp = jsObject.main.temp
            let curWind = jsObject.wind.speed
            let curHumidity = jsObject.main.humidity
            let curWether = jsObject.weather[0].main



            tempObject.innerHTML += curTemp
            windObject.innerHTML += curWind
            humidityObject.innerHTML += curHumidity
            weatherObject.innerHTML += curWether
        });
