import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Web development" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-primary-glow/30 animate-float">
          <Code size={48} />
        </div>
        <div className="absolute top-40 right-20 text-secondary-glow/30 animate-float" style={{ animationDelay: '2s' }}>
          <Palette size={36} />
        </div>
        <div className="absolute bottom-40 left-20 text-primary-glow/30 animate-float" style={{ animationDelay: '4s' }}>
          <Smartphone size={42} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Build{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Amazing
            </span>
            <br />
            Websites
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Custom web solutions that drive results. From stunning designs to powerful functionality, 
            we create websites that make your business stand out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group text-lg px-8 py-6"
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary-glow/30 hover:border-primary-glow hover:bg-primary-glow/10"
              onClick={() => {
                const element = document.querySelector('#portfolio');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;