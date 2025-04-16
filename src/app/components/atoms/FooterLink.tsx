interface Props {
    href: string;
    children: React.ReactNode;
  }
  const FooterLink = ({ href, children }: Props) => (
    <a href={href} className="hover:underline text-sm">
      {children}
    </a>
  );
  
  export default FooterLink;
  