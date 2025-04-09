import {
  Brain,
  Building2,
  BarChart2,
  Cable,
  Server,
  Handshake,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-First Engineering',
    description: 'We infuse artificial intelligence into the core of every solution — enabling smarter automation, intelligent insights, and adaptive systems.',
  },
  {
    icon: Building2,
    title: 'Enterprise-Ready Solutions',
    description: 'Our platforms are built for scale, performance, and security — designed to meet the demands of growing businesses and complex operations.',
  },
  {
    icon: BarChart2,
    title: 'Data-Driven Approach',
    description: 'We turn raw data into actionable intelligence, helping you make informed decisions, optimize processes, and predict outcomes.',
  },
  {
    icon: Cable,
    title: 'Seamless System Integration',
    description: 'We connect your entire digital ecosystem with robust APIs, middleware, and custom integrations for streamlined operations.',
  },
  {
    icon: Server,
    title: 'Agile & Transparent Delivery',
    description: 'From sprint planning to deployment, we ensure fast iterations, continuous feedback, and full project visibility at every stage.',
  },
  {
    icon: Handshake,
    title: 'Client-Centric Partnership',
    description: 'We go beyond just project delivery — we collaborate closely, understand your vision, and stay invested in your long-term success.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-6 md:px-10">
      <h2 className="text-4xl font-bold text-center text-[#00ffc2] mb-10">
        Why Choose MaverickIgnite Solutions LLP?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-[#1a1a2e]/40 p-6 rounded-xl border border-[#00ffc2]/20 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-[0_0_25px_#00ffc2] hover:scale-105 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon size={32} className="text-[#00ffc2] group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white group-hover:font-bold">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
