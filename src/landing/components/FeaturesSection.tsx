import {
  Brain,
  FileText,
  Upload,
  FolderKanban,
  Award,
  Gift,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "AI-Powered Study Aids",
    description:
      "Generate comprehensive notes, interactive flashcards with spaced repetition, and personalized quizzes from your materials.",
    icon: Brain,
  },
  {
    name: "Versatile Material Uploads",
    description:
      "Support for PDFs, images, and physical copies through advanced image-to-text conversion.",
    icon: Upload,
  },
  {
    name: "Organized Content Management",
    description:
      "Organize your study materials with metadata tagging by lecturer, department, topic, and year.",
    icon: FolderKanban,
  },
  {
    name: "Smart Notes Generation",
    description:
      "Transform your lecture materials into concise, well-structured notes with key concepts highlighted.",
    icon: FileText,
  },
  {
    name: "Premium Features",
    description:
      "Subscribe for higher rate limits, advanced AI features, and priority customer support.",
    icon: Award,
  },
  {
    name: "Referral Program",
    description:
      "Invite friends to earn additional credits and unlock premium features for both of you.",
    icon: Gift,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const FeaturesSection = () => {
  return (
    <div className="py-16 sm:py-24 bg-dark-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
            Features
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold gradient-text leading-tight">
            Everything you need to accelerate your learning
          </p>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-dark-muted mx-auto opacity-90">
            Our AI-powered platform is designed to help you master new skills
            faster and more effectively by transforming your study materials.
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="relative p-6 glass-card rounded-lg hover:shadow-lg transition-all overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div>
                  <div className="absolute h-12 w-12 rounded-md bg-gradient-to-r from-purple-700 to-indigo-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg md:text-xl font-bold text-dark-text mb-2">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-dark-muted opacity-90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Animated background glow */}
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-primary/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;
