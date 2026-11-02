import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";

const Navigation = ({ mobileControls }: { mobileControls?: ReactNode }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-6 focus:z-50 focus:bg-background focus:p-3">Skip to content</a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-5 flex flex-col gap-3 sm:gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center justify-between sm:w-auto">
          <Link to="/" aria-label="Sanskar — home" className="font-serif text-xl sm:text-2xl text-primary self-start min-h-11 inline-flex items-center">sanskar</Link>
          {mobileControls && <div className="sm:hidden">{mobileControls}</div>}
        </div>
        <nav aria-label="Main navigation" className="flex w-full sm:w-auto items-center justify-between sm:gap-8 text-sm">
          <NavLink to="/" end className="nav-link py-3" activeClassName="text-primary">home</NavLink>
          <NavLink to="/people" className="nav-link py-3" activeClassName="text-primary">profile</NavLink>
          <NavLink to="/expertise" className="nav-link py-3" activeClassName="text-primary">expertise</NavLink>
          <NavLink to="/connect" className="nav-link py-3" activeClassName="text-primary">connect</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
