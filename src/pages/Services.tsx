import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight, Hammer, Droplets, Wind, Sun, Wrench, Sparkles, Settings, Square, PenTool } from "lucide-react";

const services = [
  {
    id: "couverture",
    icon: Hammer,
    title: "Travaux de couverture",
    subtitle: "Tuiles, ardoises, zinc",
    description: "Notre expertise en couverture s'étend à tous types de matériaux : tuiles traditionnelles, ardoises naturelles, zinc et tôles. Nous réalisons la pose, la réparation et le remplacement de votre couverture avec un savoir-faire artisanal transmis depuis 3 générations.",
    benefits: [
      "Pose neuve et rénovation complète",
      "Tous matériaux : tuiles, ardoises, zinc, tôle",
      "Travail soigné et finitions impeccables",
      "Garantie décennale incluse",
    ],
  },
  {
    id: "renovation",
    icon: Settings,
    title: "Rénovation complète de toiture",
    subtitle: "Redonnez vie à votre toit",
    description: "La rénovation de toiture est notre spécialité. Nous intervenons pour remettre à neuf votre couverture, renforcer la charpente si nécessaire, améliorer l'isolation et garantir l'étanchéité parfaite de votre habitat pour les décennies à venir.",
    benefits: [
      "Diagnostic complet de l'état de votre toiture",
      "Remplacement partiel ou total de la couverture",
      "Renforcement de charpente si nécessaire",
      "Amélioration de l'isolation thermique",
    ],
  },
  {
    id: "reparation",
    icon: Wrench,
    title: "Réparation de toiture et recherche de fuites",
    subtitle: "Intervention rapide",
    description: "Une fuite d'eau peut causer des dégâts importants. Notre équipe intervient rapidement pour localiser et réparer les infiltrations. Nous utilisons des techniques de détection modernes pour identifier précisément l'origine des problèmes et y remédier durablement.",
    benefits: [
      "Intervention rapide sous 24-48h",
      "Détection précise des fuites",
      "Réparation durable et garantie",
      "Devis gratuit sur place",
    ],
  },
  {
    id: "zinguerie",
    icon: PenTool,
    title: "Zinguerie",
    subtitle: "Gouttières, chéneaux, habillages",
    description: "La zinguerie est essentielle pour l'évacuation des eaux de pluie et la protection de votre façade. Nous réalisons la pose et le remplacement de gouttières, chéneaux, descentes d'eau et tous habillages en zinc, cuivre ou aluminium.",
    benefits: [
      "Gouttières et chéneaux sur mesure",
      "Habillages de façade et de lucarne",
      "Zinc, cuivre, aluminium au choix",
      "Finitions soignées et durables",
    ],
  },
  {
    id: "etancheite",
    icon: Droplets,
    title: "Étanchéité toiture",
    subtitle: "Toitures plates et terrasses",
    description: "L'étanchéité de votre toit plat ou de votre terrasse est cruciale. Nous utilisons les meilleures membranes et techniques d'étanchéité (EPDM, PVC, bitume) pour garantir une protection totale contre les infiltrations d'eau.",
    benefits: [
      "Toitures plates et toitures terrasses",
      "Membranes haute performance",
      "Réparation de points singuliers",
      "Garantie 10 ans",
    ],
  },
  {
    id: "nettoyage",
    icon: Sparkles,
    title: "Nettoyage et démoussage de toiture",
    subtitle: "Entretien préventif",
    description: "Le démoussage régulier de votre toiture prolonge sa durée de vie et préserve son esthétique. Nous éliminons mousses, lichens et algues, puis appliquons un traitement hydrofuge pour protéger durablement votre couverture.",
    benefits: [
      "Nettoyage haute pression adapté",
      "Traitement anti-mousse longue durée",
      "Application hydrofuge protecteur",
      "Inspection et rapport d'état",
    ],
  },
  {
    id: "entretien",
    icon: Wind,
    title: "Entretien de toiture",
    subtitle: "Maintenance préventive",
    description: "Un entretien régulier évite les réparations coûteuses. Nous proposons des contrats d'entretien annuel incluant l'inspection, le nettoyage des gouttières, la vérification des points sensibles et les petites réparations préventives.",
    benefits: [
      "Inspection annuelle complète",
      "Nettoyage gouttières et chéneaux",
      "Remplacement tuiles cassées",
      "Rapport détaillé avec photos",
    ],
  },
  {
    id: "velux",
    icon: Sun,
    title: "Pose de fenêtres de toit Velux",
    subtitle: "Apportez la lumière",
    description: "L'installation de fenêtres de toit Velux transforme vos combles en espaces lumineux et agréables. Nous assurons une pose parfaite garantissant l'étanchéité et l'isolation, ainsi que la motorisation et les stores si souhaité.",
    benefits: [
      "Pose certifiée Velux",
      "Étanchéité parfaite garantie",
      "Options motorisation et stores",
      "Conseils personnalisés",
    ],
  },
  {
    id: "gouttieres",
    icon: Square,
    title: "Pose et remplacement de gouttières",
    subtitle: "Protection de votre façade",
    description: "Des gouttières en bon état protègent vos murs et fondations. Nous posons et remplaçons tous types de gouttières (zinc, aluminium, PVC, cuivre) avec des profils adaptés à votre toiture et au style de votre habitation.",
    benefits: [
      "Tous matériaux disponibles",
      "Pose soignée et étanche",
      "Raccordements parfaits",
      "Entretien et débouchage",
    ],
  },
];

export default function Services() {
  return (
    <Layout
      title="Services de couverture | COIN KD - Couvreur dans l'Oise (60)"
      description="Découvrez nos services de couverture : travaux de toiture, rénovation, réparation, zinguerie, Velux, gouttières. Couvreur professionnel dans l'Oise, Picardie, Val-d'Oise, Seine-et-Marne."
    >
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Nos services de couverture
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              COIN KD, artisan couvreur zingueur depuis 3 générations, vous accompagne 
              pour tous vos travaux de toiture dans l'Oise et les départements limitrophes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <service.icon className="w-4 h-4" />
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="cta">
                      Demander un devis gratuit
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-secondary rounded-2xl p-8 flex items-center justify-center aspect-square max-w-md mx-auto">
                    <service.icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Besoin d'un devis pour votre projet ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactez COIN KD pour obtenir un devis gratuit et personnalisé. 
            Notre équipe vous répond rapidement !
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
