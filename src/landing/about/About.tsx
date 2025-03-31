import Navbar from "@/landing/components/Navbar";
import Footer from "@/landing/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
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

  return (
    <div className="min-h-screen bg-dark-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-[40%] -left-[10%] w-[50%] h-[80%] rounded-full bg-purple-900/10 blur-3xl"></div>
          <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[70%] rounded-full bg-indigo-900/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-dark-text sm:text-5xl mb-6">
              About <span className="dark-gradient-text">EduPro AI</span>
            </h1>
            <p className="mt-4 text-lg text-dark-muted max-w-2xl mx-auto">
              Our mission is to revolutionize education through advanced AI
              technology, making learning more accessible, efficient, and
              personalized than ever before.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 relative mx-auto max-w-4xl overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm z-10 rounded-xl"></div>
            <div className="absolute -inset-0.5 bg-conic-gradient rounded-xl blur-sm z-0 animate-pulse-glow"></div>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
              alt="Students learning with EduPro AI"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg relative z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 dark-gradient-text">
                Our Story
              </h2>
              <div className="space-y-4 text-dark-muted">
                <p>
                  Founded in 2023 by a team of educators, AI researchers, and
                  learning scientists, EduPro AI was born from a simple yet
                  powerful vision: to create an AI-powered learning platform
                  that adapts to each student's unique needs and learning style.
                </p>
                <p>
                  We recognized that traditional education often follows a
                  one-size-fits-all approach, leaving many students struggling
                  to keep up or feeling unchallenged. Our team set out to change
                  this by leveraging cutting-edge artificial intelligence to
                  create truly personalized learning experiences.
                </p>
                <p>
                  Today, EduPro AI helps thousands of students around the world
                  master new skills and subjects at their own pace, with
                  personalized guidance every step of the way.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-8 rounded-xl"
              variants={itemVariants}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2"> 
                    10,000+
                  </div>
                  <div className="text-dark-muted">Active Students</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">5x</div>
                  <div className="text-dark-muted">Learning Efficiency</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">
                    100+
                  </div>
                  <div className="text-dark-muted">Subject Areas</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">
                    98%
                  </div>
                  <div className="text-dark-muted">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-dark-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold dark-gradient-text">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-dark-muted max-w-2xl mx-auto">
              The principles that guide our mission to transform education
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BookOpen,
                title: "Accessible Learning",
                description:
                  "We believe quality education should be accessible to everyone, regardless of location or background.",
              },
              {
                icon: Users,
                title: "Student-Centered",
                description:
                  "Every decision we make puts students' needs first, ensuring the best possible learning experience.",
              },
              {
                icon: Lightbulb,
                title: "Continuous Innovation",
                description:
                  "We constantly refine our AI models and learning methods to stay at the cutting edge.",
              },
              {
                icon: Award,
                title: "Academic Excellence",
                description:
                  "We maintain the highest standards in our course content and teaching methodologies.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-dark-accent/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark-text">
                  {value.title}
                </h3>
                <p className="text-dark-muted">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
