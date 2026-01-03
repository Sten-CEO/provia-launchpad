import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToHash } from "./components/ScrollToHash";

// Main pages
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import Fonctionnalites from "./pages/Fonctionnalites";
import Installation from "./pages/Installation";
import NotFound from "./pages/NotFound";

// Signup pages
import SignupMensuel from "./pages/SignupMensuel";
import SignupAnnuel from "./pages/SignupAnnuel";
import SignupBiennal from "./pages/SignupBiennal";

// Billing pages
import BillingSuccess from "./pages/billing/BillingSuccess";
import BillingCancel from "./pages/billing/BillingCancel";
import BillingRequired from "./pages/billing/BillingRequired";

// Legal pages
import ConditionsUtilisation from "./pages/ConditionsUtilisation";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

// "Pour qui ?" pages
import PourLesArtisans from "./pages/PourLesArtisans";
import PourLesTPE from "./pages/PourLesTPE";
import PourLesPME from "./pages/PourLesPME";
import PourLesEntreprisesDeServices from "./pages/PourLesEntreprisesDeServices";
import PourLesEquipesTerrain from "./pages/PourLesEquipesTerrain";

// Fonctionnalités pages
import Devis from "./pages/fonctionnalites/Devis";
import Facturation from "./pages/fonctionnalites/Facturation";
import GestionEquipes from "./pages/fonctionnalites/GestionEquipes";
import PlanningInterventions from "./pages/fonctionnalites/PlanningInterventions";
import ApplicationMobile from "./pages/fonctionnalites/ApplicationMobile";
import SuiviInterventions from "./pages/fonctionnalites/SuiviInterventions";
import GestionClients from "./pages/fonctionnalites/GestionClients";
import Archivage from "./pages/fonctionnalites/Archivage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Index />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/fonctionnalites" element={<Fonctionnalites />} />
            <Route path="/installation" element={<Installation />} />

            {/* Signup pages */}
            <Route path="/mensuel" element={<SignupMensuel />} />
            <Route path="/engagement-1-an" element={<SignupAnnuel />} />
            <Route path="/engagement-2-ans" element={<SignupBiennal />} />

            {/* Billing pages */}
            <Route path="/billing/success" element={<BillingSuccess />} />
            <Route path="/billing/cancel" element={<BillingCancel />} />
            <Route path="/billing/required" element={<BillingRequired />} />

            {/* Legal pages */}
            <Route path="/conditions-d-utilisation" element={<ConditionsUtilisation />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />

            {/* "Pour qui ?" pages */}
            <Route path="/pour-les-artisans" element={<PourLesArtisans />} />
            <Route path="/pour-les-tpe" element={<PourLesTPE />} />
            <Route path="/pour-les-pme" element={<PourLesPME />} />
            <Route path="/pour-les-entreprises-de-services" element={<PourLesEntreprisesDeServices />} />
            <Route path="/pour-les-equipes-terrain" element={<PourLesEquipesTerrain />} />

            {/* Fonctionnalités pages */}
            <Route path="/fonctionnalites/devis" element={<Devis />} />
            <Route path="/fonctionnalites/facturation" element={<Facturation />} />
            <Route path="/fonctionnalites/gestion-equipes" element={<GestionEquipes />} />
            <Route path="/fonctionnalites/planning-interventions" element={<PlanningInterventions />} />
            <Route path="/fonctionnalites/application-mobile" element={<ApplicationMobile />} />
            <Route path="/fonctionnalites/suivi-interventions" element={<SuiviInterventions />} />
            <Route path="/fonctionnalites/gestion-clients" element={<GestionClients />} />
            <Route path="/fonctionnalites/archivage" element={<Archivage />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
