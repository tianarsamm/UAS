// components/organisms/Header.tsx
import TextBlock from "../molecules/TextBlocks";
import Image from "../atoms/Images";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 pt-10 pb-0">
      <TextBlock />
      <Image src="/images/Group 38.svg" alt="Hero" />
    </header>
  );
};

export default Header;
