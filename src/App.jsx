import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import VentajasSection from "./components/VentajasSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-bg">
      <HeroSection />
      <VentajasSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
