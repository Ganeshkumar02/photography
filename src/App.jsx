import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";
import TextCard from "./components/TextCard/TextCard";
import PortfolioGallery from "./components/PortfolioGallery/PortfolioGallery";
import StudioLocations from "./components/StudioLocations/StudioLocations";
import PhotographyServices from "./components/PhotographyServices/PhotographyServices";
import Testimonials from "./components/Testimonials/Testimonials";
// import MarqueeText from "./components/MarqueeText/MarqueeText";
import HeroPremium from "./components/HeroPremium/HeroPremium";
import AboutSection from "./components/AboutSection/AboutSection";
import MeetFounders from "./components/MeetFounders/MeetFounders";
import FAQGrid from "./components/FAQGrid/FAQGrid";
import InstagramCollection from "./components/InstagramCollection/InstagramCollection";
import BookShootCTA from "./components/BookShootCTA/BookShootCTA";

// Service Pages
import WeddingPhotography from "./components/PhotographyServices/WeddingPhotography";
import CinematicFilms from "./components/PhotographyServices/CinematicFilms";
import PreWedding from "./components/PhotographyServices/PreWedding";
import HaldiMehndi from "./components/PhotographyServices/HaldiMehndi";
import Reception from "./components/PhotographyServices/Reception";

// About Us Page
import AboutUs from "./Pages/AboutUs/AboutUs";
import { Home } from "lucide-react";
import Packages from "./Pages/Packages/Packages";
import Portfolio from "./Pages/Portfolio/Portfolio";
import ContactUs from "./Pages/ContactUs/ContactUs";
import BookYourDate from "./Pages/BookYourDate/BookYourDate";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* 🏠 HOMEPAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TextCard />
              <PortfolioGallery />
              <StudioLocations />
              <PhotographyServices />
              <Testimonials />
              {/* <MarqueeText /> */}
              <HeroPremium />
              <AboutSection />
              <MeetFounders />
              <FAQGrid />
              <InstagramCollection />
              <BookShootCTA />
            </>
          }
        />

        {/* 📸 SERVICE PAGES */}
        <Route path="/services/wedding-photography" element={<WeddingPhotography />} />
        <Route path="/services/cinematic-films" element={<CinematicFilms />} />
        <Route path="/services/pre-wedding" element={<PreWedding />} />
        <Route path="/services/haldi-mehndi" element={<HaldiMehndi />} />
        <Route path="/services/reception" element={<Reception />} />

        {/* ℹ️ ABOUT US PAGE */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/book" element={<BookYourDate />} />




      </Routes>

      <Footer />
    </>
  );
}
