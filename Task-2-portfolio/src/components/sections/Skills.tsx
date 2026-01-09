import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "C++", "SQL", "HTML", "CSS"]
    },
    {
      title: "Frontend",
      skills: ["React", "Responsive Design", "Dark Mode UI", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Django", "REST APIs", "JWT Auth"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL", "Data Modeling"]
    },
    {
      title: "AI/ML",
      skills: ["NLP", "Sentiment Analysis", "Pretrained Models", "Model Integration"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Vercel", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Tech Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning frontend, backend, databases, and AI/ML
            </p>
          </AnimatedSection>
          
          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all shadow-card"
              >
                <h3 className="text-lg font-semibold text-primary mb-4 font-mono">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "hsl(210, 100%, 55%)",
                        color: "hsl(0, 0%, 0%)",
                        transition: { duration: 0.2 }
                      }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 border border-border text-muted-foreground cursor-pointer transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
