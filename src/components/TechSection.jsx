const techs = [
  {
    id: 1,
    tech: "HTLM",
  },
  {
    id: 2,
    tech: "PHP",
  },
  {
    id: 3,
    tech: "Laravel",
  },
  {
    id: 4,
    tech: "Vue.js",
  },
  {
    id: 5,
    tech: "Typscript",
  },
  {
    id: 6,
    tech: "React.js",
  },
  {
    id: 6,
    tech: "Node.js",
  },
  {
    id: 6,
    tech: "Inertia.js",
  },
];
export const TechSection = () => {
  return (
    <section id="tech" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Tech <span className="text-primary"> Stack</span>
        </h2>
        <p className="text-center text-muted-foregroud mb-12 max-w-2xl mx-auto">
          Tech stack modern untuk aplikasi web standar industri.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techs.map((tech, key) => (
            <div
              key={key}
              className="gradient-border p-2 group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {tech.tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
