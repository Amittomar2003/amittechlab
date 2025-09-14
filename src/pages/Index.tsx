import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="bg-primary py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-primary-foreground">
            © 2025 Amit Tomar. All rights reserved. | Data Analyst & BI Specialist
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
