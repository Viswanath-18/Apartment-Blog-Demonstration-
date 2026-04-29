import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Apartments', path: '/apartments' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const apartmentTypes = [
  { name: '1 BHK Apartments', path: '/apartments' },
  { name: '2 BHK Apartments', path: '/apartments' },
  { name: '3 BHK Apartments', path: '/apartments' },
  { name: 'Penthouse Suites', path: '/apartments' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">
                Tokyo Apartments
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Premium living spaces designed for modern families. Experience comfort, 
              convenience, and community in the heart of the city.
            </p>
            <p className="text-background/50 text-xs">
              This is a portfolio case study project for demonstration purposes only.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apartment Types */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/80">
              Apartment Types
            </h4>
            <ul className="space-y-3">
              {apartmentTypes.map((type, index) => (
                <li key={index}>
                  <Link
                    to={type.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/80">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">
                  Coimbatore
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/70 text-sm">+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/70 text-sm">hellotokyo@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/70 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} Tokyo Apartments. sample website demonstration.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-background/50 hover:text-background/80 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/50 hover:text-background/80 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
