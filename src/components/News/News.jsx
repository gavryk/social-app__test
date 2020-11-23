import React, {useState} from "react";
import './News.scss'

const weatherAPI = {
    key: 'dd40eac9b9329dce339a51ed5b06eef9',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const News = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === 'Enter') {
            fetch(`${weatherAPI.base}weather?q=${query}&units=metric&APPID=${weatherAPI.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result)
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${month} ${date}, ${day}, ${year}`
    }

    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Weather</h1>
            <div className={
                (typeof weather.main !== 'undefined' && typeof weather.weather !== 'undefined')
                    ? ((weather.main.temp >= 16)
                        ? `weather-container warm ${weather.weather[0].main.toLowerCase()}`
                        : `weather-container ${weather.weather[0].main.toLowerCase()}`)
                    : 'weather-container'
                }>
                <div className="search-box">
                    <input
                        type="text"
                        className='search-bar border-0'
                        placeholder='Search...'
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {
                    typeof weather.main !== 'undefined'
                        ? <div>
                            <div className="location-box">
                                <div className="location">
                                    <h2>{weather.name}, {weather.sys.country}</h2>
                                </div>
                                <div className="date">{dateBuilder(new Date())}</div>
                            </div>
                            <div className="weather-box">
                                <div className="temp">
                                    {Math.round(weather.main.temp)}°c
                                </div>
                                <div className="weather">
                                    {weather.weather[0].main},
                                </div>
                            </div>
                        </div>
                        : ('')}
            </div>
        </div>
    )
}

export default News;