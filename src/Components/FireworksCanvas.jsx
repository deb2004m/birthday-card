// FireworksCanvas.jsx
import React, { useEffect, useRef } from "react";

export default function FireworksCanvas({ fire }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!fire) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 4 + 2;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * -4 - 2;
        this.gravity = 0.05;
        this.alpha = 1;
        this.decay = 0.015;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.gravity;
        this.alpha -= this.decay;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function createFirework(x, y) {
      const colors = ["#ff0043", "#14ffec", "#ffe700", "#ff7f00"];
      for (let i = 0; i < 40; i++) {
        particles.push(
          new Particle(
            x,
            y,
            colors[Math.floor(Math.random() * colors.length)]
          )
        );
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Create fireworks every 500ms for 5 seconds
    let count = 0;
    const interval = setInterval(() => {
      createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.5
      );
      count++;
      if (count > 10) clearInterval(interval);
    }, 500);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, [fire]);

  return (
    fire && (
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    )
  );
}
