import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or just having a conversation about technology and AI.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <AnimatedSection className="space-y-6" delay={0.1}>
              <div className="p-6 rounded-xl bg-gradient-card border border-border shadow-card">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <motion.a 
                    href="mailto:prajwalshinde1320@gmail.com"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors group"
                  >
                    <motion.div 
                      className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      whileHover={{ rotate: 15 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">prajwalshinde1320@gmail.com</p>
                    </div>
                  </motion.a>
                  
                  <motion.div 
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Pune, Maharashtra, India</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Social links */}
              <div className="p-6 rounded-xl bg-gradient-card border border-border shadow-card">
                <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Prajwal7214", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/prajwal1320/", label: "LinkedIn" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all group"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-2xl bg-gradient-card border border-primary/30 shadow-card shadow-glow overflow-hidden"
            >
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative">
                <motion.div 
                  className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Send className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a project in mind, want to discuss opportunities, or just want to say hi — I'd love to hear from you.
                </p>
                
                <Button 
                  size="lg" 
                  variant="neon"
                  className="w-full"
                  asChild
                >
                  <a href="mailto:prajwalshinde1320@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
