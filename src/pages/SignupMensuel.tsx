import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Loader2, CheckCircle } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";

const SignupMensuel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="glow-orange top-0 left-1/4 w-[600px] h-[600px]" />
      <div className="glow-teal bottom-0 right-1/4 w-[500px] h-[500px]" />

      <div className="w-full max-w-md relative z-10">
        <Link
          to="/#tarifs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux tarifs
        </Link>

        <div className="glass-card p-8">
          {!isSuccess ? (
            <>
              <div className="text-center mb-8">
                <img src={proviaLogo} alt="Provia" className="h-10 mx-auto mb-6" />
                <h1 className="text-2xl font-bold mb-2">Créer votre compte</h1>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  Pack Mensuel
                </div>
                <p className="text-muted-foreground text-sm">
                  31,99 €/utilisateur/mois • Sans engagement
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 rounded-xl font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Création en cours...
                    </>
                  ) : (
                    "Créer mon compte"
                  )}
                </button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                En créant un compte, vous acceptez nos{" "}
                <a href="#" className="text-primary hover:underline">
                  conditions d'utilisation
                </a>
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-provia-teal/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-provia-teal" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Compte créé !</h2>
              <p className="text-muted-foreground mb-6">
                Bienvenue dans Provia BASE. Vérifiez votre email pour confirmer votre compte.
              </p>
              <Link to="/" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block">
                Retour à l'accueil
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupMensuel;
