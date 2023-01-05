import React from "react";


export default function Card() {
  
  return (
    <div className="card--container">
      <div className="card--img-container"><img src="https://source.unsplash.com/WLxQvbMyfas" alt="" className="card--img" /></div>
      <div className="card-text--container">
        <div className="card-text--header">
          <span className="card-location-icon"><i className="fa-solid fa-location-dot"></i></span>
          <span className="card-location-text">Japan</span>
          <span className="card-location-map">
            <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
          </span>
        </div>
        <h1 className="card--text-title">Mount Fuji</h1>
        <p className="card--text-date">12 Jan, 2021-24 Jan, 2021</p>
        <p className="card--text-desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
    </div>
  );
}