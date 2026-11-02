import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsSection = () => (
  <section id="projects" aria-labelledby="projects-heading" className="section-container">
    <p className="section-header">selected work</p>
    <h2 id="projects-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">From corporate wellness to language learning.</h2>
    <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl">Websites, mobile applications, AI tools, and independent research. Each project shows my role, contributions, and the work behind it.</p>
    <div className="border-t border-border">
      {projects.map((project, index) => (
        <Link key={project.slug} to={`/${project.slug}`} className="group block border-b border-border py-6 sm:py-8 md:py-10 hover:bg-secondary/40 transition-colors">
          <div className="flex items-start gap-3 sm:gap-4 md:gap-8">
            <span className="hidden sm:block text-sm text-primary pt-2 tabular-nums" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className="min-w-0 flex-1">
              <p className="text-xs tracking-wide text-muted-foreground mb-3">{project.category}</p>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl group-hover:text-primary transition-colors mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-5">{project.summary}</p>
              <p className="text-sm text-primary leading-relaxed">{project.stack.join(" · ")}</p>
              <p className="text-xs text-muted-foreground mt-4">{project.status}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 shrink-0 text-primary mt-2" aria-hidden="true" />
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
