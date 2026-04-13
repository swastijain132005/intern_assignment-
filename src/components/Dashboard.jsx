import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <section  id = "dashboard" className={styles.dashboard}>
      <div className={styles.container}>
        <h2>Powerful Insights at Your Fingertips</h2>
        <p className={styles.subtitle}>
          Get real-time visibility into your business performance.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Total Sales</h4>
            <p>₹1,25,000</p>
          </div>

          <div className={styles.card}>
            <h4>Inventory</h4>
            <p>320 Items</p>
          </div>

          <div className={styles.card}>
            <h4>Pending Payments</h4>
            <p>₹45,000</p>
          </div>

          <div className={styles.card}>
            <h4>Profit</h4>
            <p>₹30,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}