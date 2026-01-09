import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </AnimatedSection>
          
          <div className="space-y-8">
            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border shadow-card hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="w-6 h-6" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">AI Intern</h3>
                      <p className="text-primary font-medium">Infosys Springboard</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">Oct - Dec 2025</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Built MelodAI with sentiment analysis & Spotify API integration",
                      "Integrated pretrained NLP models in Django backend",
                      "Developed REST APIs for AI inference and mood processing",
                      "Created React frontend for mood visualization and recommendations",
                      "Optimized inference speed and improved backend response flow"
                    ].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                      >
                        <motion.span 
                          className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border shadow-card hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Bachelor of Engineering — Computer Engineering</h3>
                      <p className="text-primary font-medium">Ajeenkya DY Patil School of Engineering</p>
                      <p className="text-sm text-muted-foreground">Pune University (SPPU)</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground font-mono block">Nov 2023 – May 2027</span>
                      <motion.span 
                        className="text-lg font-bold text-gradient"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        CGPA: 8.68/10
                      </motion.span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Actively participating in OpenAI Buildathon",
                      "Preparing for Amazon Summer School entrance test"
                    ].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + 0.1 * index, duration: 0.4 }}
                      >
                        <motion.span 
                          className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
