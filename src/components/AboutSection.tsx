import { motion } from "framer-motion";


const AboutSection = () => {
  return (
    <section className="w-full">
      {/* Profile Section with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="aspect-[4/3] sm:aspect-square lg:aspect-auto bg-foreground overflow-hidden"
        >
          <div className="w-full h-full min-h-56 sm:min-h-80 flex items-center justify-center font-serif text-7xl sm:text-8xl text-background" aria-hidden="true">SAT</div>
        </motion.div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary px-6 sm:px-8 md:px-16 py-10 sm:py-16 md:py-24 flex flex-col justify-center items-center text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            Sanskar Ananta Tiwari
          </h2>
          <p className="text-sm tracking-widest text-primary-foreground/80 uppercase mb-8">
            Software Engineer
          </p>
          <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-md">
            At Gyawali Technologies LLC, I develop Hamro Bhasha across learning experiences, gamification, mascot-led interactions, AI/ML integration, and reusable mobile design kits. Previously, I led the app's new roadmap at Meltdown Nepal and built the company website. I bring product thinking and hands-on engineering to both the experience and the systems behind it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
