import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-extrabold gradient-text">
                EduPro AI
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium hover:text-white transition-colors"
                style={{ color: "var(--dark-text)" }}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="px-3 py-2 text-sm font-medium hover:text-white transition-colors"
                style={{ color: "var(--dark-text)" }}
              >
                Courses
              </Link>
              <Link
                to="/pricing"
                className="px-3 py-2 text-sm font-medium hover:text-white transition-colors"
                style={{ color: "var(--dark-text)" }}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium hover:text-white transition-colors"
                style={{ color: "var(--dark-text)" }}
              >
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="font-medium border-white/20 hover:bg-dark-accent text-slate-100"
              >
                Sign in
              </Button>
              <Button className="font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset"
              style={{ color: "var(--dark-text)" }}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden neo-blur border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white"
              style={{ color: "var(--dark-text)" }}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white"
              style={{ color: "var(--dark-text)" }}
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white"
              style={{ color: "var(--dark-text)" }}
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white"
              style={{ color: "var(--dark-text)" }}
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-white/10">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Button
                  variant="outline"
                  className="w-full font-medium mb-2 border-white/20"
                  style={{ color: "var(--dark-text)" }}
                >
                  Sign in
                </Button>
                <Button className="w-full font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
