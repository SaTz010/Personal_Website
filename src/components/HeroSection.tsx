import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Briefcase, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  casual: boolean;
  onModeChange: (casual: boolean) => void;
}

const HeroSection = ({ casual, onModeChange }: HeroSectionProps) => (
  <section className="px-4 sm:px-6 md:px-8 pt-40 sm:pt-48 pb-12 sm:pb-16 md:pb-24 max-w-7xl mx-auto">
    <div className="hidden sm:block sm:mb-10">
      <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">What brings you here?</p>
      <div role="group" aria-label="Choose your view" className="grid w-full grid-cols-2 gap-1 rounded-full border border-border bg-secondary/40 p-1 sm:inline-flex sm:w-auto">
        <Button type="button" variant={casual ? "ghost" : "default"} aria-pressed={!casual} onClick={() => onModeChange(false)} className="h-11 min-w-0 rounded-full px-2 sm:px-4 text-xs sm:text-sm"><Briefcase aria-hidden="true" />Here for work</Button>
        <Button type="button" variant={casual ? "default" : "ghost"} aria-pressed={casual} onClick={() => onModeChange(true)} className="h-11 min-w-0 rounded-full px-2 sm:px-4 text-xs sm:text-sm"><Gamepad2 aria-hidden="true" />Just exploring</Button>
      </div>
    </div>
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.48fr)] lg:items-center lg:gap-12 xl:gap-20">
      <motion.div key={casual ? "casual" : "work"} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <p className="text-xs sm:text-sm tracking-wide text-muted-foreground mb-4 sm:mb-6">Sanskar Ananta Tiwari · {casual ? "Off the clock" : "Software engineer"} · Kathmandu</p>
        <h1 className="landing-headline heading-display text-[clamp(2rem,9vw,2.75rem)] sm:text-6xl lg:text-8xl leading-[1.08] tracking-tight max-w-4xl mb-6 sm:mb-8 text-balance">
          {casual ? <>A few rounds.<br /><span className="text-primary">A few reps.</span></> : <>I ask why.<br />Then I build.</>}
        </h1>
        <p className="font-serif text-lg sm:text-2xl lg:text-3xl leading-relaxed max-w-3xl text-foreground">
          {casual
            ? "Away from work, I'm usually in a VALORANT lobby, at the gym, or watching football, cricket, Formula 1, and esports. A few trophies have found their way home, too."
            : "I'm Sanskar, a software engineer and former Product Lead. I connect product thinking with hands-on engineering to build useful software."}
        </p>
        <div className="grid gap-3 mt-6 sm:flex sm:flex-wrap sm:gap-4 sm:mt-10">
          <a href={casual ? "#outside-work" : "#projects"} className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-3 min-h-12 rounded hover:bg-link-red-hover transition-colors">
            {casual ? "Pick a plan" : "View projects"} <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>
          <Link to={casual ? "/people" : "/connect"} className="inline-flex items-center justify-center gap-3 border border-primary text-primary px-6 py-3 min-h-12 rounded hover:bg-secondary transition-colors">
            {casual ? "Get to know me" : "Contact me"} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
      <svg viewBox="0 0 320 320" aria-hidden="true" focusable="false" className="group hidden w-full max-w-[22rem] justify-self-end text-primary lg:block">
        <defs>
          <path id="hero-name-ring" d="M 160,32 a 128,128 0 1,1 0,256 a 128,128 0 1,1 0,-256" />
        </defs>
        <g className="origin-center motion-safe:animate-[spin_36s_linear_infinite] group-hover:[animation-play-state:paused]">
          <text fill="currentColor" fontSize="18" fontWeight="500" letterSpacing="3">
            <textPath href="#hero-name-ring" textLength="790" lengthAdjust="spacing">SANSKAR ANANTA TIWARI · SANSKAR ANANTA TIWARI ·</textPath>
          </text>
        </g>
        <text x="160" y="160" dy=".3em" textAnchor="middle" fill="currentColor" fontSize="96" className="font-serif">s</text>
      </svg>
    </div>
  </section>
);

export default HeroSection;
