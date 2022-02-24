import React, {useEffect, useState} from 'react';
import "../components/style.css"
import WeatherDetails from './WeatherDetails';

const SearchMain = () => { 
    const[searchTerm, setSearchTeam] =  useState ("mumbai");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async() =>{
      try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=5636c136669f1954381b27f95c3b0e35`;
        let res = await fetch(url);
        let data = await res.json();
        const {temp, humidity,pressure} = data.main;
        const {main: weatherType} = data.weather[0];
        const {name} = data;
        const {speed} = data.wind;
        const {country, sunset} = data.sys;

        const myNewWeatherInfo = {
          temp, 
          humidity, 
          pressure, 
          weatherType,
          name,
          speed,
          country,
          sunset,
        };
        setTempInfo(myNewWeatherInfo);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
     
useEffect (() => {
  getWeatherInfo()
}, [])

  return <div>
      <div className="wrap">
        <div className="search">
            <input type="search" placeholder="Search city.." id="search" value={searchTerm} onChange={(e) => setSearchTeam(e.target.value)} />
        <button className="searchButton" onClick={getWeatherInfo}>Search</button>
        </div>
    </div>
    <br />
    <WeatherDetails {...tempInfo} />
  </div>
};
 
export default SearchMain;