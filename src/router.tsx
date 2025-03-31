import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing";
import { ChatPage } from "@/chat";
import Layout from "./layout";
import Courses from "./landing/courses/Courses";
import Pricing from "./landing/pricing/Pricing";
import About from "./landing/about/About";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />

          {/* Chat routes */}
          <Route path="/chat" element={<ChatPage />} />

          {/* User routes */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
