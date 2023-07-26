



import React, { useEffect, useState } from "react";
import "./weatherApp_Two.css";
import { getInfo } from "./getApi";


function Weather () {
     
     const [location , setLocation] = useState("Bhubaneswar")
     const [weatherData , setWeatherData] = useState("")

     useEffect (() => {
         const fetchApi = async ()=>{
          
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
<div className="top_header">
   <span>
      
   <h1 className="heading"> Weather App </h1>
   </span>
  <span>
    {!weatherData ? (<p>location not found.</p>) : (
  
   <h3 className="locations"> <img src="https://cdn3.iconfinder.com/data/icons/travel-emoji/50/LocationPin-256.png"></img> {weatherData.location}</h3>
    )}
   
   </span>
    
</div>

         
          <div className="Total_Page">
             
             <div className="first_container">

                {!weatherData ? (<p>No Data Found</p>) : (
 
                                    <>
                                    <div className="temp">
                                    <h2>Temperature</h2>
                                    <hr/>
                                     <h3>{weatherData.temperature}°C</h3> 
                                    </div>

                                    <div className="visibility">
                                    <h2>visibility</h2>
                                           <hr/>
                                    <h3>{weatherData.visibility} mtrs</h3> 
                                       </div>

                                <div className="feels_like">
                                <h2>Feels_like</h2>
                                    <hr/>
                               <h3>{weatherData.feels_like}°C</h3> 
                                      </div>
                                    </>
                ) }

                     


             </div>

             <div className="second_container">

            
                <hr/>    
                <div className="input">
                     <input className="search_input" type="search" placeholder="Search Your City Here..." onChange={ (event) => setLocation(event.target.value )}/>

                </div>    


             </div>

             <div className="third_container">

                {!weatherData ? (<p>No Data Found</p>) : (

                      <>
                      <div className="data">

                      
                      <div className="humidity">
                     <h2>Humidity</h2>
                      <hr/>
                      <h3>{weatherData.humidity}%</h3> 
                     </div>

                     <div className="weather_part">
                     <h2>Weather</h2>
                      <hr/>
                      <h3>{weatherData.weather}</h3> 
                     </div>

                     <div className="country">
                     <h2>country_code</h2>
                      <hr/>
                      <h3>{weatherData.country_code}</h3> 
                     </div>

                     </div>
                      
                      </>


           
                )}

                   

                

             </div>
          </div>
          
        </>
     )


};



export default Weather;