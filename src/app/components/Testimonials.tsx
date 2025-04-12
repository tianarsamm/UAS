import { ChevronLeft, ChevronRight } from "lucide-react";

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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-sm text-gray-600 mb-6">{testimonial.message}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
