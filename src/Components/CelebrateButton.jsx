import React from "react";
import "./styles/CelebrateButton.css";

export default function CelebrateButton({ onCelebrate }) {
  return (
    <button className="celebrate-btn" onClick={onCelebrate}>
      🎊 Celebrate! 🎊
    </button>
  );
}
