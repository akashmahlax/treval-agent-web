// import { useEffect } from "react";
// import { gsap } from "gsap";

// const Navbar = ({ darkMode, setDarkMode }) => {
//   useEffect(() => {
//     gsap.fromTo(
//       ".navbar",
//       { y: -50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
//     );
//   }, []);

//   return (
//     <nav className="navbar fixed top-0 w-full flex justify-between items-center p-4 bg-primary dark:bg-dark text-white shadow-lg">
//       <h1 className="text-2xl font-bold">Vinay Harri Travels</h1>
//       <ul className="hidden md:flex space-x-6 text-lg">
//         <li><a href="#about" className="hover:text-accent">About Us</a></li>
//         <li><a href="#services" className="hover:text-accent">Services</a></li>
//         <li><a href="#testimonials" className="hover:text-accent">Testimonials</a></li>
//         <li><a href="#contact" className="hover:text-accent">Contact</a></li>
//       </ul>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="bg-accent text-dark p-2 rounded-full"
//       >
//         {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;



const Navbar = () => {

    const nav = [
        { path : "/", name : "Home"},
        { path : "/about", name : "About"},
        { path : "/services", name : "Services"},
        { path : "/testimonials", name : "Testimonials"},
        { path : "/contact", name : "Contact"},
    ];

  return (
    <>
        <nav>
            <ul>
                {nav.map(({path, name}) => (
                    <li key={path}><a href={path}>{name}</a></li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default Navbar