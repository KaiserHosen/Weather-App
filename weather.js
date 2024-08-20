const getWeather = ()=>{
    const cityName = document.getElementById('city').value
   const apiKey = 'ac0aacc93d8b3111c574ada4e87251f2'
    

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        const weatherInfo = document.getElementById('weatherInfo')
        const description = data.weather[0].description
        const temperature = data.main.temp
        const humidity = data.main.humidity
        const windSpeed = data.wind.speed
        const pressure = data.main.pressure

        weatherInfo.innerHTML =`
         <p>Description: ${description}</p>
        <h4>Temperature: ${temperature}&#8451</h4>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed:${windSpeed} m/s</p>
        <p>Pressure: ${pressure} bar</p>
        `
    })
    .catch(error =>{
        console.error('Ooops, Sorry', error)
        document.getElementById('weatherInfo').textContent = 'City Not Found!'
    })

}