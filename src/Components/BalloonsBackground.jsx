import React from "react";
import "./styles/BalloonsBackground.css";

export default function BalloonsBackground() {
  const balloons = Array.from({ length: 12 }); // number of balloons

  return (
    <div className="balloon-container">
      {balloons.map((_, i) => (
        <div key={i} className={`balloon balloon-${(i % 6) + 1}`}></div>
      ))}
    </div>
  );
}
