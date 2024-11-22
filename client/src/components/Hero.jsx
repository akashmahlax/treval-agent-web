import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".hero-btn",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <header className="hero min-h-screen bg-gradient-to-br from-primary to-accent dark:from-dark dark:to-primary flex flex-col justify-center items-center text-center text-white">
      <h1 className="hero-text text-5xl font-bold mb-4">
        Explore Punjab Like Never Before
      </h1>
      <p className="text-xl mb-6">
        Tailored travel experiences to meet all your needs.
      </p>
      <button className="hero-btn px-8 py-3 bg-white text-primary dark:text-dark font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        Book Your Trip Now
      </button>
    </header>
  );
};

export default Hero;