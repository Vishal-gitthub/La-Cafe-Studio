import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="absolute inset-0 w-full h-full loader-container">
      <div className="loader"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}
