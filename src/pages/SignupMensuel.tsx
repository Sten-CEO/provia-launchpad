import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";
import { signUp } from "@/services/auth";
import { createCheckoutSession } from "@/services/billing";

const SignupMensuel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"signup" | "checkout">("signup");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Step 1: Create account
    const signupResult = await signUp({
      email,
      password,
      plan: 'mensuel',
    });

    if (!signupResult.success) {
      setError(signupResult.error || 'Une erreur est survenue.');
      setIsSubmitting(false);
      return;
    }

    // Step 2: Create Stripe Checkout session and redirect
    setStep("checkout");

    const checkoutResult = await createCheckoutSession('monthly');

    if (checkoutResult.success && checkoutResult.url) {
      window.location.href = checkoutResult.url;
    } else {
      setError(checkoutResult.error || 'Erreur lors de la création de la session de paiement.');
      setIsSubmitting(false);
      setStep("signup");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:p-4 relative">
      <div className="glow-orange top-0 left-1/4 w-[600px] h-[600px] opacity-40 sm:opacity-100" />
      <div className="glow-teal bottom-0 right-1/4 w-[500px] h-[500px] opacity-40 sm:opacity-100" />

      <div className="w-full max-w-md relative z-10">
        <Link
          to="/#tarifs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux tarifs
        </Link>

        <div className="glass-card p-5 sm:p-8">
          <div className="text-center mb-8">
            <img src={proviaLogo} alt="Provia" className="h-8 sm:h-10 mx-auto mb-6" />
            <h1 className="text-xl sm:text-2xl font-semibold sm:font-bold mb-2">Créer votre compte</h1>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Pack Mensuel
            </div>
            <p className="text-muted-foreground text-sm">
              31,99 €/utilisateur/mois • Sans engagement
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="vous@entreprise.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Créer un mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input pr-10"
                  placeholder="Minimum 8 caractères"
                  minLength={8}
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  disabled={isSubmitting}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-2.5 sm:py-3 rounded-xl font-semibold disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {step === "signup" ? "Création du compte..." : "Redirection vers le paiement..."}
                </>
              ) : (
                "Créer mon compte et payer"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            En créant un compte, vous acceptez nos{" "}
            <Link to="/conditions-d-utilisation" className="text-primary hover:underline">
              conditions d'utilisation
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupMensuel;
