import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoCoinkd from "@/assets/logo-coinkd.png";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/avis-clients", label: "Avis clients" },
  { href: "/contact", label: "Contact / Devis" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-primary ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoCoinkd} 
              alt="COIN KD - Couvreur Zinguerie" 
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-all duration-200 ${
                  location.pathname === link.href
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0604154113"
              className="flex items-center gap-2 text-primary-foreground font-semibold hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              06 04 15 41 13
            </a>
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Devis gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-foreground/20 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-all ${
                    location.pathname === link.href
                      ? "bg-primary-foreground/15 text-primary-foreground font-medium"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-primary-foreground/20 flex flex-col gap-3">
                <a
                  href="tel:0604154113"
                  className="flex items-center gap-2 px-4 text-primary-foreground font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  06 04 15 41 13
                </a>
                <Link to="/contact" className="px-4">
                  <Button variant="hero" className="w-full">
                    Devis gratuit
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
