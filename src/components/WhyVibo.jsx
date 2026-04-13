import styles from "./WhyVibo.module.css";
import { motion } from "framer-motion";

export default function WhyVibo() {
  return (
    <section id="why" className={styles.why}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Built for Fruit & Vegetable Traders</h2>
        <p className={styles.subtitle}>
          Designed to handle real-world wholesale operations with speed,
          accuracy, and simplicity.
        </p>

        {/* Cards */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>⚖️ Weight-Based Invoicing</h3>
            <p>
              Generate accurate invoices based on weight — ideal for mandi and
              wholesale trading workflows.
            </p>
          </div>

          <div className={styles.card}>
            <h3>📦 Real-Time Inventory</h3>
            <p>
              Track stock movement instantly and manage perishable goods with
              better efficiency.
            </p>
          </div>

          <div className={styles.card}>
            <h3>⚡ Faster Billing</h3>
            <p>
              Create invoices and receipts in seconds to serve more customers
              without delays.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}