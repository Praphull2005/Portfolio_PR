import { useEffect, useState } from 'react';
import profilePic from '../assets/gitProfilePic.jpg';



function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to fix the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className={`w-full z-50 ${isScrolled ? "fixed top-0 left-0 from-gray-900 via-purple-900 to-gray-800 shadow-2xl" : "shadow-2xl absolute top-0 left-0"} transition-all`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <div className="flex items-center space-x-2">

          <img
            src={profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-cyan-400"
          />
        </div>

        <ul className="hidden md:flex gap-7 text-lg text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Project" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Skills" className="cursor-pointer hover:text-gray-400">Skills</a>
        </ul>

        <div className="cursor-pointer">
          <p onClick={() => setShowMobileMenu(true)} className="md:hidden w-14 h-14 text-4xl mr-2 text-white rounded-full cursor-pointer">
            &#8801;
          </p>
        </div>
      </div>

      {showMobileMenu && (
        <>
          <div className="fixed inset-0 bg-opacity-50 z-20" onClick={() => setShowMobileMenu(false)} />
          <div className="fixed top-0 right-0 w-60 h-screen bg-gray-800 z-30">
            <div className="flex justify-end p-6 cursor-pointer">
              <p
                onClick={() => setShowMobileMenu(false)}
                className="md:hidden w-12 h-12 text-2xl text-white rounded-full"
              >
                &#10005;
              </p>
            </div>
            <ul className="flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium text-white">
              <a href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
              <div className="relative">
                <a
                  className="px-4 py-2 rounded-full inline-block cursor-pointer"
                  onClick={() => setShowAboutMenu(!showAboutMenu)}
                >
                  About
                </a>
                {showAboutMenu && (
                  <ul className="flex flex-col gap-4 bg-gray-800 p-4 rounded mt-2 shadow-lg w-full">
                    <a href="#About" className="hover:text-white">Introduction</a>
                    <a href="#Education" className="hover:text-white">Education</a>
                    <a href="#Skills" className="hover:text-white">Skills</a>
                    <a href="#Certification" className="hover:text-white">Certifications</a>
                  </ul>
                )}
              </div>
              <a href="#Project" className="px-4 py-2 rounded-full inline-block">Projects</a>
              <a href="#Experience" className="px-4 py-2 rounded-full inline-block">Experience</a>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
