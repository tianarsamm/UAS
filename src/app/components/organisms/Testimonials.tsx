// components/organisms/Testimonials.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../molecules/TestimonialCard";

const testimonials = [
  {
    message:
      "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it’s all thanks to your amazing service",
    name: "Emily Stones",
    title: "CEO, Marketing Guru",
    image: "/testimonials/profil.png",
  },
  {
    message:
      "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it’s all thanks to your amazing service",
    name: "Emily Stones",
    title: "CEO, Marketing Guru",
    image: "/testimonials/profil.png",
  },
  {
    message:
      "Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it’s all thanks to your amazing service",
    name: "Emily Stones",
    title: "CEO, Marketing Guru",
    image: "/testimonials/profil.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-green-500 font-semibold text-2xl mb-2">TESTIMONIALS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          See What Our Customer <br /> Say About Us
        </h2>

        <div className="flex items-center justify-between mb-8">
          <div></div>
          <div className="flex space-x-4">
            <button className="w-10 h-10 rounded-full border border-black text-black flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-green-100 text-black flex items-center justify-center">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              message={t.message}
              name={t.name}
              title={t.title}
              image={t.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
