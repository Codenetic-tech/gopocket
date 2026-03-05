import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrderBook from "./pages/OrderBook";
import PositionBook from "./pages/PositionBook";
import Holdings from "./pages/Holdings";
import MutualFunds from "./pages/MutualFunds";
import Settings from "./pages/Settings";
import StrategyBuilder from "./pages/StrategyBuilder";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";


const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const savedHsl = localStorage.getItem("theme-color-hsl");
    if (savedHsl) {
      document.documentElement.style.setProperty("--primary", savedHsl);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/orderbook" element={<OrderBook />} />
              <Route path="/positions" element={<PositionBook />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/mutualfunds" element={<MutualFunds />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/strategy-builder" element={<StrategyBuilder />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
