import React from "react";
import Image from "next/image";

const NeuralNetworkDivider = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
  <Image
    src="/svg.png"
    alt="Neural Network Divider"
    fill
    className="object-cover opacity-40 mix-blend-lighten" // Or try 'screen', 'overlay'
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
</div>

  );
};

export default NeuralNetworkDivider;
