import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/santos-logo.png'; // import correto da pasta assets

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-30
        backdrop-blur-xl
        bg-black/20
        border-b border-white/10
        shadow-lg
        transition-all duration-300
      "
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <a
          href="#home"
          onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
          className="flex items-center cursor-pointer"
        >
          <img src="/santos-logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* NAVBAR */}
        <nav className="flex gap-6">
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-80}
            className="text-gray-100 hover:text-blue-400 transition cursor-pointer"
          >
            Trajetória
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={600}
            offset={-80}
            className="text-gray-100 hover:text-blue-400 transition cursor-pointer"
          >
            Habilidades
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-80}
            className="text-gray-100 hover:text-blue-400 transition cursor-pointer"
          >
            Projetos
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="text-gray-100 hover:text-blue-400 transition cursor-pointer"
          >
            Redes
          </Link>
        </nav>

      </div>
    </header>
  );
}
