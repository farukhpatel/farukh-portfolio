import { useState } from "react";
import { navbarOptions } from "../utills/constant";
import Image from "next/image";
import icon from "../public/images/code.svg";
import Menu from "../public/images/svgs/Menu";

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-4 md:px-16 flex justify-between items-center">
      {/* Left Side: Name/Heading */}
      <div className="text-white text-xl font-bold font-headings flex gap-3 items-center">
        <Image src={icon} alt="icon" width={32} height={32} />
        <div className="text-white">{name}</div>
      </div>

      {/* Right Side: Menu for Desktop */}
      <div className="hidden md:flex space-x-4">
        {(navbarOptions || []).map((nav) => {
          return (
            <a
              key={nav.name}
              href="#"
              className={`px-2 py-1 font-headings text-white hover:text-gray-400 hover:border-b-2 border-highlight ${
                nav.name === "Home" ? `border-b-2 border-highlight` : ""
              }`}
            >
              {nav.name}
            </a>
          );
        })}
      </div>

      {/* Right Side: Hamburger Menu for Mobile */}
      <div className="md:hidden relative">
        <button
          onClick={toggleDropdown}
          className="text-white focus:outline-none"
        >
          <Menu/>
        </button>

        {/* Dropdown Content for Mobile */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-highlight rounded-md shadow-lg">
            {(navbarOptions || []).map((nav) => {
              return (
                <a
                  href="#"
                  className="block px-4 py-2 font-headings text-white bg-highlight"
                >
                  {nav.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
