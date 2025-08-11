import React from "react";
import { motion } from "framer-motion";
import "./styles/TitleSection.css";

export default function TitleSection() {
  return (
    <motion.div
      className="title-section"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>🎉 Happy 24th Birthday Pragati! 🎉</h1>
      <p>Wishing you endless joy, love, and happiness on your special day!</p>
    </motion.div>
  );
}
