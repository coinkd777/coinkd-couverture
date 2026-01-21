import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Star, Quote, MapPin } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Pierre D.",
    location: "Breuil-le-Vert (60)",
    rating: 5,
    date: "Janvier 2024",
    title: "Travail impeccable !",
    content: "Rénovation complète de notre toiture. L'équipe COIN KD a été professionnelle du début à la fin. Le chantier a été propre, les délais respectés et le résultat est parfait. Je recommande sans hésitation !",
    service: "Rénovation toiture",
  },
  {
    id: 2,
    name: "Marie-Claire L.",
    location: "Clermont (60)",
    rating: 5,
    date: "Décembre 2023",
    title: "Excellente prestation",
    content: "Installation de 3 Velux dans nos combles. Travail soigné, finitions parfaites et étanchéité irréprochable. Un grand merci à l'équipe pour leur professionnalisme et leurs conseils.",
    service: "Pose Velux",
  },
  {
    id: 3,
    name: "Jean-Michel R.",
    location: "Senlis (60)",
    rating: 5,
    date: "Novembre 2023",
    title: "Réactifs et efficaces",
    content: "Suite à une fuite importante, COIN KD est intervenu rapidement. Diagnostic précis, réparation efficace et prix honnête. C'est rassurant de pouvoir compter sur des artisans sérieux.",
    service: "Réparation fuite",
  },
  {
    id: 4,
    name: "Françoise B.",
    location: "Beauvais (60)",
    rating: 5,
    date: "Octobre 2023",
    title: "Un vrai savoir-faire",
    content: "On ressent vraiment le savoir-faire transmis de génération en génération. Le travail de zinguerie est magnifique, les finitions sont dignes d'un artisan d'art. Bravo !",
    service: "Zinguerie",
  },
  {
    id: 5,
    name: "Laurent M.",
    location: "Creil (60)",
    rating: 5,
    date: "Septembre 2023",
    title: "Rapport qualité-prix excellent",
    content: "Devis clair et détaillé, travaux réalisés dans les temps, équipe sympathique et professionnelle. Le prix était compétitif pour une qualité de travail irréprochable.",
    service: "Couverture neuve",
  },
  {
    id: 6,
    name: "Nathalie V.",
    location: "Compiègne (60)",
    rating: 5,
    date: "Août 2023",
    title: "Je recommande vivement",
    content: "Démoussage complet de notre toiture + traitement hydrofuge. La différence est spectaculaire ! Notre toit a retrouvé son aspect neuf. Service client au top.",
    service: "Nettoyage toiture",
  },
];

export default function Reviews() {
  return (
    <Layout
      title="Avis clients | COIN KD - Couvreur de confiance dans l'Oise"
      description="Découvrez les avis de nos clients satisfaits. COIN KD, artisan couvreur depuis 3 générations dans l'Oise. Témoignages et retours d'expérience authentiques."
    >
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Avis de nos clients
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              La satisfaction de nos clients est notre priorité. Découvrez leurs 
              témoignages et retours d'expérience sur nos prestations de couverture.
            </p>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-accent fill-accent" />
              ))}
              <span className="text-primary-foreground/80 ml-2 text-lg">
                5/5 basé sur {reviews.length} avis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {review.title}
                </h2>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{review.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {review.service}
                      </span>
                      <p className="text-muted-foreground text-xs mt-1">{review.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              La confiance de nos clients, notre meilleure publicité
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Clients satisfaits" },
                { value: "60+", label: "Années d'expérience" },
                { value: "100%", label: "Garantie décennale" },
                { value: "5/5", label: "Note moyenne" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Faites confiance à COIN KD pour vos travaux de toiture. 
            Devis gratuit et sans engagement.
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
