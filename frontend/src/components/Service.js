"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const servicesData = [
  {
    id: "ai",
    title: "AI Software Development",
    short: "Smarter systems with ML/AI.",
    long: "Integrate machine learning models and AI capabilities to automate processes, make predictions, and build intelligent applications tailored to your needs.",
  },
  {
    id: "data",
    title: "Data Management",
    short: "Scalable & secure cloud systems.",
    long: "We build robust cloud-native apps, data lakes, time-series DBs, and handle secure cloud deployments for efficient data storage and analysis.",
  },
  {
    id: "integration",
    title: "System Integration",
    short: "Tailored web & enterprise solutions.",
    long: "We design and develop scalable web applications, enterprise-grade software, and backend systems using modern tech stacks like Java, Spring Boot, React, and more.",
  },
  {
    id: "consulting",
    title: "AI Consulting",
    short: "Expert guidance for AI adoption.",
    long: "We offer AI strategy, model evaluation, and implementation planning to help you seamlessly integrate AI into your operations.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div id="services" className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, idx) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.short}</p>
              </div>
              <ChevronDown
                className={`ml-2 text-white transition-transform duration-300 ${
                  activeIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <div
              className={`text-gray-300 text-sm overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === idx
                  ? "max-h-96 mt-4 border-t pt-4 border-gray-600 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {service.long}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
