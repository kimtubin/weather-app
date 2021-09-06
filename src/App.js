import "./App.css"
import { useState } from "react"
import { WeatherThemeProvider, Sunny, Cloudy, Rain, Snow } from "weather-styled-icon"

function App() {
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const APIid = "f047c7400918a4b05ae0c4a0df7fb5d2"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIid}`

  const handle = (e) => {
    if (e.key === "Enter") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data)
        })
    }
  }

  return (
    <div className="App">
      <div className="App-container">
        <h1 className="App-header">WEATHER APP</h1>
        <input type="text" value={city} placeholder="Enter your city ..." onChange={(e) => setCity(e.target.value)} onKeyPress={handle} />
        {typeof weatherData.main === "undefined" ? (
          <div></div>
        ) : (
          <section className="App-result-container">
            <h3>{weatherData.name}</h3>
            <p className="deg-main">{(Math.round(weatherData.main.temp) - 273.15).toFixed(2)}&#8451;</p>
            <p className="describe">{weatherData.weather[0].main}</p>
          </section>
        )}
      </div>
    </div>
  )
}

export default App
