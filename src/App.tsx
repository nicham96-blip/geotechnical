import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SoilSamples from "./pages/SoilSamples";
import TestDashboard from "./pages/TestDashboard";
import TestDetail from "./pages/TestDetail";
import Analysis from "./pages/Analysis";
import Gallery from "./pages/Gallery";
import LabNotes from "./pages/LabNotes";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/samples" element={<SoilSamples />} />
            <Route path="/tests" element={<TestDashboard />} />
            <Route path="/tests/:testId" element={<TestDetail />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/notes" element={<LabNotes />} />
            <Route path="/team" element={<Team />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
