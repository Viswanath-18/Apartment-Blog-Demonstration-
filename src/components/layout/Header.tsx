import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Building2, LayoutGrid, Home as HomeIcon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/4.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const apartmentTypes = [
  { name: "All Units", path: "/apartments", icon: Building2 },
  { name: "Studio Suites", path: "/apartments?type=studio", icon: LayoutGrid },
  { name: "2 BHK Family", path: "/apartments?type=2bhk", icon: HomeIcon },
  { name: "3 BHK Premium", path: "/apartments?type=3bhk", icon: MapPin },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Apartments", path: "/apartments", hasDropdown: true },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3 translate-y-0"
          : "bg-transparent py-5 -translate-y-2 opacity-0 pointer-events-none"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group animate-reveal-left">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center overflow-hidden shadow-lg group-hover:rotate-6 transition-transform">
              <img
                src={logoMark}
                alt="TOKYO Apartments logo"
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors leading-none">
                TOKYO
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Apartments
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 animate-fade-in delay-200">
            {navLinks.map((link) => (
              <li key={link.path}>
                {link.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 outline-none",
                      location.pathname.startsWith(link.path)
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}>
                      {link.name}
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl shadow-xl animate-in fade-in zoom-in duration-200">
                      {apartmentTypes.map((type) => (
                        <DropdownMenuItem key={type.path} asChild>
                          <Link to={type.path} className="flex items-center gap-3 p-3 cursor-pointer rounded-lg hover:bg-primary/5 group">
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                              <type.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium">{type.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      location.pathname === link.path
                        ? "text-primary bg-primary/5 font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block animate-reveal-right delay-300">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden
                         font-bold text-white transition duration-300 ease-out bg-[#437059]
                         rounded-full shadow-md group hover:shadow-xl"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#2d4d3c] group-hover:translate-x-0 ease">
                <Menu className="w-5 h-5" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Book a Visit
              </span>
              <span className="relative invisible">Book a Visit</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-secondary text-foreground hover:bg-primary/10 transition-all"
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
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "max-h-[500px] mt-6" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-2 pb-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "px-4 py-4 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-between",
                    location.pathname === link.path
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Button asChild className="w-full h-14 rounded-xl text-lg font-bold shadow-lg">
                <Link to="/contact">Schedule Visit</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
