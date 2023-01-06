/* eslint-disable react/prop-types */
import React from "react";


export default function Card(props) {
  console.log(props);
  return (
    <div className="card--container">
      <div className="card--img-container">
        <img src={`${props.card.imageUrl}`} alt="" className="card--img" />
      </div>
      <div className="card-text--container">
        <div className="card-text--header">
          <span className="card-location-icon"><i className="fa-solid fa-location-dot"></i></span>
          <span className="card-location-text">{props.card.location}</span>
          <span className="card-location-map">
            <a href={`${props.card.googleMapsUrl}`}>View on Google Maps</a>
          </span>
        </div>
        <h1 className="card--text-title">{props.card.title}</h1>
        <p className="card--text-date">{props.card.startDate} - {props.card.endDate}</p>
        <p className="card--text-desc">{props.card.description}</p>
      </div>
    </div>
  );
}