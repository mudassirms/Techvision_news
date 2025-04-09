'use client';

import Link from 'next/link';

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-20 relative">
      <div className="max-w-5xl mx-auto">
        {/* Top Heading and Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-4xl font-bold text-accent mb-4 sm:mb-0">Our Culture</h1>
        </div>

        {/* Intro Text */}
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          At <span className="text-accent font-semibold">Maverick Ignite</span>, our culture is built on innovation, collaboration, and a passion for pushing boundaries. 
          We believe in creating an environment where everyone is empowered to think boldly, act fearlessly, and grow endlessly.
        </p>

        {/* Culture Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-md">
            <h3 className="text-2xl font-semibold text-accent mb-2">Innovation First</h3>
            <p className="text-gray-300">
              We encourage new ideas, support experimentation, and embrace creative problem-solving at every level.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-md">
            <h3 className="text-2xl font-semibold text-accent mb-2">Teamwork That Matters</h3>
            <p className="text-gray-300">
              Collaboration is in our DNA — we grow stronger by working together, respecting differences, and building each other up.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-md">
            <h3 className="text-2xl font-semibold text-accent mb-2">Continuous Growth</h3>
            <p className="text-gray-300">
              From mentorship to training, we provide endless opportunities for learning and professional development.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-md">
            <h3 className="text-2xl font-semibold text-accent mb-2">Empowered Work Culture</h3>
            <p className="text-gray-300">
              You have the autonomy to lead, decide, and create impact from day one. We trust our people and their potential.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Home Button */}
      <Link href="/">
        <span className="fixed bottom-6 right-6 bg-primary text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold">
          ⬅ Home
        </span>
      </Link>
    </div>
  );
}
