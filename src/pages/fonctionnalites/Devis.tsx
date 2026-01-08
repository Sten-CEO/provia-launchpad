import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  Zap,
  Copy,
  Send,
  BarChart,
  Palette,
  Clock,
  Euro,
  AlertTriangle,
  Check
} from "lucide-react";
import heroImageDevis from "@/assets/fonction devis.jpg";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const Devis = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de devis professionnel - Créez des devis en 2 minutes"
        description="Créez des devis professionnels en quelques clics avec Provia BASE. Modèles personnalisables, calcul automatique, envoi par email, suivi et relances. Solution de devis pour TPE et PME."
        keywords="logiciel devis, créer devis, devis professionnel, devis en ligne, logiciel devis gratuit, devis TPE PME, modèle devis"
        canonical="/fonctionnalites/devis"
      />
      <Navbar />

      {/* SECTION 1 - HERO (2 colonnes) */}
      <section className="relative min-h-[100dvh] flex flex-col max-sm:justify-start justify-center max-sm:py-0 pt-16 sm:pt-32 pb-8 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Mobile Hero Image - Right side, top section only */}
        <div className="sm:hidden absolute top-0 -right-4 w-[40%] h-[55%] z-0">
          <div
            className="absolute inset-0 bg-contain bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${heroImageDevis})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="glow-orange top-20 -right-40 opacity-30 animate-pulse-glow max-sm:hidden" />
        <div className="glow-teal top-1/2 -left-60 opacity-30 animate-pulse-glow max-sm:hidden" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-20">
          {/* Mobile: Badge + Headline at top left ON the image */}
          <div className="sm:hidden space-y-4 animate-fade-in max-w-[75%] mb-8">
            <span className="inline-block text-primary font-medium text-xs px-3 py-1.5 border border-primary/40 rounded-full bg-primary/5">Fonctionnalité Devis</span>
            <h1 className="text-[1.65rem] leading-[1.25] font-medium tracking-tight">
              Logiciel de <span className="text-gradient-orange">devis</span> TPE/PME
            </h1>
          </div>

          {/* Mobile: Content below image */}
          <div className="sm:hidden text-center space-y-5 animate-fade-in mt-[8vh]">
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Créez des devis professionnels en 2 minutes. Envoi automatique, suivi des relances, conversion en facture.
            </p>

            {/* Mobile: Icons with descriptions */}
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              {[
                { icon: Zap, text: "Création de devis en 2 minutes" },
                { icon: Palette, text: "Personnalisation à votre image" },
                { icon: Send, text: "Envoi et suivi automatisés" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 items-center">
              <Link to="/demo" className="btn-primary text-center text-sm px-6 py-3 w-full max-w-xs">
                Voir le module en démo
              </Link>
              <a href="/#tarifs" className="text-primary underline underline-offset-4 text-sm font-medium">
                Voir les tarifs
              </a>
            </div>

            <p className="text-xs text-muted-foreground flex flex-wrap items-center justify-center gap-3">
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-provia-teal" /> Sans engagement</span>
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-provia-teal" /> Support France</span>
            </p>
          </div>

          {/* Desktop: Original 2-column layout */}
          <div className="hidden sm:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Texte */}
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-primary font-medium text-lg">Fonctionnalité Devis</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Logiciel de <span className="text-gradient-orange">devis</span> pour artisans et TPE/PME
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Fini les heures passées sur Word ou Excel. Créez des devis élégants, précis et personnalisés à votre image en quelques clics.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Zap, text: "Création de devis en 2 minutes" },
                  { icon: Palette, text: "Personnalisation à votre image" },
                  { icon: Send, text: "Envoi et suivi automatisés" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-row gap-4">
                <Link to="/demo" className="btn-primary text-center text-lg px-8 py-4">
                  Voir le module devis en démo
                </Link>
                <a href="/#tarifs" className="btn-secondary text-center text-lg px-8 py-4">
                  Voir les tarifs
                </a>
              </div>

              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Sans engagement</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Support France</span>
              </p>
            </div>

            {/* Colonne B - Mockup Devis */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 sm:p-6 lg:p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Aperçu module devis</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Devis Preview */}
                <div className="glass-card p-4 mb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Devis N°</p>
                      <p className="font-bold text-foreground">DEV-2024-0142</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-provia-yellow/20 text-provia-yellow text-xs font-medium">
                      En attente
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Client</span>
                      <span className="text-foreground">Martin SARL</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Date</span>
                      <span className="text-foreground">15/01/2024</span>
                    </div>
                  </div>
                  <div className="border-t border-border/50 pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total TTC</span>
                      <span className="text-gradient-orange">2 450,00 €</span>
                    </div>
                  </div>
                </div>

                {/* Actions rapides */}
                <div className="grid grid-cols-3 gap-2">
                  {["Envoyer", "Dupliquer", "Facturer"].map((action, i) => (
                    <div key={i} className="glass-card p-2 text-center">
                      <p className="text-xs text-muted-foreground">{action}</p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-gradient-orange">12</p>
                    <p className="text-xs text-muted-foreground">Devis ce mois</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-teal">67%</p>
                    <p className="text-xs text-muted-foreground">Taux acceptation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2 - Problème (2 colonnes inversées) */}
      <section className="py-10 sm:py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Illustration problème */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="font-semibold text-foreground">Situation actuelle</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "30 min par devis sur Excel", color: "destructive" },
                    { icon: AlertTriangle, text: "Erreurs de calcul fréquentes", color: "destructive" },
                    { icon: FileText, text: "Documents non uniformes", color: "destructive" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Je passais 2h par semaine juste sur mes devis..."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Artisan plombier, avant Provia BASE</p>
                </div>
              </div>
            </div>

            {/* Colonne B - Texte problème */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Pourquoi perdre du temps sur vos <span className="text-gradient-orange">devis</span> ?
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Le devis est souvent le premier document que votre client voit de votre entreprise. Pourtant, sa création est chronophage et source d'erreurs quand elle est faite manuellement.
              </p>

              <ul className="space-y-3">
                {[
                  "Ressaisie des mêmes informations à chaque devis",
                  "Risque d'erreurs de calcul ou de TVA",
                  "Documents non uniformes, image peu professionnelle",
                  "Difficultés à retrouver les anciens devis",
                  "Pas de suivi : le client a-t-il ouvert le devis ?",
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">✗</span>
                    <span className="text-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 3 - Solution (2 colonnes) */}
      <section className="py-10 sm:py-20 lg:py-32 overflow-hidden">
        <div className="glow-teal top-1/2 -right-40" />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Texte solution */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Un <span className="text-gradient-orange">module devis</span> complet et intuitif
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Provia BASE automatise la création de vos devis. Sélectionnez un client, ajoutez vos prestations depuis votre catalogue, le devis est prêt en 2 minutes.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Zap, text: "Création ultra-rapide avec catalogue intégré" },
                  { icon: Palette, text: "Personnalisation complète (logo, couleurs, mentions)" },
                  { icon: Copy, text: "Modèles et duplication en un clic" },
                  { icon: Send, text: "Envoi direct par email avec notification" },
                  { icon: BarChart, text: "Suivi des devis et relances automatiques" },
                  { icon: FileText, text: "Transformation en facture instantanée" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne B - Mockup solution */}
            <div className="relative">
              <div className="glass-card p-4 sm:p-6 lg:p-6 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Nouveau devis</p>
                      <p className="text-xs text-muted-foreground">Création simplifiée</p>
                    </div>
                  </div>

                  {/* Étapes de création */}
                  <div className="space-y-3">
                    {[
                      { step: "1", label: "Sélectionner client", done: true },
                      { step: "2", label: "Ajouter prestations", done: true },
                      { step: "3", label: "Vérifier et envoyer", done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 glass-card">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.done ? 'bg-provia-teal/20' : 'bg-primary/10'}`}>
                          {item.done ? (
                            <Check className="w-4 h-4 text-provia-teal" />
                          ) : (
                            <span className="text-sm font-medium text-primary">{item.step}</span>
                          )}
                        </div>
                        <span className={`text-sm ${item.done ? 'text-muted-foreground' : 'text-foreground font-medium'}`}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Aperçu montant */}
                  <div className="mt-4 p-4 glass-card bg-provia-teal/5 border-provia-teal/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total estimé</span>
                      <span className="text-xl font-bold text-provia-teal">1 850,00 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4 - Bénéfices (Cards) */}
      <section className="py-10 sm:py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-3 sm:mb-4">
              Les avantages du <span className="text-gradient-orange">logiciel de devis</span>
            </h2>
            <p className="text-xs sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Gagnez du temps, réduisez les erreurs et améliorez votre image professionnelle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              { icon: Clock, title: "Gain de temps", desc: "2 min au lieu de 30 min par devis" },
              { icon: CheckCircle2, title: "Zéro erreur", desc: "Calculs automatiques et TVA intégrée" },
              { icon: Palette, title: "Image pro", desc: "Documents soignés à votre image" },
              { icon: BarChart, title: "Suivi complet", desc: "Visibilité sur tous vos devis" },
              { icon: Copy, title: "Catalogue", desc: "Prestations réutilisables" },
              { icon: Send, title: "Envoi facile", desc: "Email direct depuis l'app" },
              { icon: Euro, title: "Facturation", desc: "Conversion en 1 clic" },
              { icon: FileText, title: "Historique", desc: "Tous vos devis archivés" },
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-3 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 5 - CTA Final */}
      <section className="py-10 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-6">
              Simplifiez la création de vos <span className="text-gradient-orange">devis</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8">
              Découvrez comment Provia BASE peut vous faire gagner des heures chaque semaine. Démonstration gratuite et personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/#tarifs"
                className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
              >
                Voir les tarifs
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Devis;
