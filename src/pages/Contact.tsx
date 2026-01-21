import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom est trop long"),
  email: z.string().trim().email("Adresse email invalide").max(255, "Email trop long"),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(20, "Numéro trop long"),
  subject: z.string().trim().min(5, "Le sujet doit contenir au moins 5 caractères").max(200, "Sujet trop long"),
  message: z.string().trim().min(20, "Le message doit contenir au moins 20 caractères").max(2000, "Message trop long"),
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Message envoyé avec succès !", {
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Veuillez corriger les erreurs du formulaire");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Contact & Devis gratuit | COIN KD - Couvreur dans l'Oise"
      description="Contactez COIN KD pour un devis gratuit. Artisan couvreur à Breuil-le-Vert (60). ☎ 06 04 15 41 13 - artisan.coinkd@gmail.com. Réponse rapide garantie."
    >
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Contactez COIN KD – Devis gratuit
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Besoin d'un couvreur professionnel ? Contactez-nous pour obtenir un 
              devis gratuit et sans engagement. Réponse rapide garantie !
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Demande de devis gratuit
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ex: Devis rénovation toiture"
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet en détail..."
                    rows={6}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer ma demande de devis
                    </>
                  )}
                </Button>

                <p className="text-muted-foreground text-sm text-center">
                  Devis gratuit – Réponse sous 24-48h
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:0604154113"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Téléphone</h3>
                    <p className="text-primary text-xl font-bold">06 04 15 41 13</p>
                    <p className="text-muted-foreground text-sm">Appel direct - Devis gratuit</p>
                  </div>
                </a>

                <a
                  href="mailto:artisan.coinkd@gmail.com"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Email</h3>
                    <p className="text-primary font-semibold">artisan.coinkd@gmail.com</p>
                    <p className="text-muted-foreground text-sm">Réponse sous 24-48h</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Adresse</h3>
                    <p className="text-foreground">21 rue Neuve</p>
                    <p className="text-foreground">60600 Breuil-le-Vert (Oise)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Horaires</h3>
                    <p className="text-foreground">Lundi - Samedi : 08h - 21h</p>
                    <p className="text-muted-foreground text-sm">Urgences 7j/7</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Devis gratuit et sans engagement",
                    "Artisan depuis 3 générations",
                    "Garantie décennale sur tous travaux",
                    "Intervention rapide sous 24-48h",
                    "Matériaux de qualité professionnelle",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Zone d'intervention
            </h2>
            <p className="text-muted-foreground">
              COIN KD intervient dans l'Oise (60), toute la Picardie, le Val-d'Oise (95) 
              et la Seine-et-Marne (77).
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <a
              href="https://www.google.com/maps/search/21+rue+Neuve+60600+Breuil-le-Vert"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/9] bg-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold text-lg">21 rue Neuve, 60600 Breuil-le-Vert</p>
                  <p className="text-primary mt-2">Cliquez pour ouvrir dans Google Maps</p>
                </div>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
            {[
              { dept: "60", name: "Oise" },
              { dept: "Picardie", name: "Toute la région" },
              { dept: "95", name: "Val-d'Oise" },
              { dept: "77", name: "Seine-et-Marne" },
            ].map((zone, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-xl text-center border border-border"
              >
                <p className="text-xl font-heading font-bold text-primary">{zone.dept}</p>
                <p className="text-muted-foreground text-sm">{zone.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
