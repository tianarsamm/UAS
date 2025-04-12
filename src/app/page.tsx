import Navbar from "./components/Navbar";
import Header from "./components/Headers";
import Partners from "./components/Partners";
import Features from "./components/Features";
import More from "./components/More";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-[#d7f5dc]">
      <Navbar />
      <Header />

      {/* Section dengan background putih untuk Partners */}
      <div className="bg-white">
        <Partners />
      </div>

      {/* Spacer dengan background asli (hijau) */}
      <div className="h-1"></div>

      {/* Section dengan background putih untuk Features */}
      <div className="bg-white">
        <Features />
      </div>
      <More/>
      <Showcase />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}
