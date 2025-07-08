import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Index />} />
            <Route path="/" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/my-characters" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/community" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/chats" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/gallery" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/settings" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
