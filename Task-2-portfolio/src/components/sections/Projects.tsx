import { motion } from "framer-motion";
import { ExternalLink, Github, Music, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Projects = () => {
  const projects = [
    {
      title: "MelodAI",
      subtitle: "AI Music Recommendation System",
      description: "An intelligent music recommendation engine that uses sentiment analysis to detect your mood and matches you with the perfect Spotify tracks. Achieved 85% accuracy in mood-based recommendations.",
      tech: ["Django", "React", "NLP", "Spotify API"],
      icon: Music,
      highlights: [
        "Sentiment analysis for mood detection",
        "Real-time Spotify track matching",
        "Audio feature analysis algorithm",
        "85% accuracy in recommendations"
      ],
      featured: true
    },
    {
      title: "Expensly",
      subtitle: "Personal Finance Tracker",
      description: "A comprehensive expense management system with real-time analytics, budget tracking, and savings goals. Built with the MERN stack featuring secure JWT authentication.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
      icon: Wallet,
      highlights: [
        "Full-stack expense management",
        "Real-time analytics dashboard",
        "Budget tracking & savings goals",
        "Dark mode support"
      ],
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-hero">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications showcasing my expertise in full-stack development and AI integration
            </p>
          </AnimatedSection>
          
          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all shadow-card overflow-hidden cursor-pointer"
              >
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                
                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="p-3 rounded-xl bg-primary/10 text-primary"
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon className="w-6 h-6" />
                      </motion.div>
                      {project.featured && (
                        <motion.span 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Featured
                        </motion.span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 text-sm font-mono rounded-lg bg-secondary/50 border border-border text-muted-foreground"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="neon">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="space-y-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <motion.div 
                        key={hIndex}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + hIndex * 0.1, duration: 0.4 }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all"
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: hIndex * 0.2 }}
                        />
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
