import React from "react";
import "./styles/PhotoGallery.css";

// Import images from src/assets
import img1 from "../assets/photo1.jpg";
import img2 from "../assets/photo2.jpg";
import img3 from "../assets/photo3.jpg";
import img4 from "../assets/photo4.jpg";
import img5 from "../assets/future-HOPE.jpg"

const images = [
  { src: img1, caption: "Best Moments" },
  { src: img2, caption: "Special Day" },
  { src: img3, caption: "Laughs & Love" },
  { src: img4, caption: "Forever Memories" },
  {src: img5, caption: "clg Senior"}
];

export default function PhotoGallery() {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div
          key={index}
          className="polaroid"
          style={{ "--rotation": `${index % 2 === 0 ? 3 : -3}deg` }}
        >
          <img src={img.src} alt={img.caption} />
          <div
            className="caption"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              padding: "10px 15px", // just enough padding around text
              flex: 1, // fill remaining horizontal space
              display: "flex",
              alignItems: "center", // center vertically
              justifyContent: "center", // center horizontally
            }}
          >
            {img.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
