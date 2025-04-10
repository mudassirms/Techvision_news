"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const bulletItems = [
    {
      title: "Need intelligent software?",
      desc: "We build AI-powered, web-based enterprise applications that are secure, scalable, and smart.",
    },
    {
      title: "Want to integrate AI?",
      desc: "We embed machine learning models and intelligent automation into your workflows to drive smarter decisions.",
    },
    {
      title: "Looking to automate processes?",
      desc: "We streamline operations with smart tools that reduce manual effort and improve efficiency.",
    },
    {
      title: "Struggling with data overload?",
      desc: "We architect big data pipelines and cloud-native systems that turn complex data into actionable insights.",
    },
  ];

  return (
    <section id="about" className="px-6 sm:px-10 pt-16 pb-8 scroll-mt-24">
      {/* Main Card */}
      <div className="w-full bg-[#1a1a2e]/40 p-6 rounded-2xl shadow-xl backdrop-blur border border-[#00ffc2]/20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-[#00ffc2] text-center"
        >
          Who We Are?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
        >
          𝗠𝗮𝘃𝗲𝗿𝗶𝗰𝗸𝗜𝗴𝗻𝗶𝘁𝗲 𝗦𝗼𝗹𝘂𝘁𝗶𝗼𝗻𝘀 𝗟𝗟𝗣 is a forward-thinking, AI-first technology company dedicated to building intelligent software solutions that empower businesses to thrive in the digital era. We specialize in 𝗔𝗜-𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁, 𝗔𝗜 𝗶𝗻𝘁𝗲𝗴𝗿𝗮𝘁𝗶𝗼𝗻, 𝗲𝗻𝘁𝗲𝗿𝗽𝗿𝗶𝘀𝗲 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲, 𝗮𝗻𝗱 𝘀𝗺𝗮𝗿𝘁 𝗱𝗮𝘁𝗮 𝗶𝗻𝗳𝗿𝗮𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲 that fuel innovation, accelerate growth, and streamline operations.
        </motion.p>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[{
            title: "Our Vision",
            content: [
              "To become a global leader in intelligent software innovation — enabling companies of all sizes to embrace the power of AI, enterprise software engineering, and data-driven decision making through seamless integration, automation, and digital transformation."
            ]
          },
          {
            title: "Our Mission",
            content: [
              "To empower businesses through AI-driven software development, enterprise-grade solutions, and modern data engineering.",
              "We aim to simplify complexity, automate with purpose, and deliver high-impact digital solutions that fuel innovation, scalability, and long-term growth."
            ]
          }].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-[#0b1628] p-6 rounded-xl border border-[#00ffc2]/20 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-[#00ffc2] mb-4">
                {section.title}
              </h3>
              <ul className="text-gray-100 list-inside space-y-3">
                {section.content.map((point, idx) => (
                  <li key={idx}>
                    <span className="text-white font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-xl md:text-2xl text-white my-10 px-2"
        >
          At MaverickIgnite, we don’t just build software — we engineer possibilities. Our team is driven by curiosity, collaboration, and a deep belief in the transformative power of technology.
        </motion.div>
      </div>

      {/* How We Help */}
      <div className="w-full mt-12 bg-[#1a1a2e]/40 p-6 rounded-2xl shadow-xl backdrop-blur border border-[#00ffc2]/20">
        <h3 className="text-2xl font-bold text-[#00ffc2] mb-6">How We Help Businesses</h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-left text-xl md:text-2xl text-white mb-6 leading-relaxed"
        >
          At 𝗠𝗮𝘃𝗲𝗿𝗶𝗰𝗸𝗜𝗴𝗻𝗶𝘁𝗲, AI is at the core of everything we build. We empower businesses to innovate, automate, and scale through intelligent software solutions tailored to real-world challenges.
        </motion.p>

        <ul className="space-y-8">
          {bulletItems.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <p className="text-white font-semibold text-lg">{item.title}</p>
              <p className="text-gray-300 mt-1 ml-4">{item.desc}</p>
            </motion.li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="mt-16 text-center">
          <p className="text-gray-100 text-lg">
            Ready to make your business <span className="text-cyan-400">AI-ready</span>?<br />
            Let’s build the future together.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 text-sm text-black bg-cyan-400 hover:bg-cyan-300 font-medium rounded-xl shadow-lg shadow-cyan-500/40 transition duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.94 6.94a1.5 1.5 0 012.12 0l3.13 3.13 6.6-6.6a1.5 1.5 0 112.12 2.12l-7.66 7.66a1.5 1.5 0 01-2.12 0L2.94 9.06a1.5 1.5 0 010-2.12z" />
              </svg>
              Contact Us
            </a>
            <a
              href="#services"
              className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-900 transition"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
