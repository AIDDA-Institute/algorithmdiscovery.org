"use client";

import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";


const navLinks = [
  { label: "Overview", href: "#purpose" },
  // { label: "Program", href: "#program" },
  // { label: "Publications", href: "#publications" },
  { label: "Schedule", href: "#schedule" },
    // { label: "Insights", href: "#insights" },
  { label: "Committee", href: "#committee" },
  // { label: "Apply", href: "#apply" },
];

interface NavbarProps {
  onOpenSignup: () => void;
}

export function Navbar({ onOpenSignup }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#overview")}
              className="flex items-center gap-3 text-lg font-medium text-stone-900 tracking-tight hover:text-stone-700 transition-colors"
            >
              {/* <img
                src="/LOGO_TIG_PICTURE_CLEAN_OFFWHITE.svg"
                alt="Logo"
                className="h-10 w-auto brightness-0"
              /> */}
              <span>Institute for <span className="font-light text-stone-400">Algorithm Mining</span></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-normal"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={onOpenSignup}
              className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-6 text-sm font-normal transition-colors"
            >
              Apply
            </Button>
            {/* <button className="p-2.5 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-colors">
              <Search className="h-4 w-4" />
            </button> */}
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
}
