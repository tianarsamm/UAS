interface Props {
    children: React.ReactNode;
  }
  const FooterText = ({ children }: Props) => (
    <p className="text-sm">{children}</p>
  );
  
  export default FooterText;
  