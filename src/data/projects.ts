export interface Project {
  slug: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  stack: string[];
  focus: string;
  contributions: string[];
  outcome: string;
  links: { label: string; href: string }[];
  note?: string;
  screenshots?: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "hamro-bhasa",
    title: "Hamro Bhasha",
    category: "Professional work · Mobile learning & AI/ML",
    status: "Published app",
    summary: "Implemented major changes across Hamro Bhasha, from mascot-led and gamified learning to Google ML Kit handwriting recognition, AI integration, and reusable mobile design kits.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Google ML Kit", "Kotlin", "Swift", "Gamification", "Design kits"],
    focus: "Evolving a Nepali-learning application across the learner experience and the systems behind it: interactive activities, shared mobile components, AI/ML integration, native handwriting recognition, reward synchronization, and premium access.",
    contributions: [
      "Implemented major app-wide changes using React Native, Expo, and TypeScript, including interactive learning activities, learner progression, mascot-led experiences, reusable design kits, and shared mobile components.",
      "Built gamified course, story, and quiz workflows with Firebase-backed learning completion, XP, and streaks. Fixed reward synchronization defects and preserved learner progress when activity and streak rules changed.",
      "Integrated Google ML Kit Digital Ink Recognition through native Kotlin and Swift Expo modules, with Nepali handwriting activities, stroke feedback, guided retries, and pronunciation playback.",
      "Integrated AI capabilities into the learning experience and worked on translation and speech workflows, evaluating accuracy, latency, and API usage costs.",
      "Strengthened premium-feature access checks using verified subscription entitlements.",
      "Diagnosed and fixed duplicate learning reminders, learner-switching delays, pronunciation matching errors, and inconsistent lesson completion requirements.",
      "Wrote automated unit, component, and Firebase Emulator integration tests covering API authentication, invalid inputs, translation limits, learning activities, and reward behavior. Addressed code-review feedback with focused fixes and regression tests.",
    ],
    outcome: "Published on Google Play and the App Store. My work spans the app's learning experience, native AI/ML integration, shared design kits, reward and progress reliability, premium access, and automated quality checks.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.gyawalitechnologies.pathshala" },
      { label: "App Store", href: "https://apps.apple.com/us/app/hamro-bhasha/id6757769695" },
    ],
    note: "Professional work at Gyawali Technologies LLC, July 2026–present. The repository belongs to my employer; this page describes my contributions.",
    screenshots: [
      { src: "/projects/hamro-bhasa-learning.png", alt: "Hamro Bhasha number learning menu with Learn, Matching, Quiz, and Trace activities" },
      { src: "/projects/hamro-bhasa-practice.png", alt: "Hamro Bhasha matching exercise pairing Nepali vowels with illustrated objects" },
    ],
  },
  {
    slug: "meltdown-nepal",
    title: "Meltdown Nepal",
    category: "Work at Meltdown · Wellness app & website",
    status: "Published app & live website",
    summary: "Led the Meltdown app's new product roadmap and built the company website, connecting product strategy with corporate wellness experiences.",
    stack: ["Roadmap leadership", "Product management", "Gamification", "User research", "Website development", "UX collaboration"],
    focus: "Leading the app's new roadmap through user research, engagement data, prioritization, and delivery, alongside building the company's public website.",
    contributions: [
      "Led the new product roadmap for the Meltdown app, translating user needs and business priorities into feature direction and delivery plans.",
      "Built meltdownnepal.com as part of my work at Meltdown Nepal.",
      "Defined product requirements, user stories, acceptance criteria, workflows, and release expectations for the company's wellness platform.",
      "Used engagement analysis and customer discovery to guide priorities, and coordinated delivery across engineering, design, and QA.",
    ],
    outcome: "The Meltdown app is available on Google Play and the App Store. The company website presents its corporate wellness services for companies and employees.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.corewalkers.meltdown" },
      { label: "App Store", href: "https://apps.apple.com/np/app/meltdown-employee-wellbeing/id6445954625" },
      { label: "Visit website", href: "https://meltdownnepal.com/" },
    ],
    note: "Built under Meltdown Nepal. My Product Manager role ran from September 2024 to August 2025; the broader platform was a team effort.",
  },
  {
    slug: "speech-research",
    title: "Nepali–English Speech Recognition",
    category: "Independent research · October 2026–present",
    status: "Ongoing research",
    summary: "Evaluating speech recognition on mixed Nepali–English audio with controlled experiments and repeatable scoring.",
    stack: ["Python", "Whisper", "Google Cloud Speech-to-Text", "WER / CER"],
    focus: "Evaluating recognition of audio that switches between Nepali and English, while keeping API experiments recoverable and results comparable.",
    contributions: [
      "Ran controlled Whisper pilot evaluations on mixed Nepali–English audio.",
      "Implemented word error rate (WER) and character error rate (CER) scoring.",
      "Built API evaluation workflows with checkpointing, failure recovery, and offline tests.",
    ],
    outcome: "Controlled pilots, scoring, and evaluation workflows are complete. The broader code-mixing benchmark remains in progress.",
    links: [{ label: "View repository", href: "https://github.com/SaTz010/Research-asr" }],
    note: "Ongoing research; no final benchmark results are claimed here.",
  },
  {
    slug: "aura",
    title: "AURA",
    category: "Personal project · Audio intelligence · December 2025–present",
    status: "In development",
    summary: "A mobile application that turns unstructured conversations into summaries, action items, and key decisions through language model pipelines.",
    stack: ["Flutter", "Dart", "Python / FastAPI", "Firebase", "LLM integration", "RAG"],
    focus: "Grounding language model outputs in conversation context while balancing accuracy, consistency, and cost per task.",
    contributions: [
      "Built a Flutter application and language model pipelines for conversation summaries, action items, and key decisions.",
      "Implemented retrieval-augmented generation (RAG) to ground outputs in conversation context.",
      "Built REST APIs with FastAPI and integrated Google authentication through Firebase.",
      "Applied prompt engineering to improve output consistency while managing accuracy and cost-per-task trade-offs.",
    ],
    outcome: "Implemented conversation processing, contextual retrieval, and authenticated backend APIs. Development remains ongoing.",
    links: [{ label: "View repository", href: "https://github.com/SaTz010/AURA" }],
  },
  {
    slug: "cloudsnap",
    title: "CloudSnap",
    category: "Personal project · Cloud storage · November–December 2025",
    status: "Personal project",
    summary: "A mobile photo workflow covering capture, metadata, image compression, and uploads to AWS.",
    stack: ["Flutter", "Dart", "AWS S3", "Lambda", "DynamoDB"],
    focus: "Connecting on-device photo capture and image preparation to a cloud upload workflow.",
    contributions: [
      "Built photo capture and metadata collection in Flutter.",
      "Added image compression before upload.",
      "Integrated uploads through an AWS API Gateway and Lambda endpoint, using S3 and DynamoDB.",
    ],
    outcome: "Delivered from concept to production in under six weeks, combining photo capture, compression, metadata management, and serverless cloud storage.",
    links: [{ label: "View repository", href: "https://github.com/SaTz010/CloudSnap" }],
  },
  {
    slug: "code-vs-goal",
    title: "Code vs Goal",
    category: "Personal project · Android quiz application",
    status: "Personal project",
    summary: "A category-based quiz app with randomized questions, score tracking, answer review, and saved attempt history.",
    stack: ["Kotlin", "Jetpack Compose", "ViewModel", "Room", "Coroutines"],
    focus: "Managing quiz state from question selection through scoring, review, and persistent attempt history.",
    contributions: [
      "Built category selection and randomized question flows with Kotlin and Jetpack Compose.",
      "Implemented score tracking and answer review.",
      "Used ViewModel, Room, and Coroutines for state and persistent attempt history.",
    ],
    outcome: "Users can complete quizzes, review their answers, and revisit saved attempts.",
    links: [{ label: "View repository", href: "https://github.com/SaTz010/Coad-VS-Goal" }],
  },
];
