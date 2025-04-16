import FooterTitle from "../atoms/FooterTitle";
import FooterLink from "../atoms/FooterLink";

const QuickLinks = () => (
  <div>
    <FooterTitle>Quick Links</FooterTitle>
    <ul className="space-y-2">
      <li><FooterLink href="#">Services</FooterLink></li>
      <li><FooterLink href="#">Portfolio</FooterLink></li>
      <li><FooterLink href="#">About Us</FooterLink></li>
      <li><FooterLink href="#">Contact Us</FooterLink></li>
    </ul>
  </div>
);

export default QuickLinks;
