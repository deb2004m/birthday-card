import React, { useState } from "react";
import { motion } from "framer-motion";
import cakeNormal from "../assets/cake.png";
import cakeCut from "../assets/cakeCut.png";
import "./styles/CakeImage.css";

export default function CakeImage() {
  const [isCut, setIsCut] = useState(false);

  const handleCakeClick = () => {
    setIsCut(true);
    // setTimeout(() => setIsCut(false), 300);
  };
  return (
    <div className="cake-container">
    <motion.img
      src={isCut ? cakeCut : cakeNormal}
      alt="Birthday Cake"
      className="cake-image"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onClick={handleCakeClick}
      // transition={{ type: "spring", stiffness: 120 }}
    />
    <div className="middle">
    {!isCut && <p className="click-note">🎂 Cut the Cake!</p>}
    </div>
    </div>
  );
}
