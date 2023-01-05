import React from "react";

export default function Header() {
  
  return (
    <header className="header--container">
      <div className="header--icon">
        <i className="fa-solid fa-earth-americas"></i>
      </div>
      <div>
        <h3 className="header--title">my travel journal.</h3>
      </div>
    </header>
  );
}