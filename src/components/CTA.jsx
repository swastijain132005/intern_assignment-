import styles from "./CTA.module.css";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Start Managing Your Business Smarter</h2>
        <p>Join hundreds of traders using Vibo ERP today.</p>

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