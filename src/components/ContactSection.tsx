import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const localTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(localTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "tiwarisanskar123@gmail.com",
      href: "mailto:tiwarisanskar123@gmail.com",
      external: false,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      text: "linkedin.com/in/sanskar-tiwari10/",
      href: "https://www.linkedin.com/in/sanskar-tiwari10/",
      external: true,
    },
    {
      icon: <Github className="w-5 h-5" />,
      text: "github.com/SaTz010",
      href: "https://github.com/SaTz010",
      external: true,
    },
  ];

  return (
    <section className="section-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        connect
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-serif text-2xl text-foreground mb-5 sm:mb-8">Get in touch</h3>
          <div className="flex flex-col gap-2">
            {contacts.map((contact) => (
              <a
                key={contact.text}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 py-3 group border-b border-border"
              >
                <span className="text-primary shrink-0" aria-hidden="true">{contact.icon}</span>
                <span className="min-w-0 break-words text-base text-muted-foreground group-hover:text-primary transition-colors duration-200">
                  {contact.text}
                </span>
                {contact.external && (
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-primary ml-auto" aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-serif text-2xl text-foreground mb-5 sm:mb-8">Location</h3>
          <div className="flex items-center gap-4 py-3 border-b border-border">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-base text-muted-foreground flex items-center gap-2">
              Kathmandu, Nepal <span className="text-xl">🇳🇵</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {currentTime} local time
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
