import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ExperienceSection = () => (
  <section className="section-container" aria-labelledby="experience-heading">
    <h2 id="experience-heading" className="section-header">professional experience</h2>
    <div className="border-b border-border pb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-4">
        <h3 className="font-serif text-2xl md:text-3xl">Software Engineer</h3>
        <p className="text-sm text-muted-foreground sm:pt-2">July 2026–Present</p>
      </div>
      <p className="text-primary mb-4">Gyawali Technologies LLC · Hamro Bhasha · Remote</p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">Implemented major changes across Hamro Bhasha, including mascot-led experiences, gamified learning, AI/ML integration, reusable design kits, and shared mobile components.</p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-5">Integrated Google ML Kit handwriting recognition through native Kotlin and Swift Expo modules. Strengthened reward synchronization, learner-progress reliability, and premium access checks, backed by unit, component, and Firebase Emulator integration tests.</p>
      <Link to="/hamro-bhasa" className="link-external inline-flex items-center gap-2 min-h-11">Explore my contributions <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
    </div>
    <div className="border-b border-border py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-4">
        <h3 className="font-serif text-2xl md:text-3xl">Product Lead</h3>
        <p className="text-sm text-muted-foreground sm:pt-2">September 2024–August 2025</p>
      </div>
      <p className="text-primary mb-4">Meltdown Nepal Pvt. Ltd. · Kathmandu</p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">Led the app's new product roadmap, discovery, prioritization, requirements, and delivery for a gamified corporate wellness platform serving 1,000+ users. Used behavioral, funnel, and cohort analysis to guide roadmap and feature decisions.</p>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-5">Worked on streaks, challenges, rewards, progression, and leaderboards with engineering, design, and QA. I also built Meltdown's website during my time at the company.</p>
      <Link to="/meltdown-nepal" className="link-external inline-flex items-center gap-2 min-h-11">Explore the app & website <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
    </div>
  </section>
);

export default ExperienceSection;
