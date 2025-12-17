import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PartyPopper, Download, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";
import { syncCheckoutSession, isAuthenticated } from "@/services/billing";

const BillingSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [isSyncing, setIsSyncing] = useState(true);
  const [syncError, setSyncError] = useState<string | null>(null);

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
            <div className="text-left bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <p className="text-lg mb-6">
                Votre paiement a été validé avec succès. Vous pouvez télécharger Provia BASE dès maintenant.
              </p>

              <p className="text-muted-foreground mb-4">
                Notre équipe va également vous recontacter par email afin de :
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-provia-teal flex-shrink-0 mt-0.5" />
                  <span>vous aider à installer le logiciel et le paramétrer correctement,</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-provia-teal flex-shrink-0 mt-0.5" />
                  <span>vous guider pour le lancement (premiers devis, factures, relances),</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-provia-teal flex-shrink-0 mt-0.5" />
                  <span>
                    et surtout procéder à la migration de vos données (clients, devis/factures, produits)
                    avec un agent réel, pour que vous soyez opérationnel rapidement.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bouton de téléchargement */}
            <a
              href="https://download.proviabase.fr/download"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg"
            >
              <Download className="w-5 h-5" />
              Télécharger Provia BASE
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
