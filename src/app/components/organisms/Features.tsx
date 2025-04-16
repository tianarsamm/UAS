// components/organisms/Features.tsx
import FeatureCard from "../molecules/FeatureCard";
import SectionTitle from "../atoms/SectionTitle";

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

const Features = () => (
  <section className="w-full bg-white py-16 mt-2">
    <div className="max-w-6xl mx-auto px-6">
      <SectionTitle
        label="WHAT WE DO"
        title="We provide the Perfect Solution \nto your business growth"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
