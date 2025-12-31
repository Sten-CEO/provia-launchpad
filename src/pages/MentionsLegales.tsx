import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mentions <span className="text-gradient-orange">légales</span>
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

            {/* Éditeur du site */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
              <p className="text-muted-foreground mb-4">
                Le site <strong>proviabase.fr</strong> et le service <strong>Provia BASE</strong> sont édités par :
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mb-6">
                <li><strong>Nom :</strong> Kevin Meunier</li>
                <li><strong>Statut :</strong> Entrepreneur individuel – Micro-entreprise</li>
                <li><strong>Nom commercial :</strong> Provia BASE</li>
                <li><strong>Adresse :</strong> Reims, France</li>
                <li><strong>SIRET :</strong> 953 815 818 00059</li>
                <li><strong>Email :</strong> support@proviabase.fr</li>
                <li><strong>Téléphone :</strong> 07 68 47 59 99</li>
              </ul>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  Provia BASE est actuellement exploité par Kevin Meunier, entrepreneur individuel (micro-entreprise). Une structure juridique dédiée pourra être créée ultérieurement.
                </p>
              </div>
            </div>

            {/* Directeur de la publication */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Directeur de la publication</h2>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Nom :</strong> Kevin Meunier</li>
                <li><strong>Contact :</strong> support@proviabase.fr</li>
              </ul>
            </div>

            {/* Hébergement */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
              <p className="text-muted-foreground mb-4">
                Le site et l'application sont hébergés par :
              </p>
              <h3 className="text-xl font-semibold mb-3">Site web et application</h3>
              <ul className="list-none text-muted-foreground space-y-2 mb-4">
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #4133</li>
                <li>Walnut, CA 91789, États-Unis</li>
                <li>Site web : vercel.com</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Base de données et authentification</h3>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Supabase Inc.</strong></li>
                <li>970 Toa Payoh North #07-04</li>
                <li>Singapour 318992</li>
                <li>Site web : supabase.com</li>
              </ul>
            </div>

            {/* Nature du service */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Nature du service</h2>
              <p className="text-muted-foreground mb-4">
                Provia BASE est un logiciel SaaS (Software as a Service) de gestion d'entreprise destiné aux TPE, PME et artisans. Le service permet notamment :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>La gestion de la relation client (CRM)</li>
                <li>La création et l'envoi de devis</li>
                <li>La génération de factures</li>
                <li>La gestion des relances clients</li>
                <li>Le planning des interventions</li>
                <li>La gestion des équipes et des employés</li>
                <li>L'accès à une application terrain (Provia FIELD)</li>
              </ul>
            </div>

            {/* Propriété intellectuelle */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground mb-4">
                L'ensemble des éléments constituant le site et le service (textes, graphismes, logos, icônes, images, clips audio et vidéo, logiciels, bases de données, etc.) sont la propriété exclusive de Provia BASE ou de ses partenaires et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-muted-foreground">
                Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Provia BASE.
              </p>
            </div>

            {/* Protection des données */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Protection des données personnelles</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles.
              </p>
              <p className="text-muted-foreground mb-4">
                Pour en savoir plus sur la collecte et le traitement de vos données, veuillez consulter notre{" "}
                <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
              <p className="text-muted-foreground">
                Pour exercer vos droits ou pour toute question relative à vos données personnelles, contactez-nous à : <strong>support@proviabase.fr</strong>
              </p>
            </div>

            {/* Cookies */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Cookies et traceurs</h2>
              <p className="text-muted-foreground mb-4">
                Le site utilise des cookies et technologies similaires pour améliorer votre expérience, analyser le trafic et à des fins statistiques.
              </p>
              <p className="text-muted-foreground mb-4">
                Les outils d'analyse utilisés sont :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Google Analytics</li>
                <li>Microsoft Clarity</li>
              </ul>
              <p className="text-muted-foreground">
                Pour plus d'informations, consultez notre{" "}
                <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>

            {/* Responsabilité */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Limitation de responsabilité</h2>
              <p className="text-muted-foreground mb-4">
                Les informations présentes sur ce site sont fournies à titre indicatif. Provia BASE s'efforce de maintenir ces informations à jour mais ne peut garantir leur exactitude à tout moment.
              </p>
              <p className="text-muted-foreground mb-4">
                Provia BASE ne saurait être tenu responsable :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Des erreurs ou omissions dans le contenu du site</li>
                <li>De l'indisponibilité temporaire du site ou du service</li>
                <li>Des dommages directs ou indirects résultant de l'utilisation du site ou du service</li>
                <li>Du contenu des sites tiers accessibles via des liens hypertextes</li>
              </ul>
              <p className="text-muted-foreground">
                L'utilisateur est seul responsable de l'utilisation qu'il fait du service et des données qu'il y saisit.
              </p>
            </div>

            {/* Droit applicable */}
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Droit applicable et juridiction compétente</h2>
              <p className="text-muted-foreground mb-4">
                Les présentes mentions légales sont soumises au droit français.
              </p>
              <p className="text-muted-foreground">
                En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
            </div>

            {/* Contact */}
            <div className="glass-card p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant le site ou le service :
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

export default MentionsLegales;
