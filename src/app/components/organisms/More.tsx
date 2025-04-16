// components/organisms/More.tsx
import StatCard from "../molecules/StatCard";

const stats = [
  {
    icon: "/icons/project-plan.png",
    title: "Completed Projects",
    value: "100 +",
  },
  {
    icon: "/icons/rating (1).png",
    title: "Customer Satisfaction",
    value: "20 %",
  },
  {
    icon: "/icons/raise.png",
    title: "Raised by Clients",
    value: "$10M",
  },
  {
    icon: "/icons/timeline 2.png",
    title: "Years in Business",
    value: "2 yrs",
  },
];

const More = () => (
  <section className="bg-[#f6fbf9] py-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
      {stats.map((item, index) => (
        <StatCard
          key={index}
          icon={item.icon}
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  </section>
);

export default More;
