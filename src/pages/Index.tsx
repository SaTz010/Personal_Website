import { useState } from "react";
import { ArrowDown, Briefcase, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import OutsideWorkSection from "@/components/OutsideWorkSection";

const Index = () => {
  const [casual, setCasual] = useState(false);

  return (
    <div className="landing-page min-h-screen bg-background text-foreground" data-audience={casual ? "casual" : "work"}>
      <Navigation mobileControls={
        <div role="group" aria-label="Choose your view" className="flex items-center rounded-full border border-border bg-secondary/40 p-0.5">
          <Button type="button" size="icon" variant={casual ? "ghost" : "default"} aria-label="Work view" title="Here for work" aria-pressed={!casual} onClick={() => setCasual(false)} className="h-9 w-9 rounded-full [&_svg]:size-4"><Briefcase aria-hidden="true" /></Button>
          <Button type="button" size="icon" variant={casual ? "default" : "ghost"} aria-label="Casual view" title="Just exploring" aria-pressed={casual} onClick={() => setCasual(true)} className="h-9 w-9 rounded-full [&_svg]:size-4"><Gamepad2 aria-hidden="true" /></Button>
        </div>
      } />
      <main id="main-content" tabIndex={-1}>
        <HeroSection casual={casual} onModeChange={setCasual} />
        {casual && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <OutsideWorkSection />
            <section aria-labelledby="back-to-work-heading" className="max-w-4xl mx-auto rounded border border-primary/25 bg-secondary/40 p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 text-sm text-primary mb-4"><Briefcase className="w-4 h-4" aria-hidden="true" />back to building</p>
              <h2 id="back-to-work-heading" className="font-serif text-2xl sm:text-4xl mb-4">Alright, back to work.</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">Here's what I build: mobile applications, web experiences, and AI tools shaped by product thinking and hands-on engineering.</p>
              <a href="#projects" className="inline-flex items-center gap-3 min-h-12 mt-5 font-medium text-link-red-hover hover:underline underline-offset-4">See my projects<ArrowDown className="w-4 h-4" aria-hidden="true" /></a>
            </section>
          </div>
        )}
        <ProjectsSection />
        {!casual && <><ExperienceSection /><EducationSection /></>}
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
