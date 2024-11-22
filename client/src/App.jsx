import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-light dark:bg-dark transition-all duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;