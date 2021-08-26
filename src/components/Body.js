import {useEffect } from "react";
import {useMyContextHook} from "../context/CityContext";

function Body() {
  const api_key = "0c19f5142c89d2eefcbf8545c9dd03d0";
  const { city, weather, setWeather } = useMyContextHook();



    let dateArray = [];
    var curr = new Date(); 
    var first =curr.getDate(); 


    for(var i = 0; i<9; i++){
        var next = first + i;
        var nextday = (new Date(curr.setDate(next))).toString().slice(0,3);
        console.log(nextday)
        dateArray.push(nextday);
    }


  useEffect(() => {
    const getWeather = async () => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=current,minutely,hourly,alerts&appid=${api_key}`
      );

      const myresponse = await api_call.json();

      console.log(myresponse);

      setWeather(() => ({
        day0: myresponse.daily[0].weather[0].main,
        min0: Math.floor(myresponse.daily[0].temp.min),
        max0: Math.floor(myresponse.daily[0].temp.max),
        day1: myresponse.daily[1].weather[0].main,
        min1: Math.floor(myresponse.daily[1].temp.min),
        max1: Math.floor(myresponse.daily[1].temp.max),
        day2: myresponse.daily[2].weather[0].main,
        min2: Math.floor(myresponse.daily[2].temp.min),
        max2: Math.floor(myresponse.daily[2].temp.max),
        day3: myresponse.daily[3].weather[0].main,
        min3: Math.floor(myresponse.daily[3].temp.min),
        max3: Math.floor(myresponse.daily[3].temp.max),
        day4: myresponse.daily[4].weather[0].main,
        min4: Math.floor(myresponse.daily[4].temp.min),
        max4: Math.floor(myresponse.daily[4].temp.max),
        day5: myresponse.daily[5].weather[0].main,
        min5: Math.floor(myresponse.daily[5].temp.min),
        max5: Math.floor(myresponse.daily[5].temp.max),
        day6: myresponse.daily[6].weather[0].main,
        min6: Math.floor(myresponse.daily[6].temp.min),
        max6: Math.floor(myresponse.daily[6].temp.max),
        day7: myresponse.daily[7].weather[0].main,
        min7: Math.floor(myresponse.daily[7].temp.min),
        max7: Math.floor(myresponse.daily[7].temp.max),
      }));
    };
    getWeather();
    imgFunc();
  }, [city, setWeather]);

  //Hava Durumuna göre icon seçme
  const imgFunc = (myImg) => {
    switch (myImg) {
      case "Clear":
        return "http://openweathermap.org/img/wn/01d@2x.png";

      case "Rain":
        return "http://openweathermap.org/img/wn/09d@2x.png";

      case "Clouds":
        return "http://openweathermap.org/img/wn/02d@2x.png";

      case "Snow":
        return "http://openweathermap.org/img/wn/13d@2x.png";

      case "Drizzle":
        return "http://openweathermap.org/img/wn/09d@2x.png";

      case "Thunderstorm":
        return "http://openweathermap.org/img/wn/11d@2x.png";

      default:
        return "http://openweathermap.org/img/wn/01n@2x.png";
    }
  };

  return (
    <div className="weatherCards">
      <div className="dayWeatherCard first">
        <p>{ dateArray[0]}</p>
        <div>
          <img
            src={imgFunc(weather.day0)}
            alt=""
          />
        </div>
        <p>
          <span>Max: {weather.max0}&#176; </span>
          <span>Min: {weather.min0}&#176; </span>
        </p>
      </div>
      <div className="dayWeatherCard">
        <p>{dateArray[1]}</p>
        <div>
          <img
            src={imgFunc(weather.day1)}
            alt=""
          />
        </div>
        <p>
          <span>Max: {weather.max1}&#176; </span>
          <span>Min: {weather.min1}&#176; </span>
        </p>
      </div>
      <div className="dayWeatherCard">
        <p>{dateArray[2]}</p>
        <div>
          <img
            src={imgFunc(weather.day2)}
            alt=""
          />
        </div>
        <p>
          <span>Max: {weather.max2}&#176; </span>
          <span>Min: {weather.min2}&#176; </span>
        </p>
      </div>
      <div className="dayWeatherCard">
        <p>{dateArray[3]}</p>
        <div>
          <img
            src={imgFunc(weather.day3)}
            alt=""
          />
        </div>
        <p>
          <span>Max: {weather.max3}&#176; </span>
          <span>Min: {weather.min3}&#176; </span>
        </p>
      </div>
      <div className="dayWeatherCard">
        <p>{dateArray[4]}</p>
        <div>
          <img
            src={imgFunc(weather.day4)}
            alt=""
          />
        </div>
        <p>
          <span>Max: {weather.max4}&#176; </span>
          <span>Min: {weather.min4}&#176; </span>
        </p>
      </div>
      <div className="dayWeatherCard">
        <p>{dateArray[5]}</p>
        <div>
          <img
            src={imgFunc(weather.day5)}
            alt=""
          />
        </div>
        <p>
          <span>Max: {weather.max5}&#176; </span>
          <span>Min: {weather.min5}&#176; </span>
        </p>
      </div>
      <div className="dayWeatherCard">
        <p>{dateArray[6]}</p>
        <div>
          <img
            src={imgFunc(weather.day6)}
            alt=""
          />
        </div>
        <p>
          <span>Max: {weather.max6}&#176; </span>
          <span>Min: {weather.min6}&#176; </span>
          
        </p>
      </div>
      <div className="dayWeatherCard">
        <p>{dateArray[7]}</p>
        <div>
          <img
            src={imgFunc(weather.day7)}
            alt=""
          />
        </div>
        <p>
          <span>Max: {weather.max7}&#176; </span>
          <span>Min: {weather.min7}&#176; </span>
        </p>
      </div>
    </div>
  );
}

export default Body;