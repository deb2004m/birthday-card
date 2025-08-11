import React, { useState } from "react";
import cover from "../assets/cover.jpg";
import PhotoGallery from "./PhotoGallery";
import "./styles/EntryScreen.css"

export default function EntryScreen({ onEnterCard, onEnterGallery }) {
  const [view, setView] = useState("main"); // main | gallery



  return (
    <div className="entry-screen" >
      {view === "main" && (
        <>
      
        <div className="magic">
          <h1>💙🌹 Sending you all my love on your special day to the most Beautiful Girl, my Senior🎉🦋🧿</h1>
          <button onClick={onEnterCard}>Open Birthday Card</button>
          <button onClick={onEnterGallery} style={{ margin: "35px" }}>
            Show Magic ✨
          </button>
          </div>
        </>
      )}
    </div>
  );
}
