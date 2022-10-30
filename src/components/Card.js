import React from "react";
import Spinner from "./Spinner";

export default function Card({loadingData, showData , weather, forecast}) {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year

    let url = ""
    let iconUrl = ""
    if(loadingData){
        return <Spinner />
    }
    if(showData){
        url = 'http://openweathermap.org/img/w/'
        iconUrl = url + weather.weather[0].icon + ".png"
    }

    return(
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                        
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{((weather.main.temp-273.15)*9/5+32).toFixed(1)}°F</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description} </p>
                                    <div className="img">
                                  <img src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="..."  />
                                  </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text"> Max Temperature: {((weather.main.temp_max-273.15)*9/5+32).toFixed(1)}°F</h5>
                                        <h5 className="card-text"> Min Temperature: {((weather.main.temp_min-273.15)*9/5+32).toFixed(1)}°F</h5>
                                        <h5 className="card-text"> Feels Like: {((weather.main.feels_like-273.15)*9/5+32).toFixed(1)}°F</h5>
                                        <h5 className="card-text"> Humidity: {weather.main.humidity}%</h5>
                                        

                                    </div>

                                    </div>

                            </div>
          
                        </div>
                    </div>
                    
                    
                ):(
                    <h2 className ="text-light">Please Enter a City </h2>
                )
            }

        </div>
    )
}