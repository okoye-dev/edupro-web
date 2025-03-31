import Navbar from "@/landing/components/Navbar";
import Footer from "@/landing/components/Footer";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <motion.div
      className="min-h-screen bg-dark-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl">
            <span className="dark-gradient-text">Our Features</span>
          </h1>
          <p className="mt-4 text-lg text-dark-muted max-w-2xl mx-auto">
            Explore our AI-powered tools designed to transform your study
            materials into interactive learning resources.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card p-12 rounded-xl">
            <p className="text-lg text-dark-muted mb-4">
              Features catalog coming soon...
            </p>
            <div className="relative h-40 w-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-indigo-600/10 animate-pulse-slow"></div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 rotate-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary/70 text-4xl">✨</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Courses;
