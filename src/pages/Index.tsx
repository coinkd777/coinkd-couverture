import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const services = [
  { title: "Travaux de couverture", description: "Tuiles, ardoises, zinc - pose et réparation par des experts" },
  { title: "Rénovation de toiture", description: "Rénovation complète pour redonner vie à votre toit" },
  { title: "Réparation & fuites", description: "Recherche et réparation de fuites rapide et efficace" },
  { title: "Zinguerie", description: "Gouttières, chéneaux, habillages en zinc de qualité" },
  { title: "Pose de Velux", description: "Installation professionnelle de fenêtres de toit" },
  { title: "Entretien toiture", description: "Nettoyage et démoussage pour prolonger la durée de vie" },
];

const trustPoints = [
  { icon: Shield, title: "Garantie décennale", description: "Tous nos travaux sont couverts" },
  { icon: Award, title: "3 générations", description: "Savoir-faire artisanal transmis" },
  { icon: Users, title: "+500 clients", description: "Satisfaits dans la région" },
];

export default function Index() {
  return (
    <Layout
      title="COIN KD - Couvreur professionnel dans l'Oise | Toiture & Rénovation"
      description="COIN KD, artisan couvreur depuis 3 générations à Breuil-le-Vert (60). Travaux de toiture, rénovation, réparation, zinguerie, Velux. Devis gratuit. ☎ 06 04 15 41 13"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Couvreur professionnel COIN KD travaillant sur une toiture en ardoise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Shield className="w-4 h-4" />
              Artisan couvreur depuis 3 générations
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Couvreur professionnel – Travaux de toiture, rénovation et réparation
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              COIN KD, votre couvreur zingueur de confiance dans l'Oise et toute la Picardie. 
              Expertise en rénovation toiture, réparation de fuites, pose de Velux et zinguerie. 
              Qualité artisanale et garantie décennale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/contact">
                <Button variant="cta" size="lg" className="w-full sm:w-auto">
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:0604154113">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  06 04 15 41 13
                </Button>
              </a>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {trustPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <point.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-primary-foreground font-semibold text-sm">{point.title}</p>
                  <p className="text-primary-foreground/60 text-xs">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-primary py-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-primary-foreground">
            <a href="tel:0604154113" className="flex items-center justify-center gap-3 hover:text-accent transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">06 04 15 41 13</span>
            </a>
            <a href="mailto:artisan.coinkd@gmail.com" className="flex items-center justify-center gap-3 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
              <span>artisan.coinkd@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>21 rue Neuve, 60600 Breuil-le-Vert</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5" />
              <span>Lun - Sam : 08h - 21h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nos services de couverture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert en travaux de toiture, nous intervenons pour tous vos besoins : 
              couverture, zinguerie, étanchéité, Velux et entretien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                Voir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Qui sommes-nous
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                COIN KD, votre couvreur de confiance depuis 3 générations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depuis plus de 60 ans, notre famille transmet un savoir-faire artisanal d'exception 
                dans le domaine de la couverture. Aujourd'hui, COIN KD perpétue cette tradition 
                d'excellence en combinant techniques ancestrales et méthodes modernes.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Savoir-faire artisanal transmis de père en fils",
                  "Matériaux de qualité supérieure sélectionnés avec soin",
                  "Respect strict des normes de construction",
                  "Garantie décennale sur tous nos travaux",
                  "Devis gratuit et sans engagement",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/qui-sommes-nous">
                <Button variant="outline" size="lg">
                  Découvrir notre histoire
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="Artisan couvreur COIN KD au travail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-heading font-bold">60+</p>
                <p className="text-sm opacity-80">années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Zone d'intervention
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Couvreur intervenant dans l'Oise, toute la Picardie, le Val-d'Oise et la 
              Seine-et-Marne pour tous travaux de toiture.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { dept: "60", name: "Oise" },
              { dept: "Picardie", name: "Toute la région" },
              { dept: "95", name: "Val-d'Oise" },
              { dept: "77", name: "Seine-et-Marne" },
            ].map((zone, index) => (
              <a
                key={index}
                href={`https://www.google.com/maps/search/couvreur+${zone.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <p className="text-2xl font-heading font-bold text-primary">{zone.dept}</p>
                <p className="text-muted-foreground">{zone.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Besoin d'un couvreur professionnel ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactez COIN KD pour un devis gratuit et sans engagement. 
            Réponse rapide garantie !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Demander un devis gratuit
              </Button>
            </Link>
            <a href="tel:0604154113">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                06 04 15 41 13
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
