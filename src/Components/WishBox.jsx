import React, { useState } from "react";
import "./styles/WishBox.css";

export default function WishBox() {
  const [wish, setWish] = useState("");
  const [submittedWishes, setSubmittedWishes] = useState([]);

  const handleSubmit = () => {
    if (wish.trim()) {
      setSubmittedWishes([...submittedWishes, wish]);
      setWish("");
    }
  };

  return (
    <div className="wish-box">
      <textarea
        placeholder="Write your wish here..."
        value={wish}
        onChange={(e) => setWish(e.target.value)}
      />
      <button onClick={handleSubmit}>Send Wish 💌</button>

      <div className="wish-list">
        {submittedWishes.map((w, i) => (
          <p key={i}>💖 {w}</p>
        ))}
      </div>
    </div>
  );
}
