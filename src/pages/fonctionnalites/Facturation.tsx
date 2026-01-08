import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Receipt,
  CheckCircle2,
  ArrowRight,
  Euro,
  Bell,
  FileCheck,
  PieChart,
  Shield,
  Send,
  Clock,
  AlertTriangle,
  Check,
  CreditCard,
  TrendingUp
} from "lucide-react";
import heroImageFacturation from "@/assets/Facturation.jpeg";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const Facturation = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de facturation - Facturez en quelques clics"
        description="Facturez rapidement et professionnellement avec Provia BASE. Création de factures, suivi des paiements, relances automatiques, conformité légale. Solution de facturation pour TPE et PME."
        keywords="logiciel facturation, créer facture, facturation en ligne, logiciel facture, suivi paiements, relance impayés, facturation TPE PME"
        canonical="/fonctionnalites/facturation"
      />
      <Navbar />

      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[100dvh] flex flex-col max-sm:justify-start justify-center max-sm:py-0 pt-16 sm:pt-32 pb-8 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Mobile Hero Image - Right side, top section only */}
        <div className="sm:hidden absolute top-0 -right-4 w-[40%] h-[55%] z-0">
          <div
            className="absolute inset-0 bg-contain bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${heroImageFacturation})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="glow-orange top-20 -right-40 opacity-30 animate-pulse-glow max-sm:hidden" />
        <div className="glow-teal top-1/2 -left-60 opacity-30 animate-pulse-glow max-sm:hidden" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-20">
          {/* Mobile: Badge + Headline at top left ON the image */}
          <div className="sm:hidden space-y-4 animate-fade-in max-w-[75%] mb-8">
            <span className="inline-block text-primary font-medium text-xs px-3 py-1.5 border border-primary/40 rounded-full bg-primary/5">Fonctionnalité Facturation</span>
            <h1 className="text-[1.65rem] leading-[1.25] font-medium tracking-tight">
              Logiciel de <span className="text-gradient-orange">facturation</span> TPE/PME
            </h1>
          </div>

          {/* Mobile: Content below image */}
          <div className="sm:hidden text-center space-y-5 animate-fade-in mt-[25vh]">
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Factures conformes en quelques clics. Suivi des paiements et relances automatiques intégrés.
            </p>

            {/* Mobile: Icons with descriptions */}
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              {[
                { icon: Receipt, text: "Factures conformes et professionnelles" },
                { icon: Bell, text: "Relances automatiques programmables" },
                { icon: PieChart, text: "Suivi trésorerie en temps réel" },
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
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-provia-teal" /> Conforme légalement</span>
            </p>
          </div>

          {/* Desktop: Original 2-column layout */}
          <div className="hidden sm:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-primary font-medium text-lg">Fonctionnalité Facturation</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Logiciel de <span className="text-gradient-orange">facturation</span> pour TPE et PME
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Créez des factures conformes en quelques clics, suivez vos paiements et automatisez vos relances. Plus d'impayés oubliés.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Receipt, text: "Factures conformes et professionnelles" },
                  { icon: Bell, text: "Relances automatiques programmables" },
                  { icon: PieChart, text: "Suivi trésorerie en temps réel" },
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
                  Voir le module facturation
                </Link>
                <a href="/#tarifs" className="btn-secondary text-center text-lg px-8 py-4">
                  Voir les tarifs
                </a>
              </div>

              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Sans engagement</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Conforme légalement</span>
              </p>
            </div>

            {/* Mockup Facturation */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 sm:p-6 lg:p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Module facturation</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-gradient-orange">24 350 €</p>
                    <p className="text-xs text-muted-foreground">CA ce mois</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-yellow">3 200 €</p>
                    <p className="text-xs text-muted-foreground">En attente</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-teal">95%</p>
                    <p className="text-xs text-muted-foreground">Recouvrement</p>
                  </div>
                </div>

                {/* Factures récentes */}
                <div className="glass-card p-4">
                  <p className="text-xs text-muted-foreground mb-3">Factures récentes</p>
                  <div className="space-y-2">
                    {[
                      { num: "FAC-0089", client: "Martin SARL", amount: "1 250 €", status: "Payée", color: "provia-teal" },
                      { num: "FAC-0088", client: "Dupont & Fils", amount: "890 €", status: "En attente", color: "provia-yellow" },
                      { num: "FAC-0087", client: "ABC Services", amount: "2 100 €", status: "Payée", color: "provia-teal" },
                    ].map((fac, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <div>
                          <p className="text-sm font-medium text-foreground">{fac.num}</p>
                          <p className="text-xs text-muted-foreground">{fac.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-foreground">{fac.amount}</p>
                          <span className={`text-[10px] px-2 py-0.5 rounded bg-${fac.color}/20 text-${fac.color}`}>
                            {fac.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2 - Problème */}
      <section className="py-10 sm:py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="font-semibold text-foreground">Impact sur votre trésorerie</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "Factures envoyées en retard" },
                    { icon: Euro, text: "Impayés non relancés = argent perdu" },
                    { icon: AlertTriangle, text: "Risque de non-conformité fiscale" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "J'avais 8 000€ d'impayés oubliés avant de passer à Provia BASE..."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Dirigeant PME bâtiment</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Les problèmes de la <span className="text-gradient-orange">facturation manuelle</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                La facturation est essentielle à votre trésorerie, mais elle est souvent reléguée au second plan. Résultat : retards, oublis et impayés.
              </p>

              <ul className="space-y-3">
                {[
                  "Factures envoyées en retard, après l'intervention",
                  "Numérotation manuelle source d'erreurs",
                  "Oubli de certaines prestations à facturer",
                  "Impayés non relancés, argent perdu",
                  "Non-conformité aux obligations légales",
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

      {/* SECTION 3 - Solution */}
      <section className="py-10 sm:py-20 lg:py-32 overflow-hidden">
        <div className="glow-teal top-1/2 -right-40" />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Une <span className="text-gradient-orange">facturation</span> sans friction
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Provia BASE automatise les tâches répétitives pour que vous puissiez facturer sereinement. Transformez vos devis en factures en un clic.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: FileCheck, text: "Création instantanée depuis devis ou zéro" },
                  { icon: Shield, text: "Conformité garantie (mentions légales)" },
                  { icon: Send, text: "Envoi automatique par email" },
                  { icon: Bell, text: "Relances automatiques programmables" },
                  { icon: Euro, text: "Suivi des paiements en temps réel" },
                  { icon: PieChart, text: "Tableaux de bord et indicateurs" },
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

            <div className="relative">
              <div className="glass-card p-4 sm:p-6 lg:p-6 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Receipt className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Suivi des paiements</p>
                      <p className="text-xs text-muted-foreground">Vue d'ensemble</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 glass-card">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Taux de recouvrement</span>
                        <span className="text-lg font-bold text-provia-teal">95%</span>
                      </div>
                      <div className="w-full h-2 bg-muted/30 rounded-full">
                        <div className="h-full bg-provia-teal rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 glass-card text-center">
                        <CreditCard className="w-5 h-5 text-provia-teal mx-auto mb-1" />
                        <p className="text-lg font-bold text-foreground">21 150 €</p>
                        <p className="text-xs text-muted-foreground">Encaissé</p>
                      </div>
                      <div className="p-3 glass-card text-center">
                        <Clock className="w-5 h-5 text-provia-yellow mx-auto mb-1" />
                        <p className="text-lg font-bold text-foreground">3 200 €</p>
                        <p className="text-xs text-muted-foreground">En attente</p>
                      </div>
                    </div>

                    <div className="p-3 glass-card bg-provia-teal/5 border-provia-teal/20">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-provia-teal" />
                        <span className="text-sm text-foreground">2 relances programmées</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4 - Bénéfices */}
      <section className="py-10 sm:py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-4">
              Les bénéfices pour votre <span className="text-gradient-orange">trésorerie</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Facturez plus vite, encaissez plus vite, et gardez le contrôle sur vos finances.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              { icon: TrendingUp, title: "Paiement rapide", desc: "Facturation rapide = encaissement rapide" },
              { icon: Bell, title: "Moins d'impayés", desc: "Relances automatiques efficaces" },
              { icon: PieChart, title: "Vision claire", desc: "CA et trésorerie en temps réel" },
              { icon: CheckCircle2, title: "Zéro erreur", desc: "Numérotation automatique" },
              { icon: Shield, title: "Conformité", desc: "Mentions légales obligatoires" },
              { icon: Receipt, title: "Historique", desc: "Toutes vos factures archivées" },
              { icon: Send, title: "Envoi facile", desc: "Email direct depuis l'app" },
              { icon: Clock, title: "Gain de temps", desc: "Automatisation complète" },
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

      {/* SECTION 5 - CTA */}
      <section className="py-10 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-6">
              Optimisez votre <span className="text-gradient-orange">facturation</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8">
              Découvrez comment Provia BASE peut améliorer votre trésorerie grâce à une facturation plus efficace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="/#tarifs" className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4">
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

export default Facturation;
