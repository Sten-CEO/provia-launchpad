import { useState } from "react";
import { X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ name: "", email: "", company: "", teamSize: "", message: "" });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="glass-card w-full max-w-lg p-6 lg:p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-provia-teal/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-provia-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Demande envoyée !</h3>
            <p className="text-muted-foreground">Notre équipe vous contactera rapidement.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2">Réserver une démo</h2>
            <p className="text-muted-foreground mb-6">
              Discutez avec un expert Provia BASE et découvrez comment simplifier votre gestion.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Nom complet</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Email professionnel</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="jean@entreprise.fr"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Nom de l'entreprise</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Dupont BTP"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Taille de l'équipe</label>
                <select
                  required
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="1">Artisan solo</option>
                  <option value="2-5">2-5 personnes</option>
                  <option value="6-10">6-10 personnes</option>
                  <option value="11-20">11-20 personnes</option>
                  <option value="20+">Plus de 20</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Message (optionnel)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Dites-nous en plus sur vos besoins..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="loader-ring w-5 h-5 border-2" />
                    Envoi en cours...
                  </>
                ) : (
                  "Demander une démo gratuite"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
