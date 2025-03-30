import { BrowserRouter, Route, Routes } from "react-router";
import { LandingPage } from "@/landing";
import { ChatPage } from "@/chat";
import Layout from "./layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Chat routes */}
          <Route path="/chat" element={<ChatPage />} />

          {/* User routes */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
