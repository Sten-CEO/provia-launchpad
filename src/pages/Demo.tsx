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
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      {/* Background Glows */}
      <div className="glow-orange top-20 -right-40 animate-pulse-glow fixed" />
      <div className="glow-teal bottom-20 -left-40 animate-pulse-glow fixed" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-md relative z-10">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <div className="glass-card p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <img src={proviaLogo} alt="Provia BASE" className="h-16 w-16 object-contain mb-4" />
            <h1 className="text-2xl font-bold text-center">
              Provia <span className="text-gradient-orange">BASE</span>
            </h1>
            <p className="text-muted-foreground text-center mt-2">
              Réservez une démo gratuite avec un expert
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-provia-teal/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-provia-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Demande envoyée !</h3>
              <p className="text-muted-foreground mb-6">Notre équipe vous contactera rapidement.</p>
              <Link to="/" className="btn-primary px-6 py-3 inline-block">
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <label className="block text-sm font-medium mb-1.5">Nom complet</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
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
                  className="form-input"
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
                  className="form-input"
                  placeholder="Dupont BTP"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Taille de l'équipe</label>
                <select
                  required
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="form-input"
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
                  className="form-input resize-none"
                  placeholder="Dites-nous en plus sur vos besoins..."
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

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
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Prêt à démarrer directement ?{" "}
          <Link to="/#tarifs" className="text-primary hover:underline font-medium">
            Voir les tarifs
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Demo;
