import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";

// Layout
import Header from "./components/Header";
import FooterSection from "./pages/FooterSection";

// Pages
import Home from "./pages/Home";
import Aboutus from "./components/Aboutus";
import Getinvolved from "./components/GetInvolved";
import KeyFocus from "./pages/KeyFocus";
import Team from "./pages/Team";
import Collabrations from "./pages/Collabrations";
import Impactstories from "./components/ImpactStories";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// -------------------- ROOT LAYOUT --------------------
const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
};

// -------------------- ROOT ROUTE --------------------
const rootRoute = createRootRoute({
  component: RootLayout,
});

// -------------------- CHILD ROUTES --------------------
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: Aboutus,
});

const getInvolvedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/get-involved",
  component: Getinvolved,
});

const keyFocusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/key-focus",
  component: KeyFocus,
});

const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/team",
  component: Team,
});

const collabRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/collabrations",
  component: Collabrations,
});

const storiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/impact-stories",
  component: Impactstories,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: Blog,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// -------------------- ROUTER --------------------
export const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    aboutRoute,
    getInvolvedRoute,
    keyFocusRoute,
    teamRoute,
    collabRoute,
    storiesRoute,
    blogRoute,
    contactRoute,
  ]),
});
