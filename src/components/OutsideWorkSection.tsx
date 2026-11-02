import { ArrowUpRight, Dumbbell, Gamepad2, Trophy, Tv } from "lucide-react";
import { gymStats, sportsFavorites, valorantStats } from "@/data/interests";

const OutsideWorkSection = () => (
  <section id="outside-work" className="border-t border-border py-12 sm:py-16" aria-labelledby="outside-work-heading">
    <p className="section-header">the other side of me</p>
    <h2 id="outside-work-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight mb-5">Away from work, you'll find me…</h2>
    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">A few rounds, a few reps, and a lot of sport.</p>
    <nav aria-label="Outside-work sections" className="flex flex-wrap gap-3 mt-6 mb-8">
      <a href="#valorant" className="inline-flex items-center gap-2 rounded-full border border-border px-4 min-h-11 text-sm hover:bg-secondary transition-colors"><Gamepad2 className="w-4 h-4 text-primary" aria-hidden="true" />VALORANT</a>
      <a href="#gym" className="inline-flex items-center gap-2 rounded-full border border-border px-4 min-h-11 text-sm hover:bg-secondary transition-colors"><Dumbbell className="w-4 h-4 text-primary" aria-hidden="true" />Gym</a>
      <a href="#sports" className="inline-flex items-center gap-2 rounded-full border border-border px-4 min-h-11 text-sm hover:bg-secondary transition-colors"><Tv className="w-4 h-4 text-primary" aria-hidden="true" />Sports</a>
    </nav>

    <section id="valorant" aria-labelledby="valorant-heading" className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-8 lg:gap-16 border-t border-border py-10 sm:py-16">
      <div>
        <Gamepad2 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
        <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">01 / In the lobby</p>
        <h3 id="valorant-heading" className="font-serif text-3xl sm:text-4xl mb-5">VALORANT</h3>
        <p className="text-muted-foreground leading-relaxed">I enjoy a good VALORANT match and some friendly competition. A few rounds with good company are always welcome.</p>
        <p className="inline-flex items-center gap-2 text-sm mt-5"><Trophy className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />A few trophies along the way.</p>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium mb-4">The stats board</p>
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {valorantStats.map((stat) => (
            <div key={stat.label} className="min-w-0 rounded border border-border bg-secondary/40 p-4 sm:p-5">
              <dt className="text-xs sm:text-sm text-muted-foreground mb-3">{stat.label}</dt>
              <dd className={stat.value === null ? "text-sm text-muted-foreground" : "font-serif text-xl sm:text-2xl break-words"}>{stat.value ?? "Coming soon"}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-muted-foreground mt-4">Serious stats. Occasionally unserious ones.</p>
        <a href="mailto:tiwarisanskar123@gmail.com?subject=VALORANT%20game" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded border border-primary px-5 min-h-12 mt-6 font-medium text-link-red-hover hover:bg-secondary transition-colors">Wanna play together?<ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" /></a>
      </div>
    </section>

    <section id="gym" aria-labelledby="gym-heading" className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-8 lg:gap-16 border-t border-border py-10 sm:py-16">
      <div>
        <Dumbbell className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
        <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">02 / A few more reps</p>
        <h3 id="gym-heading" className="font-serif text-3xl sm:text-4xl mb-5">Gym & fitness</h3>
        <p className="text-muted-foreground leading-relaxed">I'm a fitness enthusiast and a regular gym-goer. I enjoy staying active and making training a steady part of my routine.</p>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium mb-4">The gym, by the numbers.</p>
        <dl className="grid grid-cols-3 gap-3 sm:gap-4">
          {gymStats.map((stat) => (
            <div key={stat.label} className="min-w-0 rounded border border-border bg-secondary/40 p-3 sm:p-5">
              <dt className="text-xs sm:text-sm text-muted-foreground mb-3">{stat.label}</dt>
              <dd className={stat.value === null ? "text-xs sm:text-sm text-muted-foreground" : "font-serif text-xl sm:text-2xl break-words"}>{stat.value ?? "Coming soon"}</dd>
            </div>
          ))}
        </dl>
        <a href="mailto:tiwarisanskar123@gmail.com?subject=Gym%20session" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded border border-primary px-5 min-h-12 mt-6 font-medium text-link-red-hover hover:bg-secondary transition-colors">Hit the gym together<ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" /></a>
      </div>
    </section>

    <section id="sports" aria-labelledby="sports-heading" className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-8 lg:gap-16 border-t border-border py-10 sm:py-16">
      <div>
        <Tv className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
        <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">03 / Match day, race day</p>
        <h3 id="sports-heading" className="font-serif text-3xl sm:text-4xl mb-5">Sports</h3>
        <p className="text-muted-foreground leading-relaxed">I watch plenty of football, cricket, Formula 1, and esports. There's usually a match, race, or tournament to catch up on.</p>
        <ul aria-label="Sports I follow" className="flex flex-wrap gap-2 mt-5">
          {["Football", "Cricket", "Formula 1", "Esports"].map((sport) => <li key={sport} className="rounded-full border border-border px-3 py-1 text-xs">{sport}</li>)}
        </ul>
      </div>
      <div className="min-w-0">
        <dl className="space-y-4">
          <div className="rounded border border-border bg-secondary/40 p-5">
            <dt className="text-sm text-muted-foreground mb-3">Teams I support</dt>
            <dd className="font-serif text-lg sm:text-xl break-words">{sportsFavorites.teams.join(" · ") || "Favorites coming soon"}</dd>
          </div>
          <div className="rounded border border-border bg-secondary/40 p-5">
            <dt className="text-sm text-muted-foreground mb-3">Players I like</dt>
            <dd className="font-serif text-lg sm:text-xl break-words">{sportsFavorites.players.join(" · ") || "Favorites coming soon"}</dd>
          </div>
          <div className="rounded border border-primary/40 bg-primary/5 p-5">
            <dt className="text-sm text-muted-foreground mb-3">All-time idol</dt>
            <dd className="font-serif text-2xl sm:text-3xl break-words">{sportsFavorites.idol ?? "To be revealed"}</dd>
          </div>
        </dl>
        <a href="mailto:tiwarisanskar123@gmail.com?subject=Watch%20a%20game%20together" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded border border-primary px-5 min-h-12 mt-6 font-medium text-link-red-hover hover:bg-secondary transition-colors">Watch a game together<ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" /></a>
      </div>
    </section>
  </section>
);

export default OutsideWorkSection;
