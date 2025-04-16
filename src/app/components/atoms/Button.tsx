// components/atoms/Button.tsx
interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

const Button = ({ href, children, variant = "primary" }: ButtonProps) => {
  const base = "font-bold px-4 py-2 rounded transition";
  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-green-500 text-green-700 hover:bg-green-600 hover:text-white"
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
};

export default Button;
