import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">COIN KD</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Artisan couvreur de confiance depuis 3 générations. Qualité, savoir-faire et garantie décennale.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span className="bg-success/20 text-success px-2 py-1 rounded font-medium">
                ✓ Garantie décennale
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Nos services" },
                { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
                { href: "/realisations", label: "Nos réalisations" },
                { href: "/avis-clients", label: "Avis clients" },
                { href: "/contact", label: "Contact & Devis" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Nos services</h4>
            <ul className="space-y-2">
              {[
                "Travaux de couverture",
                "Rénovation de toiture",
                "Réparation & fuites",
                "Zinguerie",
                "Pose de Velux",
                "Gouttières",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  21 rue Neuve<br />
                  60600 Breuil-le-Vert (Oise)
                </span>
              </li>
              <li>
                <a
                  href="tel:0604154113"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  06 04 15 41 13
                </a>
              </li>
              <li>
                <a
                  href="mailto:artisan.coinkd@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  artisan.coinkd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Lun - Sam : 08h - 21h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} COIN KD - Artisan Couvreur. Tous droits réservés.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Intervention : Oise (60) • Picardie • Val-d'Oise (95) • Seine-et-Marne (77)
          </p>
        </div>
      </div>
    </footer>
  );
}
