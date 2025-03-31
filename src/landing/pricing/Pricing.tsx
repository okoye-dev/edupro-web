import Navbar from "@/landing/components/Navbar";
import Footer from "@/landing/components/Footer";
import { Button } from "@/shared/components/ui/button";
import { Check, Crown, ArrowRight, Settings } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "per month",
    description: "Perfect for beginners",
    features: [
      "Access to 10 basic courses",
      "AI-powered learning recommendations",
      "Basic progress tracking",
      "Mobile access",
      "Email support",
    ],
    cta: "Start with Basic",
    highlighted: false,
    icon: Settings,
  },
  {
    name: "Pro",
    price: "$19.99",
    period: "per month",
    description: "Our most popular plan",
    features: [
      "Access to all 100+ courses",
      "Advanced AI tutoring",
      "Personalized learning paths",
      "Detailed analytics",
      "Priority support",
      "Offline downloads",
    ],
    cta: "Get Pro",
    highlighted: true,
    icon: Crown,
  },
  {
    name: "Enterprise",
    price: "$49.99",
    period: "per month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro plan",
      "Team management dashboard",
      "Custom learning tracks",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
    icon: Settings,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-dark-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
        {/* Background gradients with continuous animation */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-40 animate-pulse-slow"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold gradient-text sm:text-4xl">
            Choose the Perfect Plan
          </p>
          <p className="mt-4 text-lg text-dark-muted max-w-2xl mx-auto">
            All plans include a 7-day free trial with no credit card required.
            Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl glass-card flex flex-col h-full ${
                plan.highlighted
                  ? "border border-primary/40 shadow-xl shadow-primary/10 z-10 transform scale-105 bg-gradient-to-b from-dark-card to-dark-background"
                  : "border border-white/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
                boxShadow: plan.highlighted
                  ? "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {plan.highlighted && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider flex items-center shadow-lg"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Crown className="w-3.5 h-3.5 mr-1" /> Most Popular
                  </motion.div>
                </div>
              )}

              {plan.highlighted && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse-slow"></div>
                  <div
                    className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/5 rounded-full blur-xl animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              )}

              <div className="p-8 flex flex-col h-full relative">
                <div className="mb-6 flex items-center">
                  <motion.div
                    className={`h-12 w-12 rounded-full flex items-center justify-center mr-4 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                        : "bg-dark-accent/50 text-primary"
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <plan.icon className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <h3
                      className={`text-2xl font-bold ${
                        plan.highlighted ? "gradient-text" : "text-dark-text"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-dark-muted text-sm mt-1">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-4xl font-extrabold text-dark-text flex items-baseline">
                    {plan.price}
                    <span className="text-dark-muted text-sm ml-2">
                      {plan.period}
                    </span>
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div
                        className={`flex-shrink-0 h-5 w-5 ${
                          plan.highlighted ? "text-primary" : "text-primary/80"
                        } mt-1`}
                      >
                        <Check className="h-5 w-5" />
                      </div>
                      <span className="text-dark-muted ml-2 opacity-90">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  className={`${
                    plan.highlighted
                      ? "btn-primary cursor-pointer"
                      : "btn-outline cursor-pointer"
                  } font-medium group`}
                >
                  {plan.cta}
                  <motion.div
                    className="ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-dark-muted text-lg">
            Have questions about our pricing plans?
          </p>
          <Button variant="outline" className="mt-4 btn-outline">
            View FAQ
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
