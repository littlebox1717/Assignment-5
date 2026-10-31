import { X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 container mx-auto px-8">
      <div className="flex  justify-between items-center text-[15px] my-8 gap-6 font-semibold">
        <button
          className="curson-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X />
          ) : (
            <img
              src="./src/assets/hamburger.png"
              alt="hamburger-logo"
              className="object-contain"
            ></img>
          )}
        </button>
        <div>
          <img
            src="./src/assets/logo-text.png"
            alt="navbar-logo"
            className="object-cover"
          />
        </div>
        <div>
          <ul className="hidden md:flex justify-center items-center gap-4 text-[#334155] ">
             <li className="text-[#DB2777]"><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
         <div >
          <button className="mr-2 ">Sign In</button>
          <button className="bg-[#DB2777] text-white cursor-pointer rounded-4xl ml-2  px-4 py-2">
            Sign Up
          </button>
        </div>
      </div>
      <div>
        {isMenuOpen && (
          <div>
            <ul className="md:hidden flex flex-col justify-start gap-4 text-[#334155] ">
              <li className="text-[#DB2777]"><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
