"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function FloatingParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1, // background layer
    },
    background: {
      color: {
        value: "#050d1b", // Dark techy blue
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // or "attract"
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: ["#00ffc2", "#00bfff", "#8a2be2"], // Neon cyan, electric blue, purple
      },
      links: {
        enable: true,
        color: "#00ffc2",
        distance: 120,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      number: {
        value: 55,
        density: {
          enable: true,
          area: 900,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      shape: {
        type: ["circle", "edge"], // adds subtle diversity
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
}
