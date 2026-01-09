import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-background border-t border-border"
    >
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <motion.a 
                href="#" 
                className="text-xl font-bold mb-2 block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gradient">Prajwal Shinde</span>
              </motion.a>
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/Prajwal7214" },
                { icon: Linkedin, href: "https://linkedin.com/in/prajwal1320/" },
                { icon: Mail, href: "mailto:prajwalshinde1320@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
