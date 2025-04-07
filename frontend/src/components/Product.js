import React from 'react';

const Product = () => {
  const products = [
    {
      id: 1,
      title: "AI Chatbot",
      description: "24/7 intelligent virtual assistant for customer engagement and support.",
      icon: "🤖",
    },
    {
      id: 2,
      title: "Data Analyzer",
      description: "Extract insights from your data with real-time visual dashboards.",
      icon: "📊",
    },
    {
      id: 3,
      title: "Automation Hub",
      description: "Automate business workflows, reduce manual work, and boost efficiency.",
      icon: "⚙️",
    },
  ];

  return (
    <section id="products" className="px-6 md:px-12 py-16 bg-black/20 text-white backdrop-blur">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#00ffc2]">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-[#1c2b36] p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-700/40"
          >
            <div className="text-5xl mb-4">{product.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition">{product.title}</h3>
            <p className="text-gray-300 group-hover:text-gray-100 transition">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
