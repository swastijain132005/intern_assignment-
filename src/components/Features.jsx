import styles from "./Features.module.css";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  const features = [
    { title: "Voucher Lifecycle", description: "Manage invoices & payments." },
    { title: "WhatsApp Automation", description: "Send invoices instantly." },
    { title: "Financial Reports", description: "Balance sheet & P&L." },
    { title: "Business Reporting", description: "Track sales & stock." },
    { title: "Access Control", description: "Secure operations." },
    { title: "Weight Billing", description: "Perfect for traders." },
  ];

  return (
    <section id = "features" className={styles.features}>
      <h2>Powerful Features</h2>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((f, i) => (
          <motion.div key={i} variants={cardVariants}>
            <FeatureCard {...f} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}