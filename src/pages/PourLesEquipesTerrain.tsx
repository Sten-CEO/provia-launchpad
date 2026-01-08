import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Users,
  MapPin,
  Smartphone,
  FileCheck,
  Camera,
  Bell,
  Wifi,
  Clock,
  Signal
} from "lucide-react";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const PourLesEquipesTerrain = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Application pour équipes terrain - Coordination et mobilité optimales"
        description="Provia BASE offre une application mobile pour équipes terrain : accès aux missions, fiches clients, rapports d'intervention. Connectez bureau et terrain en temps réel."
        keywords="application équipe terrain, gestion équipes terrain, app mobile intervention, coordination terrain, logiciel techniciens terrain, application terrain"
        canonical="/pour-les-equipes-terrain"
      />
      <Navbar />

      {/* HERO Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-20 lg:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="glow-orange top-20 -right-40 animate-pulse-glow opacity-40 sm:opacity-100" />
        <div className="glow-teal top-1/2 -left-60 animate-pulse-glow opacity-40 sm:opacity-100" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-8 animate-fade-in">
              <p className="text-primary font-semibold text-lg">Application pour équipes terrain</p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight">
                <span className="text-gradient-orange">Application mobile</span> pour équipes terrain et techniciens
              </h1>

              <p className="text-base text-muted-foreground sm:hidden">
                Application mobile pour vos techniciens : missions, fiches clients, rapports en temps réel.
              </p>
              <p className="hidden sm:block text-lg lg:text-xl text-muted-foreground">
                Vos techniciens interviennent sur le terrain ? Avec l'application mobile Provia BASE, ils accèdent à toutes les informations nécessaires et remontent les données instantanément. Fini les allers-retours inutiles et les informations perdues.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Smartphone, text: "Application mobile intuitive" },
                  { icon: FileCheck, text: "Accès aux missions en temps réel" },
                  { icon: Wifi, text: "Mode hors connexion" },
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
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/fonctionnalites/application-mobile"
                  className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold"
                >
                  Découvrir l'app mobile
                </Link>
              </div>

              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> iOS & Android</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Mode offline</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Facile à utiliser</span>
              </p>
            </div>

            {/* Right - Mobile App Preview */}
            <div className="relative animate-fade-in hidden sm:block" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-6 relative overflow-hidden animate-float">
                {/* Mobile Phone Frame */}
                <div className="mx-auto w-64 rounded-3xl border-4 border-border bg-background p-2 shadow-2xl">
                  {/* Phone Notch */}
                  <div className="flex justify-center mb-2">
                    <div className="w-24 h-6 bg-border rounded-full" />
                  </div>

                  {/* App Screen */}
                  <div className="bg-muted/20 rounded-2xl p-3 space-y-3">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-sm">Mes missions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Signal className="w-3 h-3 text-provia-teal" />
                        <Wifi className="w-3 h-3 text-provia-teal" />
                      </div>
                    </div>

                    {/* Mission Cards */}
                    {[
                      { client: "M. Dubois", address: "15 rue...", time: "10h00", status: "En cours" },
                      { client: "Mme Martin", address: "8 av...", time: "14h00", status: "À venir" },
                      { client: "SARL Tech", address: "22 bd...", time: "16h30", status: "À venir" },
                    ].map((mission, i) => (
                      <div key={i} className="glass-card p-2.5 bg-background/80">
                        <div className="flex items-start gap-2 mb-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${i === 0 ? 'bg-provia-teal' : 'bg-muted-foreground'}`} />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-foreground">{mission.client}</p>
                            <p className="text-[10px] text-muted-foreground">{mission.address}</p>
                          </div>
                          <span className="text-[10px] font-medium text-primary">{mission.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-2">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <Camera className="w-3 h-3 text-muted-foreground" />
                          <FileCheck className="w-3 h-3 text-muted-foreground" />
                          <span className={`ml-auto text-[9px] px-1.5 py-0.5 rounded ${i === 0 ? 'bg-provia-teal/20 text-provia-teal' : 'bg-muted text-muted-foreground'}`}>
                            {mission.status}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {[
                        { icon: Camera, label: "Photo" },
                        { icon: FileCheck, label: "Rapport" },
                        { icon: MapPin, label: "GPS" },
                      ].map((action, i) => (
                        <div key={i} className="glass-card p-2 text-center bg-primary/5">
                          <action.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                          <span className="text-[9px] text-foreground">{action.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phone Bottom Bar */}
                  <div className="flex justify-center mt-2">
                    <div className="w-32 h-1 bg-border rounded-full" />
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
                    <h3 className="font-semibold text-lg">Infos inaccessibles</h3>
                  </div>

                  {[
                    { issue: "Appels au bureau constants", icon: "📞" },
                    { issue: "Fiches client sur papier", icon: "📄" },
                    { issue: "Photos dans le téléphone perso", icon: "📱" },
                    { issue: "Rapports remplis le soir", icon: "📝" },
                  ].map((item, i) => (
                    <div key={i} className={`glass-card p-4 bg-destructive/5 flex items-center gap-3 ${i >= 3 ? 'hidden sm:flex' : ''}`}>
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm text-foreground flex-1">{item.issue}</span>
                      <span className="text-destructive">✗</span>
                    </div>
                  ))}

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">= Perte de temps et d'infos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-destructive" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                  Le quotidien des <span className="text-gradient-orange">équipes terrain</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground">
                Vos collaborateurs passent leurs journées en déplacement. Sans les bons outils, ils perdent du temps à chercher des informations, à appeler le bureau, ou à remplir de la paperasse qui sera ressaisie ensuite.
              </p>

              <div className="space-y-3">
                {[
                  "Fiches client sur papier ou inexistantes",
                  "Appels incessants au bureau pour des infos",
                  "Rapports d'intervention remplis a posteriori",
                  "Photos stockées dans les téléphones personnels",
                  "Difficultés à prouver ce qui a été fait",
                  "Retards dans la transmission des informations"
                ].map((problem, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 bg-destructive/5 rounded-lg ${i >= 3 ? 'hidden sm:flex' : ''}`}>
                    <span className="text-destructive font-bold">✗</span>
                    <span className="text-foreground">{problem}</span>
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
                L'<span className="text-gradient-orange">application mobile</span> qui change tout
              </h2>

              <p className="text-lg text-muted-foreground">
                Provia BASE équipe vos techniciens d'une application intuitive qui leur donne tout ce dont ils ont besoin sur le terrain. Autonomie maximale, coordination parfaite.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: FileCheck, title: "Accès aux missions", desc: "Planning, détails, itinéraire GPS" },
                  { icon: Users, title: "Fiches clients complètes", desc: "Historique, notes, équipements" },
                  { icon: Camera, title: "Photos et documents", desc: "Centralisés et horodatés" },
                  { icon: Smartphone, title: "Rapport digital", desc: "Avec signature client sur écran" },
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-provia-teal/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-provia-teal" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold block">{feature.title}</span>
                      <span className="text-sm text-muted-foreground">{feature.desc}</span>
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
                    <h3 className="font-semibold text-lg">App complète</h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { feature: "Consulter missions", icon: FileCheck, available: true },
                      { feature: "Voir fiches clients", icon: Users, available: true },
                      { feature: "Prendre photos", icon: Camera, available: true },
                      { feature: "Signer rapport", icon: Check, available: true },
                      { feature: "Mode hors ligne", icon: Wifi, available: true },
                      { feature: "GPS intégré", icon: MapPin, available: true },
                    ].map((item, i) => (
                      <div key={i} className={`glass-card p-3 bg-provia-teal/5 flex items-center gap-3 ${i >= 3 ? 'hidden sm:flex' : ''}`}>
                        <item.icon className="w-5 h-5 text-provia-teal" />
                        <span className="text-sm font-medium text-foreground flex-1">{item.feature}</span>
                        <Check className="w-4 h-4 text-provia-teal" />
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm font-semibold text-provia-teal">= Techniciens autonomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* BÉNÉFICES Section - Cards Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Une <span className="text-gradient-orange">coordination parfaite</span> bureau / terrain
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bénéfices pour toute l'équipe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Côté bureau",
                description: "Vision temps réel, réassignation facile, facturation rapide"
              },
              {
                icon: Smartphone,
                title: "Côté terrain",
                description: "Infos dans la poche, moins d'administratif, autonomie totale"
              },
              {
                icon: Bell,
                title: "Notifications",
                description: "Nouvelles missions, modifications, messages instantanés"
              },
              {
                icon: Wifi,
                title: "Mode offline",
                description: "Fonctionne sans réseau, synchronise automatiquement"
              },
              {
                icon: Camera,
                title: "Preuves photo",
                description: "Photos horodatées, centralisées, accessibles"
              },
              {
                icon: FileCheck,
                title: "Signature client",
                description: "Rapport signé sur place, validation immédiate"
              },
            ].map((benefit, i) => (
              <div key={i} className={`glass-card p-4 sm:p-6 hover:shadow-lg transition-shadow ${i >= 3 ? 'hidden sm:block' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-provia-teal/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-provia-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Final */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-6">
              Équipez vos <span className="text-gradient-orange">équipes terrain</span> dès maintenant
            </h2>
            <p className="text-muted-foreground mb-8 text-base sm:hidden">
              Démonstration personnalisée de l'app mobile Provia BASE.
            </p>
            <p className="text-muted-foreground mb-8 text-lg hidden sm:block">
              Découvrez comment l'application mobile Provia BASE peut améliorer la productivité et la satisfaction de vos techniciens. Démonstration personnalisée disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/#tarifs"
                className="text-primary hover:text-primary/80 underline sm:btn-secondary sm:px-8 sm:py-4 sm:rounded-xl sm:text-lg font-semibold flex items-center justify-center"
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

export default PourLesEquipesTerrain;
