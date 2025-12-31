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
    <section id="faq" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="glow-teal bottom-0 right-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Questions <span className="text-gradient-orange">fréquentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur ce logiciel de gestion avant de vous lancer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="glass-card p-8 mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg font-medium mb-4">Vous avez encore une question ?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:contact@provia.fr" className="btn-secondary px-6 py-3">
              Contactez-nous
            </a>
            <Link to="/demo" className="btn-primary px-6 py-3">
              Réserver une démo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};