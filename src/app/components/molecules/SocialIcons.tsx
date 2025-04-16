import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SocialIcons = () => (
  <div className="flex gap-4 text-xl">
    <a href="#" className="hover:text-white"><FaFacebookF /></a>
    <a href="#" className="hover:text-white"><FaTwitter /></a>
    <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
    <a href="#" className="hover:text-white"><FaInstagram /></a>
  </div>
);

export default SocialIcons;
