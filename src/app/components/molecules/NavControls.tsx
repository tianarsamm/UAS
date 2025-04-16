// components/molecules/NavControls.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavButton from "../atoms/NavButton";

const NavControls = () => (
  <div className="flex space-x-4">
    <NavButton icon={ChevronLeft} />
    <NavButton icon={ChevronRight} active />
  </div>
);

export default NavControls;
