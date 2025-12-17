import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PartyPopper, Download, Loader2, CheckCircle } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";
import { getBillingStatus, isAuthenticated } from "@/services/billing";

const CheckoutMerci = () => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  // Vérifier que l'utilisateur a bien payé
  useEffect(() => {
    const checkAccess = async () => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        navigate("/mensuel");
        return;
      }

      const status = await getBillingStatus();
      if (!status?.hasPaid) {
        // Rediriger vers checkout si pas payé
        navigate("/checkout/simulated?plan=mensuel");
        return;
      }

      setIsChecking(false);
    };
    checkAccess();
  }, [navigate]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
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
                Votre accès est désormais activé. Vous pouvez télécharger Provia BASE dès maintenant.
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
              Un email de bienvenue vous a également été envoyé avec toutes les informations nécessaires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMerci;
