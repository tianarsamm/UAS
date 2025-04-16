// components/templates/MainTemplate.jsx
import Navbar from "../organisms/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-green-100 text-center py-6 mt-8">
        <p className="text-sm font-semibold">© 2025 DesignAgency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainTemplate;
