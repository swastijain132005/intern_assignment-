import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge (small but premium touch) */}
        <div className={styles.badge}>
          Built for Fruit & Vegetable Traders
        </div>

        <h1>
          Manage Your Business <span>Smarter</span>
        </h1>

        <p>
          Simplify accounting, inventory, billing, and operations with a modern
          cloud-based ERP designed for wholesalers.
        </p>

        {/* CTA Buttons */}
        <div className={styles.buttons}>
          <motion.button
            className={styles.primaryBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free →
          </motion.button>

          <button className={styles.secondaryBtn}>
            View Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}