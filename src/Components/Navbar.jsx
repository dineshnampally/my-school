import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/pixelcut-export.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  const isActive = (path) => location.pathname === path ? "text-green-500" : "hover:text-blue-500";

  return (
    <nav className="fixed top-0 left-0 right-0 rounded-lg shadow-md bg-white p-4 mt-3 max-w-[95%] lg:max-w-[95%] xl:max-w-[95%] md:max-w-[95%] mx-auto font-semibold z-10">
      <div className="flex justify-between items-center ">

        <div className="flex flex-col items-center">
          <Link to="/">
            <img className="w-12" src={logo} alt="Logo" />
            <p className="text-left text-gray-700 font-semibold text-sm mt-2 hover:text-fuchsia-500 transition duration-300 delay-200">
              RDF School Matendla
            </p>
          </Link>
        </div>


        <div className="hidden md:flex justify-center flex-1 lg:mx-4 xl:mx-4">
          <ul className="flex gap-6 text-lg">
            <li>
              <Link to="/" className={`px-3 py-2 ${isActive("/")}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className={`px-3 py-2 ${isActive("/events")}`}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className={`px-3 py-2 ${isActive("/aboutus")}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/announcements" className={`px-3 py-2 ${isActive("/announcements")}`}>
                Announcements
              </Link>
            </li>
            <li>
              <Link to="/adminsignin" className={`px-3 py-2 ${isActive("/adminsignin")}`}>
                Admin
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-4 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4 text-lg">
          <li>
            <Link to="/" className={`px-4 py-2 ${isActive("/")}`} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" className={`px-4 py-2 ${isActive("/events")}`} onClick={() => setIsOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={`px-4 py-2 ${isActive("/aboutus")}`} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/announcements" className={`px-4 py-2 ${isActive("/contact")}`} onClick={() => setIsOpen(false)}>
            Announcements
            </Link>
          </li>
          <li>
            <Link to="/admin" className={`px-4 py-2 ${isActive("/admin")}`} onClick={() => setIsOpen(false)}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;