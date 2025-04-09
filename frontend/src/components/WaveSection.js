"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WaveSection() {
  useEffect(() => {
    gsap.fromTo(
      ".wave-path",
      { y: 120 },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".wave-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="wave-section relative z-0 -mt-9">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[100px] sm:h-[160px] md:h-[100px]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00ffc2" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00fff7" stopOpacity="-0.2" />
          </linearGradient>
        </defs>
        <path
          className="wave-path"
          fill="url(#waveGradient)"
          d="M0,256L40,229.3C80,203,160,149,240,149.3C320,149,400,203,480,224C560,245,640,235,720,197.3C800,160,880,96,960,96C1040,96,1120,160,1200,186.7C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </div>
  );
}
