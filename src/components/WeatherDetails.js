import React,{ useState, useEffect } from 'react';

const WeatherDetails = (
    {temp, 
    humidity, 
    pressure, 
    weatherType,
    name,
    speed,
    country,
    sunset}) => {
    const [weatherState, setWeatherState] = useState ("");

    useEffect(() =>{
console.log();
        if (weatherType){
            switch(weatherType) {
            case "Clouds":
                setWeatherState("wi-day-cloudy");
                break;
            case "Haze":
                setWeatherState("wi-fog");
                break;
            case "clear":
                setWeatherState("wi-day-sunny");
                break;
            case "Mist":
                setWeatherState("wi-dust");
                break;
            case "Rain":
                setWeatherState("wi-day-rain");
                break;
            default:
                setWeatherState("wi-day-sunny");
                break;
            }
        }

    },[weatherType]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return <div>
      <article className="widget">
          <div className="weatherIcon">
              <i className={`wi ${weatherState}`}></i>
          </div>
          <div className="weatherInfo">
              <div className="temperature">
                  <span>{temp}&deg;</span>
              </div>
              <div className="description">
                  <div className="weatherCondition">{weatherType}</div>
                  <div className="palce">{name}, {country}</div>
              </div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
          <div className="extra-temp">
              <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {timeStr} PM <br />
                        Sunset
                    </p>
                </div>
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {humidity} <br />
                        humidity
                    </p>
                </div>
               </div>
            
            <div className="weather-extra-info">
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-rain"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {pressure} <br />
                        Pressure
                    </p>
                </div>
                
                  <div className="temp-info-minmax">
                  <div className="two-sided-section">
                      <p>
                          <i className={"wi wi-strong-wind"}></i>
                      </p>
                      <p className="extra-info-leftside">
                          {speed} <br />
                          Speed
                      </p>
                  </div>
              </div>
          </div>
          </div>
      </article>
  </div>;
};

export default WeatherDetails;
