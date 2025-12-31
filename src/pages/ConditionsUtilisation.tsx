import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ConditionsUtilisation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Conditions <span className="text-gradient-orange">d'utilisation</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Dernière mise à jour : 31 décembre 2024
            </p>
          </div>
        </div>
      </section>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
      </div>

      {/* Contenu */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">

            {/* Préambule */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Préambule</h2>
              <p className="text-muted-foreground mb-4">
                Les présentes conditions générales d'utilisation (ci-après « CGU ») régissent l'accès et l'utilisation du service Provia BASE, accessible via le site web et l'application mobile.
              </p>
              <p className="text-muted-foreground mb-4">
                Provia BASE est actuellement exploité par <strong>Kevin Meunier</strong>, entrepreneur individuel (micro-entreprise). Une structure juridique dédiée pourra être créée ultérieurement.
              </p>
              <p className="text-muted-foreground">
                En accédant ou en utilisant le service, vous acceptez d'être lié par les présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le service.
              </p>
            </div>

            {/* Article 1 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 1 – Description du service</h2>
              <p className="text-muted-foreground mb-4">
                Provia BASE est un logiciel SaaS (Software as a Service) de gestion d'entreprise destiné aux TPE, PME et artisans. Le service permet notamment :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>La gestion de la relation client (CRM)</li>
                <li>La création et l'envoi de devis</li>
                <li>La génération de factures</li>
                <li>La gestion des relances</li>
                <li>Le planning des interventions</li>
                <li>La gestion des équipes et des employés</li>
                <li>L'accès à une application terrain (Provia FIELD)</li>
              </ul>
              <p className="text-muted-foreground">
                Le service est accessible via navigateur web et application mobile.
              </p>
            </div>

            {/* Article 2 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 2 – Inscription et compte utilisateur</h2>
              <p className="text-muted-foreground mb-4">
                L'utilisation du service nécessite la création d'un compte utilisateur. Lors de l'inscription, vous devez fournir des informations exactes, complètes et à jour.
              </p>
              <p className="text-muted-foreground mb-4">
                Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toutes les activités effectuées sous votre compte. Vous vous engagez à nous informer immédiatement de toute utilisation non autorisée de votre compte.
              </p>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de suspendre ou de résilier tout compte en cas de violation des présentes CGU.
              </p>
            </div>

            {/* Article 3 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 3 – Abonnements et paiements</h2>
              <h3 className="text-xl font-semibold mb-3">3.1 Formules d'abonnement</h3>
              <p className="text-muted-foreground mb-4">
                Le service est proposé sous forme d'abonnement payant. Plusieurs formules sont disponibles :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Mensuel sans engagement</strong> : facturation mensuelle, résiliable à tout moment</li>
                <li><strong>Engagement 12 mois</strong> : tarif préférentiel avec engagement d'un an</li>
                <li><strong>Engagement 24 mois</strong> : tarif le plus avantageux avec engagement de deux ans</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Paiement</h3>
              <p className="text-muted-foreground mb-4">
                Les paiements sont effectués de manière sécurisée via notre prestataire de paiement Stripe. Les tarifs sont indiqués en euros TTC.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.3 Résiliation</h3>
              <p className="text-muted-foreground">
                Les conditions de résiliation dépendent de la formule choisie. L'abonnement mensuel sans engagement peut être résilié à tout moment. Les abonnements avec engagement sont facturés pour la durée totale de l'engagement. Aucun remboursement ne sera effectué en cas de résiliation anticipée d'un abonnement avec engagement.
              </p>
            </div>

            {/* Article 4 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 4 – Obligations de l'utilisateur</h2>
              <p className="text-muted-foreground mb-4">
                En utilisant le service, vous vous engagez à :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Utiliser le service conformément à sa destination et aux présentes CGU</li>
                <li>Ne pas utiliser le service à des fins illicites ou frauduleuses</li>
                <li>Ne pas porter atteinte à l'intégrité ou à la sécurité du service</li>
                <li>Respecter les droits de propriété intellectuelle</li>
                <li>Être responsable de l'exactitude et de la légalité des données que vous saisissez</li>
                <li>Respecter la réglementation applicable, notamment en matière de protection des données personnelles</li>
              </ul>
            </div>

            {/* Article 5 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 5 – Propriété intellectuelle</h2>
              <p className="text-muted-foreground mb-4">
                L'ensemble des éléments constituant le service (logiciel, interface, textes, graphismes, logos, marques, etc.) sont la propriété exclusive de Provia BASE ou de ses partenaires et sont protégés par les lois relatives à la propriété intellectuelle.
              </p>
              <p className="text-muted-foreground">
                L'abonnement au service confère uniquement un droit d'utilisation personnel, non exclusif et non transférable. Toute reproduction, modification, distribution ou exploitation non autorisée est strictement interdite.
              </p>
            </div>

            {/* Article 6 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 6 – Responsabilité</h2>
              <h3 className="text-xl font-semibold mb-3">6.1 Limitation de responsabilité</h3>
              <p className="text-muted-foreground mb-4">
                Le service est fourni « en l'état ». Nous nous efforçons d'assurer la disponibilité et le bon fonctionnement du service, mais ne pouvons garantir une disponibilité continue et ininterrompue.
              </p>
              <p className="text-muted-foreground mb-4">
                Notre responsabilité ne saurait être engagée en cas de :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Interruption temporaire du service pour maintenance</li>
                <li>Dysfonctionnement causé par des facteurs externes (connexion internet, équipements utilisateur, etc.)</li>
                <li>Perte de données due à une utilisation incorrecte du service par l'utilisateur</li>
                <li>Dommages indirects ou consécutifs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Responsabilité de l'utilisateur</h3>
              <p className="text-muted-foreground">
                L'utilisateur est seul responsable des données qu'il saisit dans le service ainsi que de leur exactitude, leur légalité et leur conformité à la réglementation applicable.
              </p>
            </div>

            {/* Article 7 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 7 – Protection des données</h2>
              <p className="text-muted-foreground mb-4">
                Le traitement des données personnelles est effectué conformément à notre{" "}
                <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </Link>{" "}
                et à la réglementation applicable en matière de protection des données personnelles.
              </p>
              <p className="text-muted-foreground">
                Pour plus d'informations sur la collecte et le traitement de vos données, veuillez consulter notre Politique de confidentialité.
              </p>
            </div>

            {/* Article 8 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 8 – Modification des CGU</h2>
              <p className="text-muted-foreground mb-4">
                Nous nous réservons le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle. La poursuite de l'utilisation du service après modification vaut acceptation des nouvelles conditions.
              </p>
            </div>

            {/* Article 9 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 9 – Droit applicable et litiges</h2>
              <p className="text-muted-foreground mb-4">
                Les présentes CGU sont régies par le droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, les parties s'efforceront de trouver une solution amiable.
              </p>
              <p className="text-muted-foreground">
                À défaut d'accord amiable, tout litige sera soumis à la compétence exclusive des tribunaux français.
              </p>
            </div>

            {/* Article 10 */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Article 10 – Contact</h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter :
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Email :</strong> support@proviabase.fr</li>
                <li><strong>Téléphone :</strong> 07 68 47 59 99</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConditionsUtilisation;
