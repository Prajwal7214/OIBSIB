import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Achievements = () => {
  const achievements = [
    "Successfully built and deployed production-grade applications",
    "Integrated complex AI/ML models with React frontends",
    "Implemented secure authentication and authorization systems",
    "Created responsive, modern UIs with dark mode support"
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-hero">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Recognition</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-gradient">Achievements</span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="relative p-8 rounded-2xl bg-gradient-card border border-border shadow-card"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="p-4 rounded-xl bg-primary/10 text-primary"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Award className="w-8 h-8" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Professional Accomplishments</h3>
                <p className="text-muted-foreground">Milestones in my development journey</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5, backgroundColor: "hsl(210, 100%, 55%, 0.1)", transition: { duration: 0.2 } }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-muted-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
