import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Crown, Users } from "lucide-react";
import { Separator } from "@/shared/components/ui/separator";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <div className="py-16 sm:py-24 bg-dark-background relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative glass-card rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </div>

          <div className="relative p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold gradient-text leading-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to transform your learning experience?
              </motion.h2>

              <motion.p
                className="mt-4 text-base md:text-lg text-dark-muted opacity-90 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of students who are already using EduPro AI to
                study smarter, not harder. Get started with a 7-day free trial.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button className="btn-primary px-8 py-6 text-sm font-medium cursor-pointer">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline px-8 py-6 text-sm font-medium cursor-pointer"
                >
                  Learn More
                </Button>
              </motion.div>

              <Separator className="my-12 bg-white/10" />

              <motion.p
                className="text-base md:text-lg font-medium text-dark-text mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Choose the plan that works for you
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <motion.div
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="bg-dark-accent/50 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 5 }}
                  >
                    <Crown className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold gradient-text">
                    Premium Subscription
                  </h3>
                </div>
                <ul className="space-y-2 text-dark-muted">
                  {[
                    "Unlimited study material uploads",
                    "Advanced AI-generated questions",
                    "Priority customer support",
                    "Export notes in multiple formats",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm md:text-base opacity-90 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="bg-dark-accent/50 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 5 }}
                  >
                    <Users className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold gradient-text">
                    Team Plan
                  </h3>
                </div>
                <ul className="space-y-2 text-dark-muted">
                  {[
                    "All Premium features included",
                    "Team collaboration tools",
                    "Shared study materials library",
                    "Advanced analytics dashboard",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm md:text-base opacity-90 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
