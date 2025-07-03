import { Menu } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-1 shadow-sm bg-white">
      {/* Logo */}
      <img src={logo} alt="Dream Stay Logo" className="h-10 w-auto mt-1.5" />

      {/* Right Side: Login + Menu */}
      <div className="flex items-center gap-2">
        <button className="text-xs primary font-semibold py-1 px-3 rounded-full">
          LOGIN / SIGNUP
        </button>
        <Menu size={22} className="text-gray-700" />
      </div>
    </header>
  );
}
