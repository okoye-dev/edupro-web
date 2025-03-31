import { Button } from "@/shared/components/ui/button";
import { ArrowRight, BookOpen, FlaskRound, File } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradients with continuous animation */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-70 animate-pulse-slow"></div>
        <div className="absolute -top-[40%] -left-[10%] w-[50%] h-[80%] rounded-full bg-purple-900/20 blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[70%] rounded-full bg-indigo-900/20 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute top-20 left-[20%] w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 to-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-[30%] w-32 h-32 bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="tracking-tight font-extrabold text-dark-text leading-tight text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Learning Experience
            <br />
            <span className="gradient-text">with EduPro AI</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-dark-muted opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Utilize AI-powered tools to convert your study materials into
            interactive flashcards, quizzes, and comprehensive notes.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              className="btn-primary px-6 py-3 text-sm font-medium hover:scale-105 cursor-pointer"
              data-testid="start-learning-button"
            >
              Start Learning Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="btn-outline px-6 py-3 text-sm font-medium hover:scale-105 cursor-pointer"
            >
              View Features
            </Button>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-blue-900/20 backdrop-blur-sm z-10 rounded-xl"></div>
              <div className="absolute -inset-0.5 bg-conic-gradient rounded-xl blur-sm z-0 animate-pulse-glow"></div>
              <motion.img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Learning platform dashboard"
                className="w-full rounded-xl shadow-lg relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Quick feature highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Interactive Flashcards",
                description:
                  "Generate flashcards with spaced repetition algorithms for effective learning",
                delay: 0.9,
              },
              {
                icon: FlaskRound,
                title: "Personalized Quizzes",
                description:
                  "Create AI-generated quizzes that adapt to your knowledge gaps",
                delay: 1.0,
              },
              {
                icon: File,
                title: "Smart Notes",
                description:
                  "Convert your PDFs and images into organized, searchable study notes",
                delay: 1.1,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto pulse-glow"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-dark-text">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-dark-muted opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
