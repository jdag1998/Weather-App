import React from "react";
import Spinner from "./Spinner";

export default function Card({loadingData, showData , weather, forecast}) {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year

    if(loadingData){
        return <Spinner />
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
                                  <img src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">

                                    </div>

                                    </div>

                            </div>
          
                        </div>
                    </div>
                    
                    
                ):(
                    <h2 className ="text-light">No data to Shown </h2>
                )
            }

        </div>
    )
}