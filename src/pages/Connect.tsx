import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const Connect = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="min-h-screen pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 sm:mb-20 leading-relaxed"
          >
            For engineering opportunities, web or mobile projects, product collaboration, or Nepali-language research, send me a short introduction.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-5 sm:mb-8">Get in touch</h2>
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:tiwarisanskar123@gmail.com"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 break-words font-serif text-lg">tiwarisanskar123@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sanskar-tiwari10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-serif text-lg">LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://github.com/SaTz010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-serif text-lg">GitHub</span>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-5 sm:mb-8">Location</h2>
              <div className="flex items-start gap-3 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-serif text-lg">Kathmandu</p>
                  <p className="font-serif text-lg">Nepal</p>
                </div>
              </div>
              <p className="font-serif text-muted-foreground/70 mt-8">
                Based in Kathmandu, Nepal. Working across mobile, web, cloud, and AI-enabled products.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 sm:mt-24 pt-10 sm:pt-16 border-t border-foreground/10"
          >
            <h2 className="font-serif text-2xl text-foreground mb-6">Project inquiries</h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
              For engineering opportunities, project ideas, or research collaboration, send me a short introduction.
            </p>
            <a
              href="mailto:tiwarisanskar123@gmail.com"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-serif text-lg"
            >
              <span className="min-w-0 break-words">tiwarisanskar123@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Connect;
