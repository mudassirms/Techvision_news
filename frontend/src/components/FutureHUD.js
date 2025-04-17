"use client";
import React, { useEffect, useRef } from "react";

const FuturisticHudBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 400);

    const rings = [];
    const dots = [];
    const beams = [];
    const matrixCols = Math.floor(width / 20);
    const matrix = new Array(matrixCols).fill(0);

    const createElements = () => {
      for (let i = 0; i < 50; i++) {
        rings.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 30 + 15,
          rotation: Math.random() * Math.PI * 2,
          speed: (Math.random() - 0.5) * 0.01,
        });
      }

      for (let i = 0; i < 30; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          pulse: 0,
          speed: Math.random() * 0.05 + 0.02,
        });
      }

      for (let i = 0; i < 3; i++) {
        beams.push({
          x: Math.random() * width,
          speed: 0.5 + Math.random(),
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Matrix background
      ctx.font = "14px monospace";
      ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
      for (let i = 0; i < matrix.length; i++) {
        const char = String.fromCharCode(0x30a0 + Math.random() * 96);
        const x = i * 20;
        const y = matrix[i] * 20;

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          matrix[i] = 0;
        } else {
          matrix[i]++;
        }
      }

      // Beams
      beams.forEach((beam) => {
        ctx.beginPath();
        ctx.moveTo(beam.x, 0);
        ctx.lineTo(beam.x, height);
        ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
        beam.x += beam.speed;
        if (beam.x > width) beam.x = 0;
      });

      // Rings
      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(ring.x, ring.y);
        ctx.rotate(ring.rotation);

        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 255, 255, 0.3)";
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "cyan";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-ring.r, 0);
        ctx.lineTo(ring.r, 0);
        ctx.moveTo(0, -ring.r);
        ctx.lineTo(0, ring.r);
        ctx.strokeStyle = "rgba(255, 0, 180, 0.3)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ring.rotation += ring.speed;
        ctx.restore();
      });

      // Dots
      dots.forEach((dot) => {
        dot.pulse += dot.speed;
        const alpha = 0.5 + Math.sin(dot.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2 + Math.sin(dot.pulse) * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 255, ${alpha})`;
        ctx.shadowColor = "magenta";
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    createElements();
    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 400;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[400px] z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default FuturisticHudBackground;
