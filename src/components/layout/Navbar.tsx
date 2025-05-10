
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="hidden md:block bg-repair-700 text-white py-2">
        <div className="container flex justify-end gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon-Sat: 9AM - 7PM</span>
          </div>
        </div>
      </div>

      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-repair-700">
            TechFix<span className="text-repair-950">Pro</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="font-medium hover:text-repair-700 transition-colors"
            >
              {route.name}
            </Link>
          ))}
          <Button asChild>
            <Link to="/contact">Book a Repair</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 space-y-4 bg-white border-t">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="block py-2 font-medium hover:text-repair-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Book a Repair
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
