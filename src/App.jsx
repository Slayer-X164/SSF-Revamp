import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FooterSection from "./pages/FooterSection";

import Home from "./pages/Home";
import Getinvolved from "./components/GetInvolved";
import Aboutus from "./components/Aboutus";
import KeyFocus from "./pages/KeyFocus";
import Team from "./pages/Team";
import Collabrations from "./pages/Collabrations";
import Impactstories from "./components/ImpactStories";
import ProgressSection from "./pages/ProgressSection";
import Supportour from "./components/Supportour";
import FAQSection from "./pages/FAQSection";
import ScrollToTop from "./components/Scrolltotop";
import AbtDetailed from "./components/AboutDetailed";
import DonateAndSupport from "./pages/DonateAndSupport";
import Blog from "./pages/Blog";
import ReadMoreSection from "./components/ReadMoreSection";

const App = () => {
    const postData = [
    { id: 1, image: "img1.jpg", title: "Blog Title 1", summary: "Lorem...", link: "#", date: "2025-01-18" },
    { id: 2, image: "img2.jpg", title: "Blog Title 2", summary: "Lorem...", link: "#", date: "2025-01-15" },
    { id: 3, image: "img3.jpg", title: "Blog Title 3", summary: "Lorem...", link: "#", date: "2025-01-10" },
    { id: 4, image: "img4.jpg", title: "Blog Title 4", summary: "Lorem...", link: "#", date: "2025-01-09" },
    { id: 5, image: "img5.jpg", title: "Blog Title 5", summary: "Lorem...", link: "#", date: "2025-01-05" },
    { id: 6, image: "img6.jpg", title: "Blog Title 6", summary: "Lorem...", link: "#", date: "2025-01-03" },
    { id: 7, image: "img7.jpg", title: "Blog Title 7", summary: "Lorem...", link: "#", date: "2025-01-01" },
    { id: 8, image: "img8.jpg", title: "Blog Title 8", summary: "Lorem...", link: "#", date: "2024-12-30" },
    { id: 9, image: "img9.jpg", title: "Blog Title 9", summary: "Lorem...", link: "#", date: "2024-12-25" },
    { id: 10, image: "img10.jpg", title: "Blog Title 10", summary: "Lorem...", link: "#", date: "2024-12-20" },
    { id: 11, image: "img11.jpg", title: "Blog Title 11", summary: "Lorem...", link: "#", date: "2024-12-10" }
  ];
  
  return (
    
    <div className="min-h-screen w-full flex flex-col items-center font-inria overflow-x-hidden">
      <Header />

      <ScrollToTop></ScrollToTop>
      {/* Routing */}
      <Routes>
        {/* Home Page (All sections) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Getinvolved />
              <Aboutus />
              <KeyFocus />
              <Impactstories />
              <Team />
              <Collabrations />
              <ProgressSection />
              <Supportour />
              <FAQSection />
              <FooterSection />
            </>
          }
        />

        {/* About Detailed/Campaign Page */}
        <Route
          path="/Campaign"
          element={
            <>
              <AbtDetailed />
              <FooterSection />
            </>
          }
        />
        {/* donate and support */}
        <Route
        path="/DonateAndSupport"
        element={
          <>
          <DonateAndSupport/>
          <FooterSection/>
          </>
        }
        />
        {/* Blog */}
         <Route
        path="/Blog"
        element={
          <>
          <ReadMoreSection posts={postData} />
          <FooterSection/>
          </>
        }
        />
      </Routes>
    </div>
  );
};

export default App;
