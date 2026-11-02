import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ExpertiseArea {
  title: string;
  description: string;
  services: string[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Web & Product Delivery",
    description: "Building websites and turning user research, engagement data, and business needs into clear requirements and validated releases.",
    services: ["React", "JavaScript / TypeScript", "User research", "Product analytics", "Roadmaps & prioritization", "User stories & acceptance criteria", "Agile delivery"],
  },
  {
    "title": "Mobile Development",
    "description": "App-wide mobile development spanning gamified learning, mascot-led experiences, reusable design kits, shared components, and native integrations.",
    "services": [
      "React Native",
      "Expo",
      "TypeScript",
      "Flutter / Dart",
      "Kotlin",
      "Swift",
      "Native Expo modules",
      "Gamification",
      "Reusable design kits"
    ]
  },
  {
    "title": "Backend & Cloud",
    "description": "Authenticated APIs, verified subscription entitlements, and cloud integrations with validation and reliable behavior.",
    "services": [
      "Firebase",
      "Python / FastAPI",
      "REST APIs",
      "AWS S3",
      "Lambda",
      "DynamoDB"
    ]
  },
  {
    "title": "Quality & Delivery",
    "description": "Testing, debugging, and focused code review across authentication, API limits, learning activities, and reward behavior.",
    "services": [
      "Unit & component tests",
      "Firebase Emulator integration tests",
      "Regression testing",
      "Git / GitHub",
      "Code review"
    ]
  },
  {
    "title": "AI & Research",
    "description": "Integrating AI/ML into learning experiences and researching Nepali–English speech recognition.",
    "services": [
      "Google ML Kit Digital Ink Recognition",
      "Whisper",
      "Google Cloud Speech-to-Text",
      "LLM integration",
      "RAG",
      "Prompt engineering",
      "Accuracy / latency / cost evaluation",
      "WER / CER evaluation"
    ]
  }
];

const Expertise = () => {
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
            Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 sm:mb-20 leading-relaxed"
          >
            I combine product discovery and delivery with web and mobile development, cloud integration, and AI research to build useful software.
          </motion.p>

          <div className="flex flex-col gap-10 sm:gap-16">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-foreground/10 pb-8 sm:pb-12"
              >
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
                  {area.title}
                </h2>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {area.services.map((service) => (
                    <span
                      key={service}
                      className="max-w-full break-words text-sm text-primary border border-primary/30 px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;
