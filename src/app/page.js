'use client'; // Add this line at the top of your page.js file
import { useMemo } from 'react'; 
import './globals.css';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

// TypewriterTagline Component
function TypewriterTagline() {
  const [text, setText] = useState('');
  const phrases = useMemo(() => [
    "Bachelor of Software Engineering - Superior University",
    "Graduated in 2024",
    "Specialized in Web & App Development",
  ], []);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[index];

    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setText('');
        setIndex((index + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, phrases]);

  return (
    <span className="block text-cyan-400 text-base md:text-lg mt-3 min-h-[3rem] md:min-h-[1.5rem] tracking-wide font-medium">
      {text}
    </span>
  );
}

export default function Home() {
  const name = "Muhammad Saqib Afzal";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a navigation link
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="bg-gradient-to-r from-gray-950 to-black text-white min-h-screen font-sans overflow-x-hidden scroll-smooth relative">
      {/* Background Floating Stars */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Header */}
      <header className="w-full px-4 py-4 flex flex-wrap justify-between items-center backdrop-blur-lg bg-black/70 shadow-xl sticky top-0 z-50 border-b border-gray-800">
        {/* Title */}
        <h1 className="text-xl font-bold tracking-wide text-white glow sm:text-2xl md:text-3xl">
          Saqib&apos;s Portfolio
        </h1>

        {/* Mobile Hamburger Menu */}
        <button className="block md:hidden text-white z-50" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </>
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav 
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center w-full md:w-auto md:space-x-4 space-y-4 md:space-y-0 md:relative fixed top-16 md:top-0 left-0 right-0 md:bg-transparent bg-black/90 p-6 pt-8 md:p-0 transition-all duration-300 z-40`}
        >
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleNavClick}
              className="text-base glow-btn py-2 px-3 rounded-md font-semibold text-white hover:text-yellow-400 transition-all duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download="Muhammad_Saqib_Afzal_Resume"
          className="hidden md:flex py-2 px-4 rounded-md text-sm font-semibold text-white bg-opacity-70 bg-black hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M12 3v12M5 12l7 7 7-7" />
          </svg>
          <span>Download Resume</span>
        </a>
      </header>
{/* Hero Section */}
<section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 gap-8 relative z-10">
  <motion.div
    className="w-full md:w-1/2 text-center md:text-left"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-snug">
    <span className="text-gray-300">Hi, I&apos;m </span>
      <span className="text-white glow">{name}</span>
    </h2>

    {/* Typewriter Tagline */}
    <TypewriterTagline />

    <p className="text-base md:text-xl text-gray-400 mt-4">
      I build immersive digital experiences using futuristic web and mobile technologies with clean UI, elegant animations, and innovative ideas.
    </p>
    
    {/* Mobile Resume Button */}
    <a
      href="/resume.pdf"
      download="Muhammad_Saqib_Afzal_Resume"
      className="inline-flex md:hidden py-2 px-4 rounded-md text-sm font-semibold text-white bg-opacity-70 bg-black hover:bg-opacity-100 transition-all duration-300 shadow-md hover:shadow-lg items-center gap-2 mt-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M12 3v12M5 12l7 7 7-7" />
      </svg>
      <span>Download Resume</span>
    </a>
  </motion.div>

  <motion.div
    className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-full bg-gray-800 border-0 border-gray-600 shadow-xl">
      <Image
        src="/saqib.jpg"
        alt={name}
        width={208}
        height={208}
        className="object-cover"
        priority
      />
    </div>
  </motion.div>
</section>
      {/* About Section */}
      <section id="about" className="px-6 md:px-20 py-16 md:py-20 text-center md:text-left flex justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-white glow">About Me</h3>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed font-medium">
            I&apos;m a dedicated <span className="text-white font-bold">Full-Stack Developer</span> who crafts clean, efficient, and engaging digital experiences. My toolbox includes <span className="text-white font-bold">Next.js</span>, <span className="text-white font-bold">Tailwind CSS</span>, and <span className="text-white font-bold">JavaScript</span> on the front end, and powerful backend support using <span className="text-white font-bold">Node.js</span>, <span className="text-white font-bold">MongoDB</span>, and <span className="text-white font-bold">Firebase</span>.
            <br /><br />
            I love transforming complex ideas into sleek interfaces and scalable systems. Whether it&apos;s building dynamic web apps, optimizing performance, or implementing real-time features — I bring precision, passion, and creativity to every line of code.
            <br /><br />
            Constantly evolving, always building — I&apos;m here to push boundaries and turn vision into reality.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 md:px-20 py-16 md:py-20 text-center">
        <h3 className="text-3xl font-bold mb-8 md:mb-10 text-white glow">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[{
            name: "HTML", level: 95 },
            { name: "CSS / Tailwind", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "React / Next.js", level: 80 },
            { name: "Firebase", level: 75 },
            { name: "Java (Android)", level: 70 },
          ].map((skill, idx) => (
            <div key={idx} className="text-left">
              <div className="flex justify-between mb-1 text-sm font-medium text-gray-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700/40 rounded-full h-3 md:h-4 overflow-hidden">
                <div
                  className="h-3 md:h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_#0ff]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section id="techstack" className="px-6 md:px-20 py-16 md:py-20 text-center text-white">
        <h3 className="text-3xl font-bold mb-8 md:mb-10 text-white glow">Tech Stack & Experience</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 text-left">
          
          {/* Programming Card */}
          <div className="bg-gray-800 p-4 md:p-6 rounded-2xl backdrop-blur-lg bg-opacity-60 shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="flex items-center mb-4">
              <i className="fas fa-code text-teal-400 text-xl md:text-2xl mr-2 md:mr-3"></i>
              <h4 className="text-lg md:text-xl font-semibold text-teal-400">Programming</h4>
            </div>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-300">
              <li>C++ (DSA, OOP, Problem Solving)</li>
              <li>Java (ACPC, Android Dev)</li>
              <li>JavaScript (Frontend + Backend)</li>
            </ul>
          </div>

          {/* Web Development Card */}
          <div className="bg-gray-800 p-4 md:p-6 rounded-2xl backdrop-blur-lg bg-opacity-60 shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="flex items-center mb-4">
              <i className="fab fa-html5 text-teal-400 text-xl md:text-2xl mr-2 md:mr-3"></i>
              <h4 className="text-lg md:text-xl font-semibold text-teal-400">Web Development</h4>
            </div>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-300">
              <li>HTML, CSS, JavaScript</li>
              <li>Next.js, Tailwind CSS, Node.js</li>
              <li>Responsive UI & Animation Effects</li>
            </ul>
          </div>

          {/* Mobile App Dev Card */}
          <div className="bg-gray-800 p-4 md:p-6 rounded-2xl backdrop-blur-lg bg-opacity-60 shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="flex items-center mb-4">
              <i className="fab fa-android text-teal-400 text-xl md:text-2xl mr-2 md:mr-3"></i>
              <h4 className="text-lg md:text-xl font-semibold text-teal-400">Mobile App Dev</h4>
            </div>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-300">
              <li>Android Studio (Java & XML)</li>
              <li>UI Design & Firebase Integration</li>
            </ul>
          </div>

          {/* Database & Tools Card */}
          <div className="bg-gray-800 p-4 md:p-6 rounded-2xl backdrop-blur-lg bg-opacity-60 shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="flex items-center mb-4">
              <i className="fas fa-database text-teal-400 text-xl md:text-2xl mr-2 md:mr-3"></i>
              <h4 className="text-lg md:text-xl font-semibold text-teal-400">Database & Tools</h4>
            </div>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-300">
              <li>MySQL</li>
              <li>NetBeans, Visual Studio</li>
              <li>VMware, Ubuntu Linux</li>
            </ul>
          </div>

          {/* Software Engineering Card */}
          <div className="bg-gray-800 p-4 md:p-6 rounded-2xl backdrop-blur-lg bg-opacity-60 shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="flex items-center mb-4">
              <i className="fas fa-cogs text-teal-400 text-xl md:text-2xl mr-2 md:mr-3"></i>
              <h4 className="text-lg md:text-xl font-semibold text-teal-400">Software Engineering</h4>
            </div>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-300">
              <li>Software Quality with Cypress</li>
              <li>Project Management with Jira</li>
            </ul>
          </div>

          {/* Freelancing Card */}
          <div className="bg-gray-800 p-4 md:p-6 rounded-2xl backdrop-blur-lg bg-opacity-60 shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="flex items-center mb-4">
              <i className="fas fa-laptop-code text-teal-400 text-xl md:text-2xl mr-2 md:mr-3"></i>
              <h4 className="text-lg md:text-xl font-semibold text-teal-400">Freelancing</h4>
            </div>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-300">
              <li>Built Websites, Android Apps for Clients</li>
              <li>Focus on Clean UI, Client Requirements, Fast Delivery</li>
            </ul>
          </div>
        </div>
      </section>
{/* Projects Section */}
<section id="projects" className="px-6 md:px-20 py-16 md:py-20 text-center">
  <h3 className="text-3xl font-bold mb-8 md:mb-10 text-white glow">Projects</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
    {[{
        name: "To-do List",
        description: "Task manager with add/edit/delete functionality, built using React + localStorage.",
      },
      {
        name: "Weather App",
        description: "Get real-time weather information by city using OpenWeatherMap API.",
      },
      {
        name: "Portfolio Website",
        description: "Modern portfolio with smooth animations built using Next.js and Tailwind CSS.",
      },
      {
        name: "Quiz App",
        description: "A quiz app that lets users answer questions and tracks scores, built using JavaScript.",
      },
      {
        name: "Blog App",
        description: "Create, edit, and delete blog posts with user authentication, built using Node.js and MongoDB.",
      },
      {
        name: "E-commerce Website",
        description: "Build a full-fledged e-commerce website with product listings, shopping cart, and checkout functionality.",
      },
    ].map((project, idx) => (
      <div
        key={idx}
        className="relative group bg-white/10 border border-cyan-400 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-lg overflow-hidden transition-transform hover:scale-105 h-24 md:h-28 flex items-center justify-center"
      >
        <div className="absolute inset-0 flex justify-center items-center text-white text-lg md:text-xl font-semibold group-hover:hidden">
          <span>{project.name}</span>
        </div>
        <div className="absolute inset-0 flex justify-center items-center text-white text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 backdrop-blur-lg p-3 md:p-4">
          <p>{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Contact Section */}
      {/* Contact Section */}
<section id="contact" className="px-6 md:px-20 py-16 md:py-20 text-center">
  <h3 className="text-3xl font-bold mb-4 md:mb-6 text-white glow">Contact Me</h3>
  <p className="text-gray-300 max-w-xl mx-auto mb-6">
    Ready to create something amazing together? Let&apos;s connect!
  </p>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
    {/* Gmail Button with Icon and Analytics Tracking */}
    <a
      href="mailto:saqibchauhdary109@gmail.com"
      className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-transparent text-gray-400 hover:text-white hover:bg-gray-700 font-semibold rounded-lg transition duration-300 w-full sm:w-auto justify-center"
      onClick={() => {
        if (window.gtag) {
          window.gtag('event', 'contact_click', {
            'event_category': 'Contact',
            'event_label': 'Email'
          });
        }
      }}
    >
      <i className="fas fa-envelope mr-2"></i>
      <span>Gmail</span>
    </a>

    {/* GitHub Button with Icon and Analytics Tracking */}
    <a
      href="https://github.com/Sonu7552"
      target="_blank"
      className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-transparent text-gray-400 hover:text-white hover:bg-gray-700 font-semibold rounded-lg transition duration-300 w-full sm:w-auto justify-center"
      onClick={() => {
        if (window.gtag) {
          window.gtag('event', 'contact_click', {
            'event_category': 'Contact',
            'event_label': 'GitHub'
          });
        }
      }}
    >
      <i className="fab fa-github mr-2"></i>
      <span>GitHub</span>
    </a>

    {/* LinkedIn Button with Icon and Analytics Tracking */}
    <a
      href="https://www.linkedin.com/in/muhammad-saqib-afzal-90a799234"
      target="_blank"
      className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-transparent text-gray-400 hover:text-white hover:bg-gray-700 font-semibold rounded-lg transition duration-300 w-full sm:w-auto justify-center"
      onClick={() => {
        if (window.gtag) {
          window.gtag('event', 'contact_click', {
            'event_category': 'Contact',
            'event_label': 'LinkedIn'
          });
        }
      }}
    >
      <i className="fab fa-linkedin mr-2"></i>
      <span>LinkedIn</span>
    </a>
  </div>
</section>
      {/* Footer Section */}
      <footer className="text-center text-gray-500 py-6 border-t border-white/10 px-4">
        <p className="text-xs sm:text-sm">
          Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
        </p>
        <p className="text-xs mt-2">
          © {new Date().getFullYear()} Muhammad Saqib Afzal. All rights reserved.
        </p>
      </footer>
    </main>
  );
}