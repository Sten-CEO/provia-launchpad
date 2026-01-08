import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Briefcase,
  Target,
  UserCheck,
  Calendar,
  ClipboardList,
  RefreshCw,
  MessageSquare,
  History,
  Camera
} from "lucide-react";

const SectionDivider = () => (
  <div className="w-full px-5 sm:px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const PourLesEntreprisesDeServices = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion pour entreprises de services - Optimisez vos interventions"
        description="Provia BASE est le logiciel de gestion pour entreprises de services : gestion clients, planning interventions, devis, factures. Optimisez chaque prestation chez vos clients."
        keywords="logiciel entreprise services, gestion interventions, logiciel prestation services, CRM services, planning interventions, suivi clients"
        canonical="/pour-les-entreprises-de-services"
      />
      <Navbar />

      {/* HERO Section */}
      <section className="relative min-h-[100dvh] sm:min-h-screen pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-20 lg:pb-32 overflow-hidden flex flex-col max-sm:justify-start justify-center max-sm:py-0">
        {/* Background Glows */}
        <div className="glow-orange top-20 -right-40 animate-pulse-glow opacity-30 sm:opacity-100 max-sm:hidden" />
        <div className="glow-teal top-1/2 -left-60 animate-pulse-glow opacity-25 sm:opacity-100 max-sm:hidden" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <span className="inline-block text-primary font-medium text-xs sm:text-lg tracking-wide max-sm:px-3 max-sm:py-1.5 max-sm:border max-sm:border-primary/40 max-sm:rounded-full max-sm:bg-primary/5">Logiciel pour entreprises de services</span>
              <h1 className="text-[1.65rem] leading-[1.25] sm:text-4xl lg:text-5xl font-medium sm:font-bold tracking-tight">
                <span className="hidden sm:inline">Logiciel de gestion pour <span className="text-gradient-orange">entreprises de services</span></span>
                <span className="sm:hidden">Gérez vos <span className="text-gradient-orange">interventions</span> clients</span>
              </h1>

              <p className="hidden sm:block text-lg lg:text-xl text-muted-foreground">
                Maintenance, dépannage, installation, SAV... Votre métier vous amène régulièrement chez vos clients. Provia BASE vous aide à planifier, suivre et facturer vos prestations de services avec une efficacité maximale.
              </p>
              <p className="sm:hidden text-sm text-muted-foreground">
                Planning, bons d'intervention, facturation : tout pour gérer vos prestations efficacement.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: UserCheck, text: "Fiches clients complètes" },
                  { icon: Calendar, text: "Planning intelligent des interventions" },
                  { icon: ClipboardList, text: "Bons d'intervention numériques" },
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  Demander une démo gratuite
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
                <Link
                  to="/fonctionnalites"
                  className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold"
                >
                  Voir les fonctionnalités
                </Link>
              </div>

              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Sans engagement</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> App mobile terrain</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Support France</span>
              </p>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative animate-fade-in hidden sm:block" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 lg:p-6 animate-float">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Interventions du jour</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-gradient-orange">12</p>
                    <p className="text-xs text-muted-foreground">Interventions</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-foreground">8</p>
                    <p className="text-xs text-muted-foreground">Terminées</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-teal">4</p>
                    <p className="text-xs text-muted-foreground">En cours</p>
                  </div>
                </div>

                {/* Upcoming Interventions */}
                <div className="glass-card p-3 mb-3">
                  <p className="text-xs text-muted-foreground mb-2">Prochaines interventions</p>
                  <div className="space-y-2">
                    {[
                      { client: "Hotel Central", type: "Maintenance", time: "14h00" },
                      { client: "Restaurant Le Gourmet", type: "Dépannage", time: "16h30" },
                      { client: "Copro Les Roses", type: "Contrôle", time: "18h00" },
                    ].map((intervention, i) => (
                      <div key={i} className="p-2 rounded bg-muted/30 flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">{intervention.time.slice(0,2)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-foreground truncate">{intervention.client}</p>
                          <p className="text-[10px] text-muted-foreground">{intervention.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="glass-card p-3">
                  <p className="text-xs text-muted-foreground mb-2">Activité récente</p>
                  <div className="space-y-1.5">
                    {[
                      { action: "Rapport signé - SARL Dupont", status: "success" },
                      { action: "Photo ajoutée - Client ABC", status: "success" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-provia-teal" />
                        <span className="text-foreground truncate">{activity.action}</span>
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

      {/* PROBLÈME Section - Inverted */}
      <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
        <div className="glow-orange bottom-0 left-0 opacity-40 sm:opacity-100" />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Mockup */}
            <div className="relative order-2 lg:order-1 animate-fade-in hidden sm:block">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-destructive/10 rounded-full blur-3xl" />

                {/* Problem Illustration */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-lg">Interventions mal préparées</h3>
                  </div>

                  {[
                    { issue: "Historique client introuvable", icon: "📋" },
                    { issue: "Pièces oubliées", icon: "🔧" },
                    { issue: "Rapports perdus", icon: "📄" },
                    { issue: "Client répète son problème", icon: "😕" },
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-4 bg-destructive/5 flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm text-foreground flex-1">{item.issue}</span>
                      <span className="text-destructive">✗</span>
                    </div>
                  ))}

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">= Client insatisfait</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <Target className="w-6 sm:w-7 h-6 sm:h-7 text-destructive" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                  <span className="hidden sm:inline">Les enjeux des <span className="text-gradient-orange">entreprises de services</span></span>
                  <span className="sm:hidden">Les <span className="text-gradient-orange">enjeux</span></span>
                </h2>
              </div>

              <p className="hidden sm:block text-lg text-muted-foreground">
                Quand votre activité repose sur des interventions chez le client, la qualité de votre organisation fait toute la différence. Chaque détail compte : historique du client, pièces à prévoir, temps de trajet, facturation rapide...
              </p>
              <p className="sm:hidden text-sm text-muted-foreground">
                Interventions chez le client : l'organisation fait la différence.
              </p>

              <div className="space-y-3">
                {[
                  "Difficultés à retrouver l'historique d'un client",
                  "Interventions mal préparées (pièces manquantes...)",
                  "Planning difficile à optimiser",
                  "Retours terrain non centralisés",
                  "Délais de facturation trop longs",
                  "Clients qui doivent répéter leur problème"
                ].map((problem, i) => (
                  <div key={i} className={`flex items-start gap-3 p-2 sm:p-3 bg-destructive/5 rounded-lg ${i >= 3 ? 'hidden sm:flex' : ''}`}>
                    <span className="text-destructive font-bold text-sm sm:text-base">✗</span>
                    <span className="text-foreground text-sm sm:text-base">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SOLUTION Section */}
      <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
        <div className="glow-teal top-0 right-0 opacity-40 sm:opacity-100" />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                <span className="hidden sm:inline">Une <span className="text-gradient-orange">solution complète</span> pour les métiers du service</span>
                <span className="sm:hidden">La <span className="text-gradient-orange">solution</span></span>
              </h2>

              <p className="hidden sm:block text-lg text-muted-foreground">
                Provia BASE couvre l'intégralité du cycle de vie de vos interventions, de la demande initiale à la facturation. Chaque intervention bien préparée, bien tracée, bien facturée.
              </p>
              <p className="sm:hidden text-sm text-muted-foreground">
                Gérez le cycle complet : planning, intervention, rapport, facturation.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: UserCheck, title: "Fiche client complète", desc: "Historique, équipements, contrats" },
                  { icon: Calendar, title: "Planning intelligent", desc: "Optimisez les déplacements" },
                  { icon: ClipboardList, title: "Bons d'intervention", desc: "Rapports sur mobile avec photos" },
                  { icon: RefreshCw, title: "Contrats de maintenance", desc: "Gérez les récurrences" },
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 ${i >= 3 ? 'hidden sm:flex' : ''}`}>
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-provia-teal/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 sm:w-5 h-4 sm:h-5 text-provia-teal" />
                    </div>
                    <div>
                      <span className="text-foreground font-medium sm:font-semibold block text-sm sm:text-base">{feature.title}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{feature.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Mockup */}
            <div className="relative animate-fade-in hidden sm:block" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-6 relative overflow-hidden animate-float">
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-provia-teal/20 rounded-full blur-3xl" />

                {/* Solution Illustration */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-provia-teal/10 flex items-center justify-center">
                      <Check className="w-6 h-6 text-provia-teal" />
                    </div>
                    <h3 className="font-semibold text-lg">Cycle complet</h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { step: "1. Planification", icon: Calendar, color: "bg-blue-500/10" },
                      { step: "2. Intervention terrain", icon: ClipboardList, color: "bg-green-500/10" },
                      { step: "3. Rapport + Photos", icon: Camera, color: "bg-purple-500/10" },
                      { step: "4. Facturation", icon: Check, color: "bg-provia-teal/10" },
                    ].map((item, i) => (
                      <div key={i} className={`glass-card p-3 ${item.color} flex items-center gap-3`}>
                        <item.icon className="w-5 h-5 text-provia-teal" />
                        <span className="text-sm font-medium text-foreground">{item.step}</span>
                        <Check className="w-4 h-4 text-provia-teal ml-auto" />
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm font-semibold text-provia-teal">= Client satisfait et fidèle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* BÉNÉFICES Section - Cards Grid */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-3 sm:mb-4">
              Les résultats pour votre <span className="text-gradient-orange">entreprise</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Optimisez chaque intervention et fidélisez vos clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: UserCheck,
                title: "Clients satisfaits",
                description: "Interventions mieux préparées et suivi personnalisé"
              },
              {
                icon: Calendar,
                title: "Planning optimisé",
                description: "Moins de temps perdu en déplacement"
              },
              {
                icon: ClipboardList,
                title: "Facturation rapide",
                description: "Facturez immédiatement après l'intervention"
              },
              {
                icon: History,
                title: "Traçabilité totale",
                description: "Historique complet de chaque client"
              },
              {
                icon: MessageSquare,
                title: "Communication fluide",
                description: "Bureau et terrain synchronisés"
              },
              {
                icon: RefreshCw,
                title: "Contrats récurrents",
                description: "Gérez la maintenance préventive facilement"
              },
            ].map((benefit, i) => (
              <div key={i} className={`glass-card p-4 sm:p-6 hover:shadow-lg transition-shadow ${i >= 3 ? 'hidden sm:block' : ''}`}>
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-provia-teal/10 flex items-center justify-center mb-3 sm:mb-4">
                  <benefit.icon className="w-5 sm:w-6 h-5 sm:h-6 text-provia-teal" />
                </div>
                <h3 className="text-base sm:text-lg font-medium sm:font-semibold mb-1.5 sm:mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Final */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-4 sm:mb-6">
              <span className="hidden sm:inline">Optimisez chaque <span className="text-gradient-orange">intervention</span></span>
              <span className="sm:hidden">Prêt à <span className="text-gradient-orange">commencer</span> ?</span>
            </h2>
            <p className="hidden sm:block text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut transformer votre gestion des interventions clients. Démonstration personnalisée pour votre secteur d'activité.
            </p>
            <p className="sm:hidden text-sm text-muted-foreground mb-6">
              Demandez votre démo gratuite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
              <Link
                to="/#tarifs"
                className="hidden sm:inline-flex btn-secondary px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Voir les tarifs
              </Link>
              <Link
                to="/#tarifs"
                className="sm:hidden text-sm text-primary underline"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PourLesEntreprisesDeServices;
