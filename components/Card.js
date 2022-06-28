import React from 'react'

export default function Card(props) {
    return (
        <div className='container container-width border'>
            <div className='img-container'>
                <img src={props.imageUrl} className='image'/>
            </div>
            <div className="container-text">
                <div className="container ">
                    <img width="9px" src="images/placeholder.png"/>
                    <h2>{props.location}</h2>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="container">
                    <h1>{props.title}</h1>
                </div>
                <div className="container">
                    <span>{props.startDate} - {props.endDate}</span>
                </div>
                <div className="container">
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}