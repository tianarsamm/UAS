// components/atoms/NavButton.tsx
import { LucideIcon } from "lucide-react";

interface NavButtonProps {
  icon: LucideIcon;
  active?: boolean;
}

const NavButton = ({ icon: Icon, active = false }: NavButtonProps) => (
  <button
    className={`w-10 h-10 rounded-full flex items-center justify-center ${
      active ? "bg-green-100 text-black" : "border border-black text-black"
    }`}
  >
    <Icon size={18} />
  </button>
);

export default NavButton;
