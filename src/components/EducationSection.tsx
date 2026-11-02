const education = [
  {
    degree: "BSc (Hons) Computing — First Class Honours",
    institution: "Leeds Beckett University, United Kingdom",
    period: "2023–2026",
  },
  {
    degree: "International Foundation Programme",
    institution: "University of the West of England, Bristol",
    period: "2022–2023",
  },
];

const EducationSection = () => (
  <section className="section-container" aria-labelledby="education-heading">
    <h2 id="education-heading" className="section-header">education</h2>
    <div className="space-y-8">
      {education.map((item) => (
        <div key={item.degree} className="border-b border-border pb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-3">
            <h3 className="font-serif text-xl md:text-2xl">{item.degree}</h3>
            <p className="text-sm text-muted-foreground shrink-0 sm:pt-1">{item.period}</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">{item.institution}</p>
          <p className="text-sm text-muted-foreground mt-2">Delivered at The British College, Kathmandu</p>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
