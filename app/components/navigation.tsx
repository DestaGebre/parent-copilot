"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Important Info", href: "/important" },
];

export default function Navigation({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* --- HEADER --- */}
      <header className="w-full sticky top-0 z-50 bg-wisdom text-white shadow-md">
        <div className="w-full bg-virtue h-1.5"></div>
        
        {/* Changed to a 3-column grid/flex for perfect centering */}
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
          
          {/* 1. LEFT: LOGO */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/img/logo.png"
                alt="Logo"
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* 2. CENTER: TITLE */}
          <div className="flex justify-center">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight whitespace-nowrap">
              Parenting<span className="text-virtue">Virtue</span>
            </Link>
          </div>

          {/* 3. RIGHT: ACTIONS */}
          <div className="flex justify-end items-center gap-4">
            <div className="hidden md:flex items-center gap-6 mr-2 border-r border-white/10 pr-6">
              {!isLoggedIn ? (
                <>
                  <Link href="/login" className="text-sm font-medium hover:text-virtue transition-colors">
                    Sign In
                  </Link>
                  <Link 
                    href="/register" 
                    className="text-sm font-bold bg-white text-wisdom px-5 py-2.5 rounded-xl hover:bg-virtue hover:text-white transition-all shadow-sm active:scale-95"
                  >
                    Create Account
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium opacity-80 italic">My Dashboard</span>
                  <div className="h-9 w-9 rounded-full bg-virtue text-wisdom flex items-center justify-center font-bold">
                    P
                  </div>
                </div>
              )}
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Open Menu"
            >
              <span className="text-3xl leading-none">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* --- DRAWER, MAIN, AND FOOTER REMAIN THE SAME --- */}
      {/* ... (rest of your existing code) ... */}

      {/* --- DRAWER OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-wisdom/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* --- DRAWER CONTENT --- */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <span className="font-bold text-stable uppercase tracking-widest text-xs">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-400 hover:text-wisdom">✕</button>
          </div>

          <nav className="flex flex-col p-4 flex-grow">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-4 px-6 text-wisdom font-serif text-lg font-semibold hover:bg-blue-50 hover:text-wisdom rounded-xl transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-gray-100 md:hidden bg-gray-50/50">
             <Link href="/login" className="block w-full text-center py-3 text-stable font-medium mb-2">Sign In</Link>
             <Link href="/register" className="block w-full text-center py-4 bg-wisdom text-white font-bold rounded-xl shadow-md active:scale-95">Get Started</Link>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-background">
        {children}
      </main>

      <footer className="w-full bg-wisdom text-white/60">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 text-center md:text-left">
            <div>
              <h2 className="text-white text-2xl font-serif font-bold mb-4">
                Parenting<span className="text-virtue">Virtue</span>
              </h2>
              <p className="text-sm leading-relaxed opacity-80">
                Guiding the next generation with clarity, empathy, and virtue. Powered by specialized AI for the modern home.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-virtue font-bold text-xs uppercase tracking-widest mb-2">Platform</h3>
              {NAV_LINKS.map(link => (
                <Link key={link.name} href={link.href} className="hover:text-white transition-colors text-sm">{link.name}</Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-virtue font-bold text-xs uppercase tracking-widest mb-2">Resources</h3>
              {LEGAL_LINKS.map(link => (
                <Link key={link.name} href={link.href} className="hover:text-white transition-colors text-sm">{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40 gap-4 text-center">
            <p>© 2026 Parenting Virtue.</p>
            <p>Thoughtful Guidance for the Modern Parent.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}