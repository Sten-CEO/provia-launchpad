import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qu'est-ce que Provia BASE exactement ?",
    answer: "Provia BASE est un logiciel de gestion d'entreprise conçu pour les TPE et PME avec équipes terrain. Il centralise la gestion de vos clients, devis, factures et équipes. Il inclut également une application mobile terrain pour vos employés en intervention.",
  },
  {
    question: "Comment fonctionne l'application mobile terrain ?",
    answer: "L'application mobile intervention permet à vos employés de consulter leur planning, réaliser leurs missions et remplir leurs rapports directement sur le terrain. Chaque action est synchronisée en temps réel avec le logiciel de gestion au bureau.",
  },
  {
    question: "Ce logiciel devis facture remplace-t-il Excel ?",
    answer: "Oui, Provia BASE est conçu pour remplacer vos fichiers Excel et documents Word. Vous créez des devis professionnels en quelques clics, les transformez en factures automatiquement, et suivez le tout depuis un tableau de bord clair.",
  },
  {
    question: "Comment se passe la prise en main ?",
    answer: "L'inscription prend 2 minutes. Notre assistant de configuration vous guide pour paramétrer vos modèles de devis, vos articles et vos taux de TVA. Vous pouvez être opérationnel en moins d'une heure.",
  },
  {
    question: "Puis-je gérer mon équipe avec Provia BASE ?",
    answer: "Oui, la gestion équipe est au cœur de Provia BASE. Chaque employé dispose de son propre accès. Vous attribuez les missions, suivez leur avancement et consultez les rapports d'intervention depuis votre espace.",
  },
  {
    question: "Est-il possible de tester avant de s'engager ?",
    answer: "Vous pouvez réserver une démo gratuite avec un de nos experts. Il vous montrera toutes les fonctionnalités du logiciel de gestion et répondra à vos questions. Aucun engagement.",
  },
  {
    question: "Mes données clients sont-elles sécurisées ?",
    answer: "Vos données sont hébergées sur des serveurs sécurisés. Nous effectuons des sauvegardes quotidiennes et utilisons un chiffrement SSL pour toutes les communications. La gestion clients est protégée et confidentielle.",
  },
  {
    question: "Puis-je importer mes anciens clients et devis ?",
    answer: "Oui, nous proposons un import depuis Excel ou CSV pour votre base clients et vos articles. Notre équipe peut vous accompagner pour une migration en douceur.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-10 sm:py-16 lg:py-32 overflow-hidden">
      <div className="glow-teal bottom-0 right-0 opacity-30 sm:opacity-100" />

      <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-5 sm:mb-16">
          <h2 className="text-[1.3rem] sm:text-3xl lg:text-4xl font-medium sm:font-bold mb-2 sm:mb-4 tracking-tight">
            <span className="sm:hidden"><span className="text-gradient-orange">FAQ</span></span>
            <span className="hidden sm:inline">Questions <span className="text-gradient-orange">fréquentes</span></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[0.75rem] sm:text-base">
            <span className="sm:hidden">Réponses à vos questions.</span>
            <span className="hidden sm:inline">Tout ce que vous devez savoir sur ce logiciel de gestion avant de vous lancer.</span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-1.5 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-3 sm:p-5 text-left"
              >
                <span className="font-normal sm:font-medium pr-3 sm:pr-4 text-xs sm:text-base leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* SEO-safe: content always in DOM */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-3 sm:px-5 pb-3 sm:pb-5">
                    <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA card - simpler on mobile */}
        <div className="glass-card p-4 sm:p-8 mt-6 sm:mt-12 max-w-3xl mx-auto text-center">
          <p className="text-sm sm:text-lg font-medium mb-3 sm:mb-4">Une question ?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            <a href="mailto:support@proviabase.fr" className="btn-secondary px-5 sm:px-6 py-2.5 sm:py-3 text-sm">
              Contact
            </a>
            <Link to="/demo" className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm">
              Démo gratuite
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};