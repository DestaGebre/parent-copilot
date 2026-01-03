"use client";

import Link from "next/link";
import { useState } from "react";

// Existing real pages only
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Privacy related links for the footer only
const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Important Info", href: "/important" },
];

export default function Navigation({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for auth state

  return (
    <div className="flex flex-col min-h-screen">
      {/* --- HEADER --- */}
      <header className="w-full sticky top-0 z-50 bg-blue-800 text-white shadow-md">
        <div className="w-full bg-blue-400 h-1.5"></div>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* BRAND */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            Parenting<span className="text-blue-300">Virtue</span>
          </Link>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            
            {/* AUTH SECTION (Desktop) */}
            <div className="hidden md:flex items-center gap-6 mr-2 border-r border-blue-700/50 pr-6">
              {!isLoggedIn ? (
                <>
                  <Link href="/login" className="text-sm font-medium hover:text-blue-200 transition-colors">
                    Sign In
                  </Link>
                  <Link 
                    href="/register" 
                    className="text-sm font-bold bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    Create Account
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium opacity-80 italic">My Dashboard</span>
                  <div className="h-9 w-9 rounded-full bg-blue-500 border-2 border-white/20 flex items-center justify-center font-bold">
                    P
                  </div>
                </div>
              )}
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors focus:outline-none"
              aria-label="Open Menu"
            >
              <span className="text-3xl leading-none">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* --- RIGHT SIDE DRAWER MENU --- */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <span className="font-bold text-gray-400 uppercase tracking-widest text-xs">Navigation</span>
            <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-400 hover:text-black">✕</button>
          </div>

          <nav className="flex flex-col p-4 flex-grow">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-4 px-6 text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-800 rounded-xl transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE AUTH LINKS (Inside Drawer) */}
          <div className="p-6 border-t border-gray-100 md:hidden bg-gray-50">
             <Link href="/login" className="block w-full text-center py-3 text-gray-600 font-medium mb-2">Sign In</Link>
             <Link href="/register" className="block w-full text-center py-3 bg-blue-800 text-white font-bold rounded-xl shadow-md">Get Started</Link>
          </div>
        </div>
      </div>

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex-grow bg-gray-50">
        {children}
      </main>

      {/* --- PROFESSIONAL FOOTER --- */}
      <footer className="w-full bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
            
            <div className="text-center md:text-left">
              <h2 className="text-white text-xl font-bold mb-4">Parenting Virtue</h2>
              <p className="text-sm leading-relaxed opacity-70">
                Helping parents navigate everyday challenges with AI-powered clarity and virtue.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Platform</h3>
              {NAV_LINKS.map(link => (
                <Link key={link.name} href={link.href} className="hover:text-white transition-colors text-sm">{link.name}</Link>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Transparency</h3>
              {LEGAL_LINKS.map(link => (
                <Link key={link.name} href={link.href} className="hover:text-white transition-colors text-sm">{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40 gap-4 text-center">
            <p>© 2026 Parenting Virtue. All rights reserved.</p>
            <p>Thoughtful Guidance for Modern Parents.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}