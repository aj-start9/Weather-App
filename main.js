function getWeatherData(e){
    const elementId =  document.getElementById("search");
    const city = elementId.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f4d58e448988ec5303931aaf6012e8d`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        const weatherStatus =  res?.weather?.[0]?.main?.toLowerCase()
        document.getElementById("city").innerHTML = res?.name
        document.getElementById("temp").innerHTML = `${(res?.main?.temp -  273.15).toFixed(2)} °C`
        document.getElementById("humidity").innerHTML = `${res?.main?.humidity} %`
        document.getElementById("wind").innerHTML = `${res?.wind?.speed} km/h`
        document.getElementById("weather-check").src = `assests/${weatherStatus ? weatherStatus: 'clear'}.png`
    })
    .catch(err => {
        console.log(err)
    })
}