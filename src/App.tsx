import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToHash } from "./components/ScrollToHash";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import Fonctionnalites from "./pages/Fonctionnalites";
import Installation from "./pages/Installation";
import NotFound from "./pages/NotFound";
import SignupMensuel from "./pages/SignupMensuel";
import SignupAnnuel from "./pages/SignupAnnuel";
import SignupBiennal from "./pages/SignupBiennal";
import CheckoutSimulated from "./pages/checkout/CheckoutSimulated";
import CheckoutMerci from "./pages/checkout/CheckoutMerci";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/fonctionnalites" element={<Fonctionnalites />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/mensuel" element={<SignupMensuel />} />
          <Route path="/engagement-1-an" element={<SignupAnnuel />} />
          <Route path="/engagement-2-ans" element={<SignupBiennal />} />
          <Route path="/checkout/simulated" element={<CheckoutSimulated />} />
          <Route path="/checkout/merci" element={<CheckoutMerci />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
