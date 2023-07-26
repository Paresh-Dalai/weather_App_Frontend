
import axios from "axios";
const BASE_URL = "https://weather-app-backend-aroj.onrender.com";

export async function getInfo (location) {
    
    try {
        const weatherInfo = await axios.get(`${BASE_URL}/weather/weatherInfo/${location}`);
        const getData = weatherInfo.data;
        console.log(getData.name)
        console.log(getData);
        return getData;

    } catch (error){
         console.log(error.message);

    }
    
     
}

