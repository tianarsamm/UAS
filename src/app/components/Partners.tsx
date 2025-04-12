export default function Partners() {
    const partners = [
      { name: "Google", src: "/logos/google.png" },
      { name: "Trello", src: "/logos/trello.png" },
      { name: "Monday", src: "/logos/monday.png" },
      { name: "Notion", src: "/logos/Notion.png" },
      { name: "Slack", src: "/logos/Slack.png" },
    ];
  
    return (
      <section className="w-full py-8 mb-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {partners.map((partner, i) => (
            <img
              key={i}
              src={partner.src}
              alt={partner.name}
              className="h-6 md:h-8 object-contain"
            />
          ))}
        </div>
      </section>
    );
  }
  