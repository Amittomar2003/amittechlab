import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-background/10" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Amit Tomar</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-white/90 mb-6 font-medium">
              Data Analyst & Business Intelligence Specialist
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Detail-oriented Data Analyst with hands-on experience in SQL, Excel, Python, and Power BI. 
              Passionate about transforming raw data into actionable insights that drive business decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="group bg-white text-primary hover:bg-white/90 shadow-glow">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href={resumeAsset.url} download="Amit_Tomar_Resume.pdf">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-12 w-12">
                <Mail className="h-5 w-5" />
              </Button>
              <a href="https://www.linkedin.com/in/amit-tomar-47583a2a7" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-12 w-12">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-12 w-12">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-white text-xl font-semibold mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Projects Completed</span>
                    <span className="text-2xl font-bold text-white">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Data Sources Analyzed</span>
                    <span className="text-2xl font-bold text-white">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Efficiency Improvement</span>
                    <span className="text-2xl font-bold text-accent">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Cancellation Reduction</span>
                    <span className="text-2xl font-bold text-accent">20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;