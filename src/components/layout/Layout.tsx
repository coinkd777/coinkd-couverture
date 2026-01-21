import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ children, title, description }: LayoutProps) {
  const defaultTitle = "COIN KD - Couvreur professionnel dans l'Oise | Toiture & Rénovation";
  const defaultDescription = "COIN KD, artisan couvreur depuis 3 générations à Breuil-le-Vert (60). Travaux de toiture, rénovation, réparation, zinguerie, Velux. Devis gratuit. ☎ 06 04 15 41 13";

  return (
    <>
      <Helmet>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            "name": "COIN KD",
            "description": "Artisan couvreur professionnel depuis 3 générations. Travaux de toiture, rénovation, réparation, zinguerie.",
            "url": window.location.origin,
            "telephone": "+33604154113",
            "email": "artisan.coinkd@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "21 rue Neuve",
              "addressLocality": "Breuil-le-Vert",
              "postalCode": "60600",
              "addressRegion": "Oise",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "49.3833",
              "longitude": "2.4333"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "21:00"
            },
            "areaServed": [
              { "@type": "State", "name": "Oise" },
              { "@type": "State", "name": "Val-d'Oise" },
              { "@type": "State", "name": "Seine-et-Marne" },
              { "@type": "State", "name": "Picardie" }
            ],
            "priceRange": "€€",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de couverture",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Travaux de couverture" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rénovation de toiture" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Réparation de toiture" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zinguerie" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pose de Velux" } }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
}
