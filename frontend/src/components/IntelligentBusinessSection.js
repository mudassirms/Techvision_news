import { motion } from 'framer-motion';

const features = [
  {
    title: '🤖 AI That Thinks Ahead',
    description:
      'We craft intelligent, scalable AI solutions that automate, predict, and optimize — helping you stay steps ahead in a fast-changing world.',
  },
  {
    title: '🌐 Web Applications That Perform',
    description:
      'From sleek frontends to robust backends, we build responsive, secure, and scalable web applications tailored to your users and business goals.',
  },
  {
    title: '📊 Data Science That Delivers Insights',
    description:
      'Our data-driven solutions turn raw data into actionable insights — through analytics dashboards, predictive models, and custom data apps.',
  },
  {
    title: '🎨 Design That Speaks for Your Brand',
    description:
      'Our creative team brings ideas to life with compelling visuals — from branding and UI/UX to motion graphics and marketing content.',
  },
  {
    title: '💡 Innovation Meets Execution',
    description:
      'We don’t just dream big — we build smart. Our cross-functional approach ensures your project is both visionary and practical.',
  },
  {
    title: '🧩 Integrated, End-to-End Solutions',
    description:
      'Why juggle multiple vendors? With us, you get a unified team that blends tech, data, and design into one seamless experience.',
  },
];

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-6 md:px-10">
      <h2 className="text-4xl font-bold text-center text-[#00ffc2] mb-10">
        What We Bring to the Table
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="bg-[#1a1a2e]/40 p-6 rounded-xl border border-[#00ffc2]/20 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-[0_0_25px_#00ffc2] hover:scale-105 group"
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:font-bold">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
