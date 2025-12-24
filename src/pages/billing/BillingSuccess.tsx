import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PartyPopper, Loader2, AlertCircle, ExternalLink } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";
import { syncCheckoutSession, isAuthenticated } from "@/services/billing";

const CRM_LOGIN_URL = "https://app.proviabase.fr/auth/login";

const BillingSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [isSyncing, setIsSyncing] = useState(true);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [redirectCountdown, setRedirectCountdown] = useState(5);

  useEffect(() => {
    const syncSession = async () => {
      // Check authentication
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        navigate("/mensuel");
        return;
      }

      if (!sessionId) {
        setSyncError("Session de paiement introuvable.");
        setIsSyncing(false);
        return;
      }

      // Sync the checkout session
      const result = await syncCheckoutSession(sessionId);

      if (!result.success) {
        setSyncError(result.error || "Erreur lors de la synchronisation.");
      }

      setIsSyncing(false);
    };

    syncSession();
  }, [navigate, sessionId]);

  // Countdown and redirect after sync completes successfully
  useEffect(() => {
    if (!isSyncing && !syncError) {
      const timer = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.location.href = CRM_LOGIN_URL;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isSyncing, syncError]);

  if (isSyncing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Validation du paiement en cours...</p>
        </div>
      </div>
    );
  }

  if (syncError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative">
        <div className="glow-orange top-0 left-1/4 w-[600px] h-[600px]" />
        <div className="glow-teal bottom-0 right-1/4 w-[500px] h-[500px]" />

        <div className="w-full max-w-lg relative z-10">
          <div className="glass-card p-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Erreur de synchronisation</h1>
              <p className="text-muted-foreground mb-6">{syncError}</p>
              <p className="text-sm text-muted-foreground mb-6">
                Si le problème persiste, contactez notre support à support@proviabase.fr
              </p>
              <button
                onClick={() => navigate("/")}
                className="btn-primary px-6 py-3 rounded-xl font-semibold"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="glow-orange top-0 left-1/4 w-[600px] h-[600px]" />
      <div className="glow-teal bottom-0 right-1/4 w-[500px] h-[500px]" />

      <div className="w-full max-w-2xl relative z-10">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center">
            <img src={proviaLogo} alt="Provia" className="h-12 mx-auto mb-8" />

            {/* Icône de célébration */}
            <div className="w-20 h-20 rounded-full bg-provia-teal/20 flex items-center justify-center mx-auto mb-8">
              <PartyPopper className="w-10 h-10 text-provia-teal" />
            </div>

            {/* Titre */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Merci et bienvenue sur Provia BASE
            </h1>

            {/* Message principal */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <p className="text-lg mb-4">
                Votre paiement a été validé avec succès !
              </p>
              <p className="text-muted-foreground">
                Vous allez être redirigé vers votre espace de connexion dans{" "}
                <span className="text-provia-orange font-bold text-xl">{redirectCountdown}</span>{" "}
                seconde{redirectCountdown > 1 ? "s" : ""}...
              </p>
            </div>

            {/* Bouton de redirection manuel */}
            <a
              href={CRM_LOGIN_URL}
              className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Accéder à mon espace maintenant
            </a>

            <p className="text-sm text-muted-foreground mt-6">
              Un email de confirmation vous a également été envoyé avec votre facture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSuccess;
