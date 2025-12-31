import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Politique de <span className="text-gradient-orange">confidentialité</span>
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
          <div className="max-w-4xl mx-auto">

            {/* Introduction */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                La présente politique de confidentialité décrit comment Provia BASE collecte, utilise, stocke et protège vos données personnelles dans le cadre de l'utilisation de notre service.
              </p>
              <p className="text-muted-foreground mb-4">
                Provia BASE est actuellement exploité par <strong>Kevin Meunier</strong>, entrepreneur individuel (micro-entreprise). Une structure juridique dédiée pourra être créée ultérieurement.
              </p>
              <p className="text-muted-foreground">
                Nous nous engageons à respecter votre vie privée et à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation française applicable.
              </p>
            </div>

            {/* Responsable du traitement */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Responsable du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Le responsable du traitement des données personnelles est :
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Nom :</strong> Kevin Meunier</li>
                <li><strong>Statut :</strong> Entrepreneur individuel – Micro-entreprise</li>
                <li><strong>Nom commercial :</strong> Provia BASE</li>
                <li><strong>Adresse :</strong> Reims, France</li>
                <li><strong>SIRET :</strong> 953 815 818 00059</li>
                <li><strong>Email :</strong> support@proviabase.fr</li>
                <li><strong>Téléphone :</strong> 07 68 47 59 99</li>
              </ul>
            </div>

            {/* Données collectées */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Données personnelles collectées</h2>
              <p className="text-muted-foreground mb-4">
                Dans le cadre de l'utilisation de notre service, nous collectons les catégories de données suivantes :
              </p>

              <h3 className="text-xl font-semibold mb-3">Données d'identification et de compte</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Adresse email</li>
                <li>Mot de passe (stocké sous forme chiffrée)</li>
                <li>Informations de profil (nom, prénom, entreprise)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Données métier</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Données clients que vous saisissez (contacts, coordonnées)</li>
                <li>Devis et factures créés</li>
                <li>Interventions et plannings</li>
                <li>Historique d'activité</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Données de paiement</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Informations de facturation</li>
                <li>Les données de carte bancaire sont traitées directement par notre prestataire Stripe et ne sont pas stockées sur nos serveurs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Données de navigation et techniques</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Adresse IP</li>
                <li>Type de navigateur et appareil</li>
                <li>Pages visitées et interactions</li>
                <li>Données de session</li>
              </ul>
            </div>

            {/* Finalités */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Finalités du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Fourniture du service :</strong> création et gestion de votre compte, accès aux fonctionnalités</li>
                <li><strong>Gestion des abonnements :</strong> facturation, paiements, renouvellements</li>
                <li><strong>Support client :</strong> réponse à vos demandes et assistance technique</li>
                <li><strong>Amélioration du service :</strong> analyse d'usage, développement de nouvelles fonctionnalités</li>
                <li><strong>Communication :</strong> informations importantes sur le service, mises à jour</li>
                <li><strong>Obligations légales :</strong> respect des obligations comptables et fiscales</li>
                <li><strong>Sécurité :</strong> prévention des fraudes et protection du service</li>
              </ul>
            </div>

            {/* Base légale */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Base légale du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>L'exécution du contrat :</strong> le traitement est nécessaire à la fourniture du service auquel vous avez souscrit</li>
                <li><strong>Le consentement :</strong> pour certains traitements spécifiques (cookies d'analyse, communications marketing)</li>
                <li><strong>L'intérêt légitime :</strong> amélioration du service, sécurité, prévention des fraudes</li>
                <li><strong>Les obligations légales :</strong> conservation des données de facturation</li>
              </ul>
            </div>

            {/* Destinataires */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Destinataires des données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles peuvent être transmises aux catégories de destinataires suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Prestataires techniques :</strong> hébergement, infrastructure</li>
                <li><strong>Prestataire de paiement :</strong> Stripe pour le traitement des paiements</li>
                <li><strong>Outils d'analyse :</strong> Google Analytics, Microsoft Clarity</li>
                <li><strong>Autorités compétentes :</strong> sur demande légale uniquement</li>
              </ul>
            </div>

            {/* Hébergement */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Hébergement et transfert des données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données sont hébergées via les prestataires suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Supabase :</strong> base de données et authentification</li>
                <li><strong>Vercel :</strong> hébergement de l'application web</li>
              </ul>
              <p className="text-muted-foreground">
                Ces prestataires peuvent stocker des données dans différentes régions du monde. Le cas échéant, des garanties appropriées sont mises en place pour assurer un niveau de protection adéquat conformément au RGPD (clauses contractuelles types, certifications, etc.).
              </p>
            </div>

            {/* Conservation */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Durée de conservation</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont conservées pendant les durées suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Données de compte :</strong> pendant toute la durée de votre abonnement, puis 3 ans après la fin de la relation commerciale</li>
                <li><strong>Données métier :</strong> pendant la durée de votre abonnement. Vous pouvez les supprimer à tout moment via le service</li>
                <li><strong>Données de facturation :</strong> 10 ans (obligation légale comptable)</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Cookies et technologies similaires</h2>
              <p className="text-muted-foreground mb-4">
                Nous utilisons des cookies et technologies similaires pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du service (authentification, préférences)</li>
                <li><strong>Cookies d'analyse :</strong> pour comprendre l'utilisation du service et l'améliorer</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Outils d'analyse utilisés</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Google Analytics :</strong> analyse du trafic et du comportement utilisateur</li>
                <li><strong>Microsoft Clarity :</strong> analyse de l'expérience utilisateur (heatmaps, enregistrements de sessions)</li>
              </ul>
              <p className="text-muted-foreground">
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </div>

            {/* Sécurité */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Sécurité des données</h2>
              <p className="text-muted-foreground mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Chiffrement des données en transit (HTTPS/TLS)</li>
                <li>Mots de passe stockés de manière sécurisée (hachage)</li>
                <li>Accès restreint aux données sur la base du besoin d'en connaître</li>
                <li>Surveillance et journalisation des accès</li>
                <li>Sauvegardes régulières</li>
              </ul>
            </div>

            {/* Droits */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Vos droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données dans certaines conditions</li>
                <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible par machine</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données dans certaines conditions</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour les traitements fondés sur le consentement</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Pour exercer vos droits, contactez-nous à : <strong>support@proviabase.fr</strong>
              </p>
              <p className="text-muted-foreground">
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <strong>www.cnil.fr</strong>
              </p>
            </div>

            {/* Modification */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Modification de la politique</h2>
              <p className="text-muted-foreground mb-4">
                Nous pouvons être amenés à modifier la présente politique de confidentialité. En cas de modification substantielle, nous vous en informerons par email ou via une notification dans le service.
              </p>
              <p className="text-muted-foreground">
                Nous vous invitons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </div>

            {/* Contact */}
            <div className="glass-card p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant la présente politique de confidentialité ou vos données personnelles :
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Email :</strong> support@proviabase.fr</li>
                <li><strong>Téléphone :</strong> 07 68 47 59 99</li>
                <li><strong>Adresse :</strong> Reims, France</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
