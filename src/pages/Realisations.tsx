import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rénovation complète de toiture",
    location: "Breuil-le-Vert (60)",
    type: "Rénovation toiture",
    description: "Rénovation intégrale d'une toiture en tuiles anciennes sur une maison de maître. Remplacement complet de la couverture, renforcement de la charpente et pose de nouvelles gouttières en zinc.",
  },
  {
    id: 2,
    title: "Pose de fenêtres de toit Velux",
    location: "Clermont (60)",
    type: "Velux",
    description: "Installation de 4 fenêtres de toit Velux pour aménager des combles en espace de vie. Travail d'étanchéité parfait et finitions soignées pour un résultat esthétique.",
  },
  {
    id: 3,
    title: "Réfection toiture ardoise",
    location: "Senlis (60)",
    type: "Couverture ardoise",
    description: "Restauration d'une toiture en ardoise naturelle sur un bâtiment ancien. Conservation du cachet architectural tout en garantissant une étanchéité parfaite.",
  },
  {
    id: 4,
    title: "Zinguerie complète",
    location: "Beauvais (60)",
    type: "Zinguerie",
    description: "Réalisation de l'ensemble des éléments de zinguerie : gouttières, chéneaux, descentes et habillages. Travail artisanal en zinc naturel pour une durabilité maximale.",
  },
  {
    id: 5,
    title: "Réparation suite tempête",
    location: "Creil (60)",
    type: "Réparation urgente",
    description: "Intervention d'urgence suite aux dégâts causés par une tempête. Mise hors d'eau rapide puis réparation complète de la couverture endommagée.",
  },
  {
    id: 6,
    title: "Démoussage et traitement",
    location: "Compiègne (60)",
    type: "Entretien",
    description: "Nettoyage complet d'une toiture envahie par les mousses et lichens. Application d'un traitement hydrofuge pour une protection longue durée.",
  },
];

export default function Realisations() {
  return (
    <Layout
      title="Nos réalisations | COIN KD - Travaux de couverture dans l'Oise"
      description="Découvrez nos réalisations en couverture, rénovation de toiture, zinguerie et pose de Velux. Photos avant/après de nos chantiers dans l'Oise et en Picardie."
    >
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Nos réalisations
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Découvrez quelques-uns de nos chantiers réalisés dans l'Oise et les 
              départements limitrophes. Chaque projet témoigne de notre savoir-faire artisanal.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Placeholder for project image */}
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">{project.id}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">Photo du chantier</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <span className="text-muted-foreground text-sm">{project.location}</span>
                  </div>
                  
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {project.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Info */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Vous souhaitez voir plus de réalisations ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour recevoir notre portfolio complet avec des photos 
              avant/après de nos chantiers. Nous serons ravis de vous montrer la 
              qualité de notre travail.
            </p>
            <Link to="/contact">
              <Button variant="default" size="lg">
                Demander le portfolio complet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Votre projet est le prochain ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Confiez-nous votre projet de toiture. Devis gratuit et sans engagement.
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
