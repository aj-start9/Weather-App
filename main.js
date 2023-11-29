function getWeatherData(e){
    const elementId =  document.getElementById("search");
    const city = elementId.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f4d58e448988ec5303931aaf6012e8d`)
    .then(res => {
        console.log(res)
        document.getElementById("city").innerHTML = "Jaipur"
        document.getElementById("temp").innerHTML = "25 °C"
    })
    .catch(err => {
        console.log(err)
    })
}