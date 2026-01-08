import { Link } from "react-router-dom";
import { XCircle, ArrowLeft } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";

const BillingCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:p-4 relative">
      <div className="glow-orange top-0 left-1/4 w-[600px] h-[600px] opacity-40 sm:opacity-100" />
      <div className="glow-teal bottom-0 right-1/4 w-[500px] h-[500px] opacity-40 sm:opacity-100" />

      <div className="w-full max-w-lg relative z-10">
        <div className="glass-card p-5 sm:p-8">
          <div className="text-center">
            <img src={proviaLogo} alt="Provia" className="h-10 sm:h-12 mx-auto mb-8" />

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold sm:font-bold mb-4">Paiement annulé</h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-8">
              Votre paiement a été annulé. Aucun montant n'a été débité.
              <br />
              Vous pouvez reprendre votre inscription à tout moment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/#tarifs"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base border border-white/20 hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux tarifs
              </Link>

              <Link
                to="/"
                className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
              >
                Accueil
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Une question ? Contactez-nous à{" "}
              <a href="mailto:support@proviabase.fr" className="text-primary hover:underline">
                support@proviabase.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingCancel;
