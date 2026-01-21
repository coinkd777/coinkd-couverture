import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Award, Users, Shield, Clock, Target, Heart } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const values = [
  {
    icon: Award,
    title: "Savoir-faire artisanal",
    description: "Trois générations de couvreurs ont façonné notre expertise. Chaque geste, chaque technique a été transmis et perfectionné pour vous garantir un travail d'exception.",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description: "Tous nos travaux sont couverts par une garantie décennale, vous assurant une protection totale pendant 10 ans après la fin du chantier.",
  },
  {
    icon: Target,
    title: "Rigueur et précision",
    description: "Chaque détail compte. Nous apportons un soin particulier à chaque étape du chantier pour des finitions irréprochables et durables.",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description: "Nous nous engageons sur des délais précis et les respectons. Votre temps est précieux, nous en sommes conscients.",
  },
  {
    icon: Users,
    title: "Relation de confiance",
    description: "Nos clients deviennent souvent des amis. Cette relation de confiance construite au fil des années est notre plus belle récompense.",
  },
  {
    icon: Heart,
    title: "Passion du métier",
    description: "Couvreur, c'est plus qu'un métier, c'est une passion. Cette passion se retrouve dans la qualité de chaque réalisation.",
  },
];

const milestones = [
  { year: "1960", event: "Création de l'entreprise par notre grand-père" },
  { year: "1985", event: "Transmission à la deuxième génération" },
  { year: "2010", event: "La troisième génération prend les rênes" },
  { year: "2020", event: "Plus de 500 clients satisfaits" },
  { year: "Aujourd'hui", event: "COIN KD, votre couvreur de confiance" },
];

export default function About() {
  return (
    <Layout
      title="Qui sommes-nous | COIN KD - Artisan couvreur depuis 3 générations"
      description="Découvrez COIN KD, artisan couvreur depuis 3 générations à Breuil-le-Vert (60). Savoir-faire artisanal, garantie décennale, travail de qualité. Votre couvreur de confiance."
    >
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              COIN KD – Votre couvreur de confiance
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Artisan couvreur depuis 3 générations, nous perpétuons un savoir-faire 
              d'exception pour protéger durablement votre habitat.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Notre histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                60 ans de passion pour la couverture
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'histoire de COIN KD commence dans les années 1960, quand notre grand-père, 
                  passionné par le travail du toit, crée son entreprise artisanale. Armé de 
                  son savoir-faire et de sa détermination, il pose les fondations de ce qui 
                  deviendra une référence dans le métier de couvreur.
                </p>
                <p>
                  Au fil des décennies, ce savoir-faire s'est transmis de père en fils, 
                  s'enrichissant à chaque génération de nouvelles techniques tout en 
                  préservant l'excellence artisanale qui fait notre réputation.
                </p>
                <p>
                  Aujourd'hui, COIN KD représente la troisième génération de couvreurs. 
                  Nous combinons les gestes traditionnels appris de nos aînés avec les 
                  technologies modernes pour vous offrir des prestations de qualité 
                  exceptionnelle.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="Équipe COIN KD - Artisans couvreurs depuis 3 générations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Notre parcours
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-8 pb-12 last:pb-0">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="pt-4">
                    <p className="text-foreground text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ces valeurs guident chacune de nos interventions et font de COIN KD 
              un artisan couvreur sur lequel vous pouvez compter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Nos engagements
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Devis gratuit et détaillé sous 48h",
                "Respect strict des normes en vigueur",
                "Matériaux de qualité professionnelle",
                "Chantier propre et organisé",
                "Garantie décennale sur tous les travaux",
                "Service après-vente réactif",
                "Prix transparents sans surprise",
                "Conseil personnalisé et honnête",
              ].map((engagement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border"
                >
                  <CheckCircle className="w-6 h-6 text-success shrink-0" />
                  <span className="text-foreground font-medium">{engagement}</span>
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
            Faites confiance à notre expertise
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactez COIN KD pour discuter de votre projet de toiture. 
            Devis gratuit et conseils personnalisés.
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
