import { FileText, Users, Settings, BarChart3, Smartphone, MapPin, CheckCircle, Clock, PenTool, ClipboardList, CalendarDays, UserCheck } from "lucide-react";
import managerImage from "@/assets/manager-laptop.jpeg";
import employeeImage from "@/assets/employee-mobile.png";

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="glow-orange top-0 right-0" />
      <div className="glow-green bottom-0 left-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 space-y-24">
        
        {/* Block A - CRM Dirigeant */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Votre <span className="text-gradient-orange">QG</span> : tout votre business centralisé
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Depuis votre tableau de bord, gardez un contrôle total sur votre entreprise. Provia BASE unifie vos devis, vos clients, vos équipes et votre organisation interne dans un espace intuitif et moderne.
            </p>
            
            <ul className="space-y-4">
              {[
                { icon: FileText, text: "Devis & factures en quelques clics" },
                { icon: Users, text: "Fiches clients propres et simples" },
                { icon: CalendarDays, text: "Plannings des interventions et des employés" },
                { icon: UserCheck, text: "Gestion complète des employés" },
                { icon: ClipboardList, text: "Rapport d'intervention depuis le CRM" },
                { icon: BarChart3, text: "Dashboard en temps réel (vision globale)" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image in Glass Card */}
          <div className="relative">
            <div className="glass-card p-3 lg:p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-provia-yellow/20 rounded-full blur-3xl" />
              <img 
                src={managerImage} 
                alt="Dirigeant utilisant Provia BASE" 
                className="w-full h-auto rounded-xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-3 z-20">
                <p className="text-sm font-medium text-foreground">Tout votre business, accessible en un clic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block B - App Mobile Terrain (Highlight) */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl -m-4 lg:-m-8" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Image in Premium Glass Card */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card p-4 lg:p-6 relative overflow-hidden group border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-provia-orange/10 via-transparent to-provia-yellow/10" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-provia-orange/20 rounded-full blur-3xl" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-provia-yellow/20 rounded-full blur-3xl" />
                
                <img 
                  src={employeeImage} 
                  alt="Employé terrain avec l'application Provia FIELD" 
                  className="w-full h-auto rounded-xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                <div className="absolute top-6 right-6 glass-card px-4 py-2 z-20 border-primary/30 bg-primary/10">
                  <span className="text-base font-bold text-primary">Provia FIELD</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 glass-card px-5 py-3 border-primary/30 bg-primary/10">
                <Smartphone className="w-6 h-6 text-primary" />
                <span className="text-base lg:text-lg font-bold text-primary">Application mobile terrain</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold">
                L'app terrain qui accompagne vos{" "}
                <span className="text-gradient-orange">employés</span> partout
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Vos employés accèdent à leurs missions du jour, aux informations clients, aux validations et aux rapports… tout depuis leur app terrain dédiée, synchronisée en temps réel avec votre CRM.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: PenTool, text: "Signature électronique des interventions" },
                  { icon: ClipboardList, text: "Gestion complète de l'intervention avec le client" },
                  { icon: Clock, text: "Pointage en temps réel" },
                  { icon: FileText, text: "Rapport d'intervention automatique" },
                  { icon: CalendarDays, text: "Planning employé relié au CRM" },
                  { icon: CheckCircle, text: "Check-list personnalisée" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-lg">{item.text}</span>
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
