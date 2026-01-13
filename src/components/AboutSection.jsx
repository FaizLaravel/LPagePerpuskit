import { Briefcase, Code, Database, Server, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Perpus<span className="text-primary">Kit</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-semibold ">
              PerpusKit merupakan solusi manajemen perpustakaan lengkap yang
              ditenagai oleh Laravel dan Vue 3 (Inertia.js). Dirancang untuk
              membantu pengembang meluncurkan sistem berkualitas produksi dengan
              cepat, kode yang rapi, dan kemudahan skalabilitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Pengembangan situs web yang responsif dan terstruktur, siap
                    diimplementasikan segera untuk menjawab berbagai kebutuhan
                    nyata.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    System Development & Maintenance
                  </h4>
                  <p className="text-muted-foreground">
                    Membangun sistem berbasis web yang mengutamakan ketahanan
                    operasional dan fleksibilitas untuk pengembangan di masa
                    depan.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Database & Responsive Design
                  </h4>
                  <p className="text-muted-foreground">
                    Menghadirkan pengelolaan database yang terorganisir dan
                    desain adaptif yang optimal di seluruh perangkat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
