"use client";

import { Button } from "@/components/ui/button";
import { Search, Menu, X, Calendar, Linkedin, BookOpen, Users, HelpCircle, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siX } from "simple-icons";


const navLinks = [
  { label: "Overview", href: "#purpose" },
  // { label: "Program", href: "#program" },
  // { label: "Publications", href: "#publications" },
  { label: "Schedule", href: "#schedule" },
  // { label: "Insights", href: "#insights" },
  { label: "Committee", href: "#committee" },
  // { label: "Apply", href: "#apply" },
];

const pageLinks = [
  { label: "Events", href: "/events" },
];

interface NavbarProps {
  onOpenSignup: () => void;
}

export function Navbar({ onOpenSignup }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-medium text-stone-900 tracking-tight hover:text-stone-700 transition-colors"
            >
              {/* <img
                src="/LOGO_TIG_PICTURE_CLEAN_OFFWHITE.svg"
                alt="Logo"
                className="h-10 w-auto brightness-0"
              /> */}
              <span>AIDDA <span className="font-light text-stone-400">Institute</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-normal"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={`/${link.href}`}
                  className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-normal"
                >
                  {link.label}
                </Link>
              )
            ))}
            <span className="text-stone-300">|</span>
            <Link
              href="/events"
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-normal inline-flex items-center gap-1.5"
            >
              <Calendar className="h-3.5 w-3.5" />
              Events
            </Link>
            <Link
              href="/resources"
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-normal inline-flex items-center gap-1.5"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Resources
            </Link>
            {/* <Link
              href="/working-groups"
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-normal inline-flex items-center gap-1.5"
            >
              <Users className="h-3.5 w-3.5" />
              Working Groups
            </Link> */}
            <Link
              href="/research-questions"
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-normal inline-flex items-center gap-1.5"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              Research Questions
            </Link>
            {/* <Link
              href="/benchmarks"
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-normal inline-flex items-center gap-1.5"
            >
              <BarChart3 className="h-3.5 w-3.5" />
              Benchmarks
            </Link> */}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center gap-3 mr-3">
              <a
                href="https://x.com/AIDDA_Institute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-700 transition-colors"
                aria-label="X"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={siX.path} />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/aidda-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

            </div>
            <Button
              onClick={onOpenSignup}
              className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-6 text-sm font-normal transition-colors"
            >
              Get Involved
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
              isHomePage ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={`/${link.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors font-normal"
            >
              Events
            </Link>
            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors font-normal"
            >
              Resources
            </Link>
            {/* <Link
              href="/working-groups"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors font-normal"
            >
              Working Groups
            </Link> */}
            <Link
              href="/research-questions"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors font-normal"
            >
              Research Questions
            </Link>
            {/* <Link
              href="/benchmarks"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors font-normal"
            >
              Benchmarks
            </Link> */}
          </div>
        </div>
      )}

    </nav>
  );
}
