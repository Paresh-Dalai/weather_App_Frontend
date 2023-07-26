

import React, { useEffect, useState } from "react";
import "./Weather.css";
import { getInfo } from "./getApi";


function Weather () {
     
     const [location , setLocation] = useState("Bhubaneswar")
     const [weatherData , setWeatherData] = useState("")

     useEffect (() => {
         const fetchApi = async ()=>{
            //  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${searchForCity}&units=metric&appid=6f5b32626e889a442f05abbd186d98ab`
            // const URL = `http://127.0.0.1:5780/weather/weatherInfo${searchForCity}`
            //  let getdata = await axios.get(URL);
            //  const resData = await getdata.json();
            //  console.log(resData);
            // let cityData =  setCity(resData.data)
            // console.log(cityData);
              try {
                 await getInfo(location)
                 .then((res) =>{ 
                  setWeatherData(res)
                  console.log(res)
                })
                 
              } catch (error) {
                  console.log(error.message)
              }
          }
         fetchApi()
     },[location])

     return (
        <>
         
         <div className="Main_Box">

            <div className="first_section">
                <h2>You can able know the weather condition of a particular location by just following simple steps :</h2>
                <hr/>
                  <div className="points">
                   <h3> * Search Your City Name</h3>
                   <h3> * Weather Report Of Your city will appear in right side container.</h3>
                   <h3> * Also you can able to get The Humidity status of your city..</h3>
                 </div>
            </div>

            <div className="second_section">

              <div className="weather_container">

               
                <h1 id="heading">Weather Report</h1>
                <hr/>    
                <div className="input">
                     <input className="search_input" type="search" onChange={ (event) => setLocation(event.target.value )}/>

         
                     
                </div>    

                  {!weatherData ? (<p style={{color:"beige"}}>No Data Found </p>) : (

                        <div>
                 <div className="city_container">
                  
                   <div className="city">
                        <h1> {location}</h1> 
                    </div>
                  </div>
                  <div className="Informations">
                  <div className="temp">
                      <h2>Temperature</h2>
                      <hr/>
                      <h1>{weatherData.temperature}°C</h1> 
                 </div>
                 <div className="humidity">
                 <h2>Humidity</h2>
                      <hr/>
                 <h1>{weatherData.humidity}%</h1> 
                 </div>
                 <div className="weather">
                    <h2>Weather</h2>
                    <hr/>
                    <h1>{weatherData.weather}</h1>
                    {/* <img src="https://st5.depositphotos.com/76122098/63675/i/450/depositphotos_636756330-stock-photo-glowing-neon-line-location-icon.jpg"></img> */}
                    {/* <img src="data:image/jpeg;base64,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"/> */}
                  </div>
                  </div>
                  <div className="min_max"> <h3> {weatherData.temp_min} </h3>  </div>
                        </div>
                  )}           
                
              </div>
            </div>

         </div>
          
        </>
     )


  // const [location, setLocation] = useState('Cuttack');
  // const [weatherData, setWeatherData] = useState(null);

  // const fetchWeatherData = async () => {
  //   try {
      
  //      await getInfo(location)
  //     .then((res) => {
  //       setWeatherData(res)
  //       console.log(res);
  //     });
      
  //   } catch (error) {
  //     console.log(error.message);
  //     setWeatherData(null);
  //   }
  // };

  // const handleInputChange = (e) => {
  //   setLocation(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetchWeatherData();
  // };

  // return (
  //   <div>
  //     <h1>Weather App</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         value={location}
  //         onChange={handleInputChange}
  //         placeholder="Enter location"
  //       />
  //       <button type="submit">Get Weather</button>
  //     </form>
  //     {weatherData && (
  //       <div>
  //         <h2>Weather for {weatherData.location}</h2>
  //         <p>Weather: {weatherData.weather}</p>
  //         <p>Temperature: {weatherData.temperature}°C</p>
  //         <p>Humidity: {weatherData.humidity}%</p>
  //       </div>
  //     )}
  //   </div>
  // );
};



export default Weather;