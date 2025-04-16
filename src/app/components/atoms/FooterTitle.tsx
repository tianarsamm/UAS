interface Props {
    children: React.ReactNode;
  }
  const FooterTitle = ({ children }: Props) => (
    <h3 className="font-semibold mb-4">{children}</h3>
  );
  
  export default FooterTitle;
  