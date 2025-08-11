import React from "react";
import BalloonsBackground from "./BalloonsBackground";
import CakeImage from "./CakeImage";
import FireworksCanvas from "./FireworksCanvas";
import BackgroundMusic from "./BackgroundMusic";
import "./styles/BirthdayCard.css";
import TitleSection from "./TitleSection";
import WishBox from "./WishBox";

export default function BirthdayCard() {
  return (
    <div className="birthday-card">
        <TitleSection/>
      <BalloonsBackground />
      <FireworksCanvas fire={true} />
      <BackgroundMusic play={true} />
      <CakeImage />
      <WishBox/>
    </div>
  );
}
