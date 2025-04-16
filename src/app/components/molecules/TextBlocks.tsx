// components/molecules/TextBlock.tsx
import Heading from "../atoms/Headings";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const TextBlock = () => (
  <div className="max-w-xl">
    <Heading>
      Increase Your <br /> Customers Loyalty <br /> and Satisfaction
    </Heading>
    <Paragraph>
      We help business like yours earn more costumers, <br />
      standout from competitors, make more money
    </Paragraph>
    <Button href="#get-started">Get Started</Button>
  </div>
);

export default TextBlock;
