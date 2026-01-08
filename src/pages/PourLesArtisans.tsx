import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hammer, Building, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

const PourLesArtisans = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[100dvh] sm:min-h-screen pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-20 lg:pb-32 overflow-hidden flex flex-col max-sm:justify-start justify-center max-sm:py-0">
        {/* Background Glows */}
        <div className="glow-orange top-20 -right-40 animate-pulse-glow opacity-30 sm:opacity-100 max-sm:hidden" />
        <div className="glow-teal top-1/2 -left-60 animate-pulse-glow opacity-25 sm:opacity-100 max-sm:hidden" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-medium text-xs sm:text-lg mb-4 sm:mb-0 max-sm:px-3 max-sm:py-1.5 max-sm:border max-sm:border-primary/40 max-sm:rounded-full max-sm:bg-primary/5">Pour les Artisans</span>
            <h1 className="text-[1.65rem] leading-[1.25] sm:text-4xl lg:text-5xl font-medium sm:font-bold mb-6 tracking-tight max-sm:mt-4">
              <span className="sm:hidden">Logiciel de gestion pour <span className="text-gradient-orange">artisans</span> et TPE/PME</span>
              <span className="hidden sm:inline">Un logiciel de gestion pour <span className="text-gradient-orange">artisans</span> et TPE/PME avec équipes terrain</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground mb-8">
              <span className="sm:hidden">Devis, factures, planning : tout centralisé pour votre gestion quotidienne.</span>
              <span className="hidden sm:inline">Provia BASE est le logiciel de gestion d'entreprise qui répond aux besoins concrets des artisans, des TPE et des PME dont les équipes interviennent sur le terrain. Devis, factures, gestion clients, planning des interventions : tout est centralisé dans un outil simple et accessible.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/fonctionnalites"
                className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
              >
                Voir les fonctionnalités
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
      </div>

      {/* Introduction */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-4 sm:p-6 lg:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-6">
                Pourquoi un logiciel de gestion adapté aux <span className="text-gradient-orange">métiers terrain</span> ?
              </h2>
              <p className="text-muted-foreground mb-4 text-sm sm:text-lg">
                Les artisans et les entreprises avec des équipes terrain ont des besoins spécifiques que les logiciels généralistes ne couvrent pas. Entre les devis à envoyer rapidement, les interventions à planifier, les équipes à coordonner et les factures à générer, il vous faut un outil conçu pour votre réalité quotidienne.
              </p>
              <p className="text-muted-foreground text-sm sm:text-lg">
                Provia BASE est un <strong>logiciel de gestion d'entreprise</strong> pensé pour centraliser toutes ces tâches. Fini les fichiers Excel éparpillés, les oublis de relances et les plannings sur papier. Avec notre <strong>application mobile terrain</strong>, vos équipes accèdent aux informations clients et aux missions directement sur le chantier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section TPE Artisans */}
      <section className="py-10 sm:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Hammer className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                Logiciel de gestion pour <span className="text-gradient-orange">TPE Artisans</span>
              </h2>
            </div>

            <div className="glass-card p-4 sm:p-6 lg:p-8 mb-8">
              <p className="text-muted-foreground mb-6 text-sm sm:text-lg">
                Vous êtes artisan indépendant ou dirigez une petite équipe ? Votre temps est précieux et vous ne pouvez pas vous permettre de perdre des heures sur des tâches administratives. Le <strong>logiciel devis facture</strong> intégré à Provia BASE vous permet de créer des documents professionnels en quelques clics.
              </p>

              <h3 className="text-xl font-semibold mb-4">Ce que Provia BASE apporte aux TPE artisans :</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Création de devis et factures professionnels en moins de 2 minutes",
                  "Suivi des interventions et historique client accessible partout",
                  "Relances automatiques pour ne plus oublier les impayés",
                  "Application mobile pour consulter vos infos sur le terrain",
                  "Gestion quotidienne simplifiée sans formation complexe",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-provia-teal flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground">
                Que vous soyez plombier, électricien, menuisier ou dans tout autre métier artisanal, Provia BASE s'adapte à votre activité. Découvrez toutes les <Link to="/fonctionnalites" className="text-primary hover:underline">fonctionnalités du logiciel</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section PME Artisans */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                Logiciel de gestion pour <span className="text-gradient-orange">PME Artisans</span>
              </h2>
            </div>

            <div className="glass-card p-4 sm:p-6 lg:p-8 mb-8">
              <p className="text-muted-foreground mb-6 text-sm sm:text-lg">
                Votre entreprise a grandi et vous gérez maintenant plusieurs équipes terrain ? La coordination devient un défi quotidien. Notre <strong>outil de centralisation entreprise</strong> vous offre une vision globale de toutes vos opérations, du bureau jusqu'au chantier.
              </p>

              <h3 className="text-xl font-semibold mb-4">Ce que Provia BASE apporte aux PME artisans :</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Gestion équipe complète avec attribution des missions",
                  "Application mobile intervention pour les techniciens terrain",
                  "Suivi en temps réel de l'avancement des chantiers",
                  "Tableau de bord avec vision globale de l'activité",
                  "Gestion clients centralisée et partagée entre équipes",
                  "Historique complet des interventions par client",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-provia-teal flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground">
                Avec Provia BASE, vos équipes terrain ne sont plus isolées. L'<strong>application mobile terrain</strong> leur permet de recevoir les missions, consulter les fiches clients et remonter les informations en temps réel. <Link to="/#pour-qui" className="text-primary hover:underline">Découvrez si Provia BASE est fait pour vous</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Entreprises de services */}
      <section className="py-10 sm:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                Logiciel de gestion pour <span className="text-gradient-orange">entreprises de services</span>
              </h2>
            </div>

            <div className="glass-card p-4 sm:p-6 lg:p-8 mb-8">
              <p className="text-muted-foreground mb-6 text-sm sm:text-lg">
                Vous intervenez régulièrement chez vos clients pour des prestations de services ? Maintenance, dépannage, installation, entretien... Votre métier nécessite une <strong>gestion clients</strong> rigoureuse et un suivi précis des interventions.
              </p>

              <h3 className="text-xl font-semibold mb-4">Ce que Provia BASE apporte aux entreprises de services :</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "CRM intégré pour une gestion clients centralisée",
                  "Création de devis et factures en un clic",
                  "Planning des interventions avec vue calendrier",
                  "Équipes terrain coordonnées via l'application mobile",
                  "Historique complet de chaque client",
                  "Relances automatiques et suivi des paiements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-provia-teal flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground">
                Que vous soyez dans le nettoyage, la maintenance informatique, le SAV ou tout autre service nécessitant des déplacements, ce <strong>logiciel gestion entreprise</strong> centralise tout ce dont vous avez besoin pour être efficace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-6">
              <span className="sm:hidden">Prêt à simplifier votre gestion ?</span>
              <span className="hidden sm:inline">Prêt à simplifier la gestion de votre <span className="text-gradient-orange">entreprise</span> ?</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-sm sm:text-lg">
              <span className="sm:hidden">Demandez une démo gratuite et transformez votre quotidien.</span>
              <span className="hidden sm:inline">Rejoignez les artisans et dirigeants de TPE/PME qui ont choisi Provia BASE pour centraliser leur activité. Demandez une démonstration gratuite et découvrez comment notre logiciel de gestion peut transformer votre quotidien.</span>
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
                className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
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

export default PourLesArtisans;
