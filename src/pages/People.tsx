import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OutsideWorkSection from "@/components/OutsideWorkSection";

const workingSteps = [
  { title: "Understand", description: "Start with the people, the problem, and the constraints. Ask what would actually make their experience better." },
  { title: "Define", description: "Turn that understanding into priorities, clear requirements, and acceptance criteria the team can work with." },
  { title: "Build", description: "Connect the interface, application logic, native capabilities, and backend into a complete experience." },
  { title: "Validate", description: "Test behavior, check edge cases, and make sure a new feature preserves what already works." },
  { title: "Learn", description: "Use feedback and product data to guide the next iteration and revisit earlier assumptions." },
];

const strengths = [
  { title: "Product judgment", description: "I connect customer discovery and engagement data with roadmaps, priorities, and practical delivery decisions.", example: "Meltdown: leading the app's new product roadmap." },
  { title: "Engineering depth", description: "I work across mobile interfaces, native modules, AI/ML integrations, backend behavior, and reusable components.", example: "Hamro Bhasha: app-wide changes and native handwriting recognition." },
  { title: "Reliable delivery", description: "I work with engineering, design, and QA, using focused fixes and automated tests to protect the user experience.", example: "Learning rewards: preserving progress as XP and streak rules change." },
];

const People = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main id="main-content" tabIndex={-1} className="pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <section className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8 sm:gap-12 lg:gap-20 items-center" aria-labelledby="profile-heading">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-header">profile</p>
            <h1 id="profile-heading" className="heading-display text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
              Sanskar<br />Ananta Tiwari
            </h1>
            <p className="text-sm font-medium tracking-wide mb-6">Software engineer · Product management background</p>
            <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
              I connect product thinking with hands-on engineering to build software that fits into people's lives.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              From leading Meltdown's app roadmap to implementing major changes across Hamro Bhasha, I work across the decisions and engineering that turn an idea into something useful.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" aria-hidden="true" />Kathmandu, Nepal</span>
              <span>Mobile · Web · Cloud · AI</span>
            </div>
          </motion.div>

          <figure className="w-full max-w-[15rem] sm:max-w-sm mx-auto lg:mr-0">
            <div role="img" aria-label="Portrait placeholder for Sanskar Ananta Tiwari" className="relative aspect-[4/5] bg-secondary/60 border border-primary/20 flex flex-col items-center justify-center overflow-hidden">
              <span aria-hidden="true" className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/60" />
              <span aria-hidden="true" className="absolute top-4 right-4 w-6 h-6 border-t border-r border-primary/60" />
              <span aria-hidden="true" className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-primary/60" />
              <span aria-hidden="true" className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/60" />
              <span className="font-serif text-7xl text-primary/70" aria-hidden="true">SAT</span>
              <span className="text-xs tracking-widest text-muted-foreground uppercase mt-5" aria-hidden="true">Portrait coming soon</span>
            </div>
            <figcaption className="text-xs text-muted-foreground mt-3">Space reserved for my photo.</figcaption>
          </figure>
        </section>

        <section className="border-t border-border mt-12 sm:mt-16 md:mt-24 py-12 sm:py-16 grid lg:grid-cols-[200px_minmax(0,1fr)] gap-6 lg:gap-16" aria-labelledby="story-heading">
          <h2 id="story-heading" className="section-header">my story</h2>
          <div className="max-w-3xl space-y-6">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed">
              Product work taught me to ask which problem is worth solving. Engineering taught me how much the details matter when that solution reaches real users.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              At <Link to="/meltdown-nepal" className="link-external underline underline-offset-4">Meltdown Nepal</Link>, I led the app's new roadmap, worked across discovery, gamification, and delivery, and built the company's website. It gave me experience connecting user behavior and business needs with the work of engineering, design, and QA.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Today, I work remotely with Gyawali Technologies LLC on <Link to="/hamro-bhasa" className="link-external underline underline-offset-4">Hamro Bhasha</Link>. My work spans mascot-led learning, gamification, AI/ML integration, native handwriting recognition, shared design kits, and the reliability of learner progress and premium access.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              That combination shapes how I build: understand the need, make the trade-offs clear, and follow through on the behavior users depend on.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-12 sm:py-16" aria-labelledby="process-heading">
          <p className="section-header">from problem to release</p>
          <h2 id="process-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10">How I work</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {workingSteps.map((step, index) => (
              <li key={step.title} className="border-t border-primary/30 pt-5">
                <span className="font-serif text-2xl text-primary" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-medium mt-4 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
          <aside className="mt-10 border-l-2 border-primary bg-secondary/50 px-6 py-5">
            <p className="text-sm font-medium mb-2">In practice: protecting learner progress</p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">Changing XP and streak rules also means protecting existing learner progress. My work pairs those changes with reward synchronization fixes and regression tests, so the learning experience stays reliable as the rules evolve.</p>
          </aside>
        </section>

        <section className="border-t border-border py-12 sm:py-16" aria-labelledby="strengths-heading">
          <p className="section-header">working together</p>
          <h2 id="strengths-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10">What I bring to a team</h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {strengths.map((strength) => (
              <div key={strength.title}>
                <h3 className="font-serif text-xl sm:text-2xl mb-4">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{strength.description}</p>
                <p className="text-sm leading-relaxed border-t border-border pt-4">{strength.example}</p>
              </div>
            ))}
          </div>
          <Link to="/expertise" className="link-external inline-flex items-center gap-2 min-h-11 mt-8">Explore my expertise <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
        </section>

        <section className="border-t border-border py-12 sm:py-16 grid lg:grid-cols-[200px_minmax(0,1fr)] gap-6 lg:gap-16" aria-labelledby="current-heading">
          <h2 id="current-heading" className="section-header">currently exploring</h2>
          <div>
            <Link to="/speech-research" className="group flex items-start gap-6 border-b border-border pb-8">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground mb-3">Ongoing research</p>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl group-hover:text-primary transition-colors mb-3">Nepali–English speech recognition</h3>
                <p className="text-muted-foreground leading-relaxed">Evaluating mixed-language audio with controlled experiments, repeatable scoring, and recoverable evaluation workflows.</p>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0 text-primary mt-1" aria-hidden="true" />
            </Link>
            <Link to="/aura" className="group flex items-start gap-6 pt-8">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground mb-3">In development</p>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl group-hover:text-primary transition-colors mb-3">AURA</h3>
                <p className="text-muted-foreground leading-relaxed">Turning conversations into summaries, action items, and key decisions, with language model outputs grounded in conversation context.</p>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0 text-primary mt-1" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <OutsideWorkSection />

        <section className="bg-primary text-white rounded px-5 sm:px-6 py-8 sm:py-10 md:p-12 mt-4" aria-labelledby="invitation-heading">
          <p className="text-sm tracking-widest mb-5">let's connect</p>
          <h2 id="invitation-heading" className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight mb-6">Let's build something useful.</h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8">For engineering opportunities, product collaboration, or Nepali-language research, I'd be glad to hear what you're working on.</p>
          <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4">
            <Link to="/connect" className="inline-flex items-center justify-center sm:justify-start gap-3 bg-background text-link-red-hover rounded px-6 py-3 min-h-12 font-medium hover:bg-white transition-colors">Start a conversation <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
            <Link to="/#projects" className="inline-flex items-center justify-center sm:justify-start gap-2 underline underline-offset-4 min-h-12">Explore selected work <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default People;
