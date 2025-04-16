import FooterLogo from "../atoms/FooterLogo";
import FooterText from "../atoms/FooterText";
import SocialIcons from "../molecules/SocialIcons";
import QuickLinks from "../molecules/QuickLinks";
import AddressBlock from "../molecules/AddressBlock";

export default function Footer() {
  return (
    <footer className="bg-[#00c569] text-black py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <FooterLogo />
          <FooterText className="mb-6">
            Some footer text about the Agency. Just a little description to help people understand you better
          </FooterText>
          <SocialIcons />
        </div>

        <QuickLinks />
        <AddressBlock />
      </div>

      <div className="mt-12 text-center text-sm">
        Copyright Design Agency 2022
      </div>
    </footer>
  );
}
