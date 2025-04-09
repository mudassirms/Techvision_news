"use client";

import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={32}
      color="0, 255, 194"
      outerAlpha={0.4}
      innerScale={1}
      outerScale={2}
      trailingSpeed={6}
      clickables={[
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "label",
        ".cursor-hover",
        "svg",
        "i"
      ]}
    />
  );
};

export default CustomCursor;
