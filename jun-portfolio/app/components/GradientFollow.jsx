"use client"
import { useState, useEffect } from "react";

export default function GradientFollow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 166, 0, 0.07), transparent 30%)`,
        transition: "background 0.1s ease-out",
      }}
    />
  );
}
