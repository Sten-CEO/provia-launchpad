import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
    website: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-5 sm:px-4">
      {/* Background Glows */}
      <div className="glow-orange top-20 -right-40 animate-pulse-glow fixed opacity-40 sm:opacity-100" />
      <div className="glow-teal bottom-20 -left-40 animate-pulse-glow fixed opacity-40 sm:opacity-100" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-md relative z-10">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <div className="glass-card p-5 sm:p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <img src={proviaLogo} alt="Provia BASE" className="h-12 w-12 sm:h-16 sm:w-16 object-contain mb-3 sm:mb-4" />
            <h1 className="text-xl sm:text-2xl font-semibold sm:font-bold text-center">
              Provia <span className="text-gradient-orange">BASE</span>
            </h1>
            <p className="text-muted-foreground text-center mt-1.5 sm:mt-2 text-sm sm:text-base">
              Démo gratuite avec un expert
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-provia-teal/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-provia-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Demande envoyée !</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">Notre équipe vous contactera rapidement.</p>
              <Link to="/" className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 inline-block text-sm sm:text-base">
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Honeypot field - invisible to users, catches bots */}
              <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">Nom complet</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input text-sm sm:text-base"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">Email professionnel</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input text-sm sm:text-base"
                  placeholder="jean@entreprise.fr"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">Entreprise</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="form-input text-sm sm:text-base"
                  placeholder="Dupont BTP"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">Taille de l'équipe</label>
                <select
                  required
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="form-input text-sm sm:text-base"
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
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">Message (optionnel)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="form-input resize-none text-sm sm:text-base"
                  placeholder="Vos besoins..."
                />
              </div>

              {error && (
                <div className="p-2.5 sm:p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3 sm:py-4 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="loader-ring w-4 h-4 sm:w-5 sm:h-5 border-2" />
                    Envoi...
                  </>
                ) : (
                  "Demander une démo"
                )}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
          Prêt à démarrer ?{" "}
          <Link to="/#tarifs" className="text-primary hover:underline font-medium">
            Voir les tarifs
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Demo;
