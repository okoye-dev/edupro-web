import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does EduPro AI transform my study materials?",
    answer:
      "EduPro AI uses advanced machine learning algorithms to analyze your uploaded materials (PDFs, images, or text) and extract key concepts. It then organizes this information into structured notes, interactive flashcards with spaced repetition scheduling, and personalized quizzes that adapt to your knowledge gaps.",
  },
  {
    question: "What types of files can I upload?",
    answer:
      "You can upload PDFs, images of printed or handwritten notes (through our OCR technology), Word documents, PowerPoint presentations, and plain text files. Our system processes these materials and converts them into interactive study content.",
  },
  {
    question: "How accurate is the AI in generating questions?",
    answer:
      "Our AI generates questions with a high degree of accuracy by identifying key concepts and relationships within your study materials. The system continuously improves through machine learning, becoming more accurate with usage. You can also edit or refine any AI-generated content if needed.",
  },
  {
    question: "Can I collaborate with other students?",
    answer:
      "Yes, our Team and Enterprise plans offer collaboration features that allow you to share study materials, flashcards, and notes with classmates. You can create study groups, assign different sections to team members, and track collective progress.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We employ bank-level encryption for all uploaded content and personal information. Your study materials remain private to you unless you explicitly choose to share them. We never use your content to train our AI without explicit permission.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 sm:py-24 bg-dark-background relative">
      {/* Background gradients with animation */}
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
            FAQ
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold gradient-text leading-tight">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-dark-muted mx-auto opacity-90 leading-relaxed">
            Find answers to common questions about our platform and how it can
            enhance your learning experience.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className={`w-full p-5 glass-card text-left rounded-xl flex justify-between items-center ${
                  activeIndex === index ? "bg-dark-card/80" : ""
                }`}
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base md:text-lg font-bold text-dark-text pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary" />
                  )}
                </div>
              </motion.button>

              <motion.div
                className={`overflow-hidden rounded-b-xl ${
                  activeIndex !== index ? "h-0" : "glass-card mt-1"
                }`}
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-5 text-sm md:text-base text-dark-muted opacity-90 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
