// components/Features.tsx

import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: "/icons/Activity.png",
    title: "Grow Your Business",
    description: "We help identify the best ways to improve your business",
  },
  {
    icon: "/icons/Heart.png",
    title: "Improve brand loyalty",
    description: "We help identify the best ways to improve your business",
  },
  {
    icon: "/icons/Work.png",
    title: "Improve Business Model",
    description: "We help identify the best ways to improve your business",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-16 mt-2">
      <div className="max-w-6xl mx-auto px-6 text-start mb-16">
        <p className="text-2xl text-green-500 font-semibold">WHAT WE DO</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          We provide the Perfect Solution <br /> to your business growth
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <div className="inline-block p-5 bg-green-100 rounded-2xl">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-green-500 transition-colors"
            >
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
