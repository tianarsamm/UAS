// components/templates/MainTemplate.tsx
import Navbar from "./components/organisms/Navbar";
import Header from "./components/organisms/Header";
import Partners from "./components/organisms/Partners";
import Features from "./components/organisms/Features";
import More from "./components/organisms/More";
import Showcase from "./components/organisms/Showcase";
import Testimonials from "./components/organisms/Testimonials";
import Subscribe from "./components/organisms/Subscribe";
import Footer from "./components/organisms/Footer";

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-sans bg-[#d7f5dc]">
      <Navbar />
      {children}
      <Header />
      <div className="bg-white">
      <Partners />
      </div>
      <Features/>
      <More />
      <Showcase />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default MainTemplate;
