import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/4.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Apartments", path: "/apartments" },
  { name: "Amenities", path: "/amenities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

type HeaderProps = {
  enableScrollBehavior?: boolean; // comes from Layout
};

export function Header({ enableScrollBehavior = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!enableScrollBehavior) {
      // non-home -> always visible, no scroll logic
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollBehavior]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3 opacity-100 translate-y-0"
          : "bg-transparent py-5 opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      {isScrolled && (
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
                <img
                  src={logoMark}
                  alt="TOKYO Apartments logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <span className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">
                TOKYO APARTMENTS
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
                      location.pathname === link.path
                        ? "text-primary bg-primary/7 border-2 border-[#437059] shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="relative inline-block rounded-md px-6 py-1.5 overflow-hidden group
                           bg-[#437059] hover:bg-gradient-to-r hover:from-[#437059] hover:to-[#4b8065]
                           text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4b8065]
                           transition-all ease-out duration-300"
              >
                <span
                  className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000
                             transform translate-x-12 bg-white opacity-10 rotate-12
                             group-hover:-translate-x-40 ease"
                />
                <span className="relative">Schedule Visit</span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile menu */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            )}
          >
            <ul className="flex flex-col gap-1 pb-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      " px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      location.pathname === link.path
                        ? "text-primary bg-primary/5 border border-[#000000] shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button asChild className="w-full">
                  <Link to="/contact">Schedule Visit</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
