import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#00c569] text-black py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo dan Sosial Media */}
        <div>
        <img src="/images/logo.png" alt="Web Logo" className="h-18 w-auto" />
          <p className="text-sm mb-6">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-4">Address</h3>
          <p className="text-sm">
            Design Agency Head Office.
            <br />
            Airport Road
            <br />
            United Arab Emirate
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm">
        Copyright Design Agency 2022
      </div>
    </footer>
  );
}
