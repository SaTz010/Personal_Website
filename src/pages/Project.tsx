import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Project as ProjectDetails } from "@/data/projects";

const Project = ({ project }: { project: ProjectDetails }) => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main id="main-content" tabIndex={-1} className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-40 pb-16">
      <Link to="/#projects" className="link-external inline-flex items-center gap-2 text-sm mb-8 sm:mb-12">
        <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All projects
      </Link>
      <p className="text-sm text-primary mb-5">{project.category}</p>
      <h1 className="heading-display text-3xl sm:text-5xl md:text-7xl leading-tight mb-8">{project.title}</h1>
      <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">{project.summary}</p>
      <p className="text-sm text-muted-foreground mb-6">{project.status}</p>
      <ul aria-label="Skills and tools" className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tool) => <li key={tool} className="text-sm border border-border px-3 py-1 rounded-full">{tool}</li>)}
      </ul>
      <div className="flex flex-wrap gap-6 mb-12">
        {project.links.map((link) => (
          <a key={link.href} className="link-external inline-flex items-center gap-2 min-h-11" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}<ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        ))}
      </div>
      {project.screenshots && (
        <figure className="mb-16">
          <div role="group" aria-label="App screenshots" tabIndex={0} className="flex gap-4 overflow-x-auto snap-x snap-mandatory bg-secondary/50 p-4 rounded sm:grid sm:grid-cols-2 sm:gap-8 sm:p-8">
            {project.screenshots.map((screenshot) => (
              <img key={screenshot.src} src={screenshot.src} alt={screenshot.alt} width="1206" height="2622" loading="lazy" className="w-[85%] shrink-0 snap-center h-auto border border-border rounded sm:w-full" />
            ))}
          </div>
          <figcaption className="text-xs text-muted-foreground leading-relaxed mt-4">
            Preview screenshots for the upcoming Hamro Bhasha update. Product screens show the wider team's work.
          </figcaption>
        </figure>
      )}
      <section className="border-t border-border py-8 sm:py-10" aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="font-serif text-2xl sm:text-3xl mb-5">Project focus</h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{project.focus}</p>
      </section>
      <section className="border-t border-border py-8 sm:py-10" aria-labelledby="contributions-heading">
        <h2 id="contributions-heading" className="font-serif text-2xl sm:text-3xl mb-5">My contributions</h2>
        <ul className="list-disc pl-5 space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed marker:text-primary">
          {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
        </ul>
      </section>
      <section className="border-t border-border py-8 sm:py-10" aria-labelledby="outcome-heading">
        <h2 id="outcome-heading" className="font-serif text-2xl sm:text-3xl mb-5">Result & current status</h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{project.outcome}</p>
        {project.note && <p className="text-sm text-muted-foreground leading-relaxed mt-6">{project.note}</p>}
      </section>
      <Link to="/connect" className="link-external inline-flex items-center gap-2 mt-8 min-h-11">Discuss a project <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
    </main>
    <Footer />
  </div>
);

export default Project;
