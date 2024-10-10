import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBlog, faMoneyBillWave, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link for navigation

const navItems = [
  { name: "Dashboard", icon: faTachometerAlt, path: "/dashboard" }, // Define paths
  { name: "Blogs", icon: faBlog, path: "/blogs" },
  { name: "Finances", icon: faMoneyBillWave, path: "/finances" },
  { name: "Pitches", icon: faClipboard, path: "/pitches" },
];

const Navbar = () => {
  return (
    <>
      {/* Fixed left sidebar for larger devices (lg) */}
      <nav className="hidden lg:flex fixed top-0 left-0 h-full bg-white shadow-lg z-50 flex-col space-y-6 mt-24">
        <div className="p-4 space-y-4"> {/* Added space-y-4 for vertical spacing */}
          {navItems.map((item) => (
            <Link // Use Link component for navigation
              key={item.name}
              to={item.path} // Navigate to the path
              className="flex items-center space-x-2 text-gray-500 hover:text-[#6C5DD3] transition-colors duration-200 focus:hover:text-[#6C5DD3]" // Dark gray with hover color
            >
              <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Vertical icons only for medium devices (md) */}
      <nav className="hidden md:flex lg:hidden fixed top-0 left-0 h-full bg-white shadow-lg z-50 flex-col">
        <div className="p-4 space-y-4"> {/* Added space-y-4 for vertical spacing */}
          {navItems.map((item) => (
            <Link // Use Link component for navigation
              key={item.name}
              to={item.path} // Navigate to the path
              className="flex items-center space-x-2 text-gray-300 hover:text-[#6C5DD3] transition-colors duration-200" // Dark gray with hover color
            >
              <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom navigation for small devices (sm and xs) */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg z-50 flex justify-around p-2">
        {navItems.map((item) => (
          <Link // Use Link component for navigation
            key={item.name}
            to={item.path} // Navigate to the path
            className="flex flex-col items-center text-gray-300 hover:text-[#6C5DD3] transition-colors duration-200" // Dark gray with hover color
          >
            <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
