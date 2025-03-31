import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Medical Student",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "EduPro AI revolutionized how I study for my medical exams. The flashcards with spaced repetition helped me memorize complex terminology in half the time it used to take.",
  },
  {
    name: "Sarah Williams",
    role: "Computer Science Major",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    text: "Being able to upload my programming lecture PDFs and have them converted into interactive quizzes was a game-changer. I identified knowledge gaps I didn't even know I had.",
  },
  {
    name: "Michael Chen",
    role: "PhD Candidate",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "The organized content management system saved me countless hours. Being able to tag my research materials by topic and easily retrieve them has streamlined my dissertation work significantly.",
  },
  {
    name: "Emma Rodriguez",
    role: "Law Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "The note generation feature helped me condense lengthy case studies into concise summaries with all the key points highlighted. My study efficiency improved by at least 40%.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0); // -1 for left, 1 for right, 0 for initial

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Get testimonials to display (3 on desktop, 2 on mobile)
  const getTestimonialsToShow = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % testimonials.length);
    }
    return indices;
  };

  const testimonialsToShow = getTestimonialsToShow();

  // Variants for animation
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 280,
        damping: 25,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    }),
  };

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-dark-background to-dark-card/30 relative">
      {/* Background gradients with continuous animation */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold gradient-text leading-tight">
            What our students are saying
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Desktop - 3 testimonials with slide animation */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              {testimonialsToShow.map((index, i) => (
                <motion.div
                  key={`desktop-${index}`}
                  custom={direction}
                  initial={i === 0 ? "enter" : { opacity: 1, x: 0 }}
                  animate="center"
                  exit={i === 0 ? "exit" : { opacity: 1, x: 0 }}
                  variants={i === 0 ? cardVariants : {}}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  <motion.div
                    className="glass-card rounded-xl p-6 h-full flex flex-col relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* decorative elements */}
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/5 rounded-full blur-xl"></div>

                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 flex items-center justify-center text-white"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Quote className="h-5 w-5" aria-hidden="true" />
                      </motion.div>
                    </div>

                    <blockquote className="text-sm md:text-base text-dark-text text-center mb-6 flex-grow opacity-90 leading-relaxed">
                      "{testimonials[index].text}"
                    </blockquote>

                    <motion.div
                      className="flex items-center justify-center mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <img
                        className="h-12 w-12 rounded-full ring-2 ring-indigo-500/20 p-[2px]"
                        src={testimonials[index].image}
                        alt={`${testimonials[index].name} avatar`}
                      />
                      <div className="ml-3 text-left">
                        <div className="text-sm font-medium text-dark-text">
                          {testimonials[index].name}
                        </div>
                        <div className="text-xs text-primary">
                          {testimonials[index].role}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile - 2 testimonials with slide animation */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              {testimonialsToShow.slice(0, 2).map((index, i) => (
                <motion.div
                  key={`mobile-${index}`}
                  custom={direction}
                  initial={i === 0 ? "enter" : { opacity: 1, x: 0 }}
                  animate="center"
                  exit={i === 0 ? "exit" : { opacity: 1, x: 0 }}
                  variants={i === 0 ? cardVariants : {}}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  <motion.div
                    className="glass-card rounded-xl p-6 h-full flex flex-col relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* decorative elements */}
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/5 rounded-full blur-xl"></div>

                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 flex items-center justify-center text-white"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Quote className="h-5 w-5" aria-hidden="true" />
                      </motion.div>
                    </div>

                    <blockquote className="text-sm md:text-base text-dark-text text-center mb-6 flex-grow opacity-90 leading-relaxed">
                      "{testimonials[index].text}"
                    </blockquote>

                    <motion.div
                      className="flex items-center justify-center mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <img
                        className="h-12 w-12 rounded-full ring-2 ring-indigo-500/20 p-[2px]"
                        src={testimonials[index].image}
                        alt={`${testimonials[index].name} avatar`}
                      />
                      <div className="ml-3 text-left">
                        <div className="text-sm font-medium text-dark-text">
                          {testimonials[index].name}
                        </div>
                        <div className="text-xs text-primary">
                          {testimonials[index].role}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-4 items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-white/20 hover:bg-dark-accent text-dark-text"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    testimonialsToShow.includes(index)
                      ? " scale-110 bg-dark-muted"
                      : "bg-gradient-to-r from-purple-500 to-indigo-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>z
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-white/20 hover:bg-dark-accent text-dark-text"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsSection;
