import { motion } from "framer-motion";
import { Code2, Sparkles, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Expertise",
      description: "Building end-to-end applications with React, Node.js, and Django"
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description: "Bringing intelligence to apps with NLP and machine learning"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimizing for speed and exceptional user experiences"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turning Ideas into <span className="text-gradient">Digital Reality</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <AnimatedSection className="space-y-6" delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Engineering student at Ajeenkya DY Patil School of Engineering, 
                Pune, with a strong passion for creating impactful technology. My journey 
                combines full-stack development with artificial intelligence to build 
                applications that truly matter.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently interning at <span className="text-foreground font-medium">Infosys Springboard</span>, 
                I'm developing <span className="text-primary font-medium">MelodAI</span> — an intelligent 
                music recommendation system that uses sentiment analysis to match your mood with 
                the perfect soundtrack.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new AI models, participating in 
                hackathons like the OpenAI Buildathon, or preparing for the Amazon Summer School.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: "8.68", label: "CGPA" },
                  { value: "85%", label: "ML Accuracy" },
                  { value: "2+", label: "Production Apps" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            
            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all shadow-card cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
