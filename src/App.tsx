import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import RiskPrediction from "./pages/RiskPrediction";
import CounselingRequest from "./pages/CounselingRequest";
import Attendance from "./pages/Attendance";
import Academic from "./pages/Academic";
import Notifications from "./pages/Notifications";
import FeesStructure from "./pages/FeesStructure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/risk-prediction" element={<RiskPrediction />} />
          <Route path="/counseling" element={<CounselingRequest />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/fees" element={<FeesStructure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
