import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQSectionProps {
  onOpenDemo: () => void;
}

const faqs = [
  {
    question: "Comment se passe l'onboarding ?",
    answer: "L'inscription prend 2 minutes. Ensuite, notre assistant de configuration vous guide pour paramétrer vos premiers modèles de devis, vos articles et vos taux de TVA. Vous pouvez être opérationnel en moins d'une heure. Et si vous avez besoin d'aide, notre équipe support est là.",
  },
  {
    question: "Puis-je changer le nombre d'utilisateurs à tout moment ?",
    answer: "Oui, vous pouvez ajouter ou retirer des utilisateurs à tout moment depuis votre espace d'administration. La facturation s'ajuste automatiquement au prorata.",
  },
  {
    question: "Provia BASE remplace-t-il Excel et Word pour mes devis ?",
    answer: "Absolument ! Provia BASE est conçu pour remplacer vos fichiers Excel et documents Word. Vous gagnez en professionnalisme avec des devis personnalisés à votre image, et en temps avec les modèles réutilisables.",
  },
  {
    question: "Est-il possible de réserver une démo avant de payer ?",
    answer: "Bien sûr ! Vous pouvez réserver une démo gratuite avec un de nos experts. Il vous montrera toutes les fonctionnalités et répondra à vos questions. Aucun engagement.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Vos données sont hébergées en France sur des serveurs sécurisés. Nous effectuons des sauvegardes quotidiennes et utilisons un chiffrement SSL pour toutes les communications. Votre confidentialité est notre priorité.",
  },
  {
    question: "Puis-je importer mes anciens devis et clients ?",
    answer: "Oui, nous proposons un import depuis Excel ou CSV pour vos clients et articles. Pour les devis existants, notre équipe peut vous accompagner pour une migration en douceur.",
  },
];

export const FAQSection = ({ onOpenDemo }: FAQSectionProps) => {
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
            Tout ce que vous devez savoir avant de commencer avec Provia BASE.
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
            <button onClick={onOpenDemo} className="btn-primary px-6 py-3">
              Réserver une démo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
