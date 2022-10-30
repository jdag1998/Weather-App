import React, {useState} from 'react'
import Form from './components/Form';


export default function Form() {

    let url ="https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=895284fb2d2c50a520ea537456963d9c"
    let cityUrl = "&q="

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=895284fb2d2c50a520ea537456963d9c"

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {

        setLoading(true);
        setLocation(loc);

        //weather 
        urlWeather = urlWeather + city + loc;

        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
            
            return response.json();
        }).then((weatherData) => {
           console.log(weatherData);
           setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);

        })

        //Forecast
        urlForecast = urlForecast + city + loc;


        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            
            return response.json();
        }).then((forecastData) => {
           console.log(forecastData);
           setForecast(forecastData);

           setLoading(false);
           setShow(true);


        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);

        })

    }
    return ( 
       <React.Fragment>
        <Form 
            newLocation = {getLocation}

        />


       </React.Fragment>
    )
}