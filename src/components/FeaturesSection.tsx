import { FileText, Users, Settings, BarChart3, Smartphone, MapPin, CheckCircle, Clock, PenTool, ClipboardList, CalendarDays, UserCheck } from "lucide-react";
import managerImage from "@/assets/manager-laptop.jpeg";
import employeeImage from "@/assets/employee-mobile.png";

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
      <div className="glow-orange top-0 right-0 opacity-40 sm:opacity-100" />
      <div className="glow-green bottom-0 left-0 opacity-40 sm:opacity-100" />

      <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 space-y-12 sm:space-y-16 lg:space-y-24">

        {/* Block A - CRM Dirigeant */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            {/* Mobile: concise title */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold sm:font-bold leading-tight">
              <span className="sm:hidden">Votre <span className="text-gradient-orange">QG</span> centralisé</span>
              <span className="hidden sm:inline">Votre <span className="text-gradient-orange">QG</span> : tout votre business centralisé</span>
            </h2>
            {/* Mobile: short copy */}
            <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              <span className="sm:hidden">Devis, clients, équipes et planning dans un seul espace intuitif.</span>
              <span className="hidden sm:inline">Depuis votre tableau de bord, gardez un contrôle total sur votre entreprise. Provia BASE unifie vos devis, vos clients, vos équipes et votre organisation interne dans un espace intuitif et moderne.</span>
            </p>

            {/* Features list - 4 on mobile, 6 on desktop (all in DOM for SEO) */}
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              {[
                { icon: FileText, text: "Devis & factures en quelques clics" },
                { icon: Users, text: "Fiches clients propres et simples" },
                { icon: CalendarDays, text: "Plannings des interventions et des employés" },
                { icon: UserCheck, text: "Gestion complète des employés" },
                { icon: ClipboardList, text: "Rapport d'intervention depuis le CRM" },
                { icon: BarChart3, text: "Dashboard en temps réel (vision globale)" },
              ].map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2.5 sm:gap-3 ${
                    i >= 4 ? 'max-sm:h-0 max-sm:overflow-hidden max-sm:opacity-0' : ''
                  }`}
                  aria-hidden={i >= 4 ? "true" : undefined}
                >
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-foreground/90 sm:text-foreground font-normal sm:font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image - cleaner on mobile */}
          <div className="relative">
            <div className="glass-card p-2 sm:p-3 lg:p-4 relative overflow-hidden group">
              <img
                src={managerImage}
                alt="Dirigeant utilisant Provia BASE"
                className="w-full h-auto rounded-lg sm:rounded-xl relative z-10"
              />
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 glass-card p-2 sm:p-3 z-20">
                <p className="text-xs sm:text-sm font-medium text-foreground">Tout votre business, en un clic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block B - App Mobile Terrain (Key differentiator - emphasized on mobile) */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl -m-3 sm:-m-4 lg:-m-8" />

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center relative z-10">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card p-2 sm:p-4 lg:p-6 relative overflow-hidden group border-primary/20">
                <img
                  src={employeeImage}
                  alt="Employé terrain avec l'application Provia FIELD"
                  className="w-full h-auto rounded-lg sm:rounded-xl relative z-10"
                />
                <div className="absolute top-3 sm:top-6 right-3 sm:right-6 glass-card px-2.5 sm:px-4 py-1.5 sm:py-2 z-20 border-primary/30 bg-primary/10">
                  <span className="text-xs sm:text-base font-semibold sm:font-bold text-primary">Provia FIELD</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              {/* Badge - smaller on mobile */}
              <div className="inline-flex items-center gap-2 sm:gap-3 glass-card px-3 sm:px-5 py-2 sm:py-3 border-primary/30 bg-primary/10">
                <Smartphone className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                <span className="text-xs sm:text-base lg:text-lg font-semibold sm:font-bold text-primary">App mobile terrain</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold sm:font-bold leading-tight">
                <span className="sm:hidden">Vos <span className="text-gradient-orange">employés</span> connectés partout</span>
                <span className="hidden sm:inline">L'app terrain qui accompagne vos <span className="text-gradient-orange">employés</span> partout</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                <span className="sm:hidden">Missions, infos clients, rapports. Tout synchronisé en temps réel.</span>
                <span className="hidden sm:inline">Vos employés accèdent à leurs missions du jour, aux informations clients, aux validations et aux rapports… tout depuis leur app terrain dédiée, synchronisée en temps réel avec votre CRM.</span>
              </p>

              {/* Features - compact on mobile */}
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                {[
                  { icon: PenTool, text: "Signature électronique des interventions" },
                  { icon: ClipboardList, text: "Gestion complète de l'intervention avec le client" },
                  { icon: Clock, text: "Pointage en temps réel" },
                  { icon: FileText, text: "Rapport d'intervention automatique" },
                  { icon: CalendarDays, text: "Planning employé relié au CRM" },
                  { icon: CheckCircle, text: "Check-list personnalisée" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2.5 sm:gap-3 ${
                      i >= 4 ? 'max-sm:h-0 max-sm:overflow-hidden max-sm:opacity-0' : ''
                    }`}
                    aria-hidden={i >= 4 ? "true" : undefined}
                  >
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg text-foreground/90 sm:text-foreground font-normal sm:font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
