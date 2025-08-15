import React, { useState } from "react";
import "./styles/EntryScreen.css"

export default function EntryScreen({ onEnterCard, onEnterGallery }) {
  const [view] = useState("main"); // main | gallery



  return (
    <div className="entry-screen" >
      {view === "main" && (
        <>
      
        <div className="magic">
          <h1>💙🌹 Sending you all my love on your special day.🎉🦋🧿</h1>
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
