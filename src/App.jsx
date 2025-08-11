import React, { useState } from "react";
import FireworksCanvas from "./Components/FireworksCanvas";
import BackgroundMusic from "./Components/BackgroundMusic";
import CelebrateButton from "./Components/CelebrateButton";
import EntryScreen from "./Components/EntryScreen";
import BirthdayCard from "./Components/BirthdayCard";
import PhotoGallery from "./Components/PhotoGallery"; // create this component
import "./App.css";

export default function App() {
  const [view, setView] = useState("entry"); // entry | card | gallery
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handleCelebrate = () => {
    if (isCelebrating) return;
    setIsCelebrating(true);
    setMusicPlaying(true);
    setTimeout(() => setIsCelebrating(false), 5000);
  };

  return (
    <>
      {view === "entry" && (
        <EntryScreen
          onEnterCard={() => setView("card")}
          onEnterGallery={() => setView("gallery")}
        />
      )}

      {view === "card" && (
        <div className="app">
          <button className="back-btn" onClick={() => setView("entry")}>
            ⬅ Back
          </button>
          <BirthdayCard />
          <BackgroundMusic play={musicPlaying} />
          <FireworksCanvas fire={isCelebrating} />
        </div>
      )}

      {view === "gallery" && (
        <div className="app">
          <button className="back-btn" onClick={() => setView("entry")}>
            ⬅ Back
          </button>
          <PhotoGallery />
        </div>
      )}
    </>
  );
}
