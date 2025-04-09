"use client";

import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleClick = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      const isNavItem =
        tagName === "a" || tagName === "button" || e.target.closest("nav");

      if (isNavItem && cursorRef.current) {
        cursorRef.current.classList.add("cursor-clicked");

        setTimeout(() => {
          cursorRef.current?.classList.remove("cursor-clicked");
        }, 300); // effect duration
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
