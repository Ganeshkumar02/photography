import AboutSection from "./components/AboutSection/AboutSection";
import BookShootCTA from "./components/BookShootCTA/BookShootCTA";
import FAQGrid from "./components/FAQGrid/FAQGrid";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HeroPremium from "./components/HeroPremium/HeroPremium";
import InstagramCollection from "./components/InstagramCollection/InstagramCollection";
import MarqueeText from "./components/MarqueeText/MarqueeText";
import MeetFounders from "./components/MeetFounders/MeetFounders";
import Navbar from "./components/Navbar/Navbar";
import PhotographyServices from "./components/PhotographyServices/PhotographyServices";
import PortfolioGallery from "./components/PortfolioGallery/PortfolioGallery";
import StudioLocations from "./components/StudioLocations/StudioLocations";
import Testimonials from "./components/Testimonials/Testimonials";
import TextCard from "./components/TextCard/TextCard";



export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TextCard />
      <PortfolioGallery />
      <StudioLocations />
      <PhotographyServices />
      <Testimonials />
      <MarqueeText />
      <HeroPremium />
      <AboutSection />
      <MeetFounders />
      <FAQGrid />
      <InstagramCollection />
      <BookShootCTA />
      <Footer />
    </>
  );
}
