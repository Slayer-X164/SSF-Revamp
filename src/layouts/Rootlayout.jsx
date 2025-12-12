// src/routes/__root.jsx
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import FooterSection from "../pages/FooterSection";
import ScrollToTop from "../components/Scrolltotop";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full flex flex-col items-center font-inria overflow-x-hidden">
      <Header />
      <ScrollToTop />
      <Outlet />
      <FooterSection />
    </div>
  ),
});
