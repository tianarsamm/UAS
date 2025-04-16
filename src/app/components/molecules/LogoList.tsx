// components/molecules/LogoList.tsx
import LogoImage from "../atoms/LogoImages";

const partners = [
  { name: "Google", src: "/logos/google.png" },
  { name: "Trello", src: "/logos/trello.png" },
  { name: "Monday", src: "/logos/monday.png" },
  { name: "Notion", src: "/logos/Notion.png" },
  { name: "Slack", src: "/logos/Slack.png" },
];

const LogoList = () => (
  <>
    {partners.map((partner, i) => (
      <LogoImage key={i} src={partner.src} alt={partner.name} />
    ))}
  </>
);

export default LogoList;
