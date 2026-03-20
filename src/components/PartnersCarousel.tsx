"use client";

import { useEffect, useRef } from "react";
import { Building2, GraduationCap, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Partner } from "@/data/working-groups";

interface PartnersCarouselProps {
  partners: Partner[];
  className?: string;
  variant?: "dark" | "light";
}

function PartnerIcon({ type }: { type: Partner["type"] }) {
  switch (type) {
    case "university":
      return <GraduationCap className="h-5 w-5" />;
    case "research":
      return <FlaskConical className="h-5 w-5" />;
    case "industry":
      return <Building2 className="h-5 w-5" />;
  }
}

function PartnerCard({ partner, variant = "light" }: { partner: Partner; variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  
  return (
    <div className="flex-shrink-0 w-[180px] mx-3">
      <div className={cn(
        "rounded-xl p-5 h-full transition-colors group border",
        isDark 
          ? "bg-slate-800/50 border-stone-700/50 hover:border-stone-600/50" 
          : "bg-stone-50 border-stone-200 hover:border-stone-300 hover:bg-white"
      )}>
        <div className="flex flex-col items-center text-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
            isDark 
              ? "bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-stone-400 group-hover:text-stone-300" 
              : "bg-white border border-stone-200 text-stone-500 group-hover:text-stone-700 shadow-sm"
          )}>
            <PartnerIcon type={partner.type} />
          </div>
          <div>
            <h4 className={cn(
              "text-sm font-medium mb-0.5",
              isDark ? "text-white" : "text-stone-900"
            )}>{partner.name}</h4>
            <p className={cn(
              "text-xs",
              isDark ? "text-stone-500" : "text-stone-500"
            )}>{partner.location}</p>
          </div>
          <span className={cn(
            "text-xs px-2 py-0.5 rounded-full capitalize",
            partner.type === "university" && (isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-100 text-blue-700"),
            partner.type === "research" && (isDark ? "bg-violet-500/10 text-violet-400" : "bg-violet-100 text-violet-700"),
            partner.type === "industry" && (isDark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-100 text-emerald-700")
          )}>
            {partner.type}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PartnersCarousel({ partners, className, variant = "light" }: PartnersCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const isDark = variant === "dark";

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isPaused = false;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += speed;
        
        // Reset when we've scrolled past the first set of items
        const firstSetWidth = scrollContainer.scrollWidth / 2;
        if (scrollPositionRef.current >= firstSetWidth) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Pause on hover
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Double the partners for seamless infinite scroll
  const doubledPartners = [...partners, ...partners];

  return (
    <div className={cn("relative overflow-hidden py-4", className)}>
      {/* Gradient overlays for smooth edges */}
      <div className={cn(
        "absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none",
        isDark ? "bg-gradient-to-r from-slate-900 to-transparent" : "bg-gradient-to-r from-white to-transparent"
      )} />
      <div className={cn(
        "absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none",
        isDark ? "bg-gradient-to-l from-slate-900 to-transparent" : "bg-gradient-to-l from-white to-transparent"
      )} />
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {doubledPartners.map((partner, index) => (
          <PartnerCard key={`${partner.name}-${index}`} partner={partner} variant={variant} />
        ))}
      </div>
    </div>
  );
}
