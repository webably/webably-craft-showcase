import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Search, ShoppingCart, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Tailored websites built with modern technologies like React, TypeScript, and Node.js."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that convert visitors into customers and enhance user experience."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Websites that look and work perfectly on all devices, from mobile phones to desktop computers."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to help your website rank higher and attract more organic traffic."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management."
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly."
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive web development services to help your business succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-glow/30"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary-glow transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;