import styles from "./Whatsapp.module.css";

export default function Whatsapp() {
  return (
    <section className={styles.whatsapp}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Send Invoices Instantly via WhatsApp</h2>
          <p>
            Share invoices and vouchers with customers in one click. No manual
            follow-ups, no delays — just faster communication.
          </p>

          <button className={styles.btn}>Try Feature</button>
        </div>

        <div className={styles.image}>
          <div className={styles.mock}>
            📱 Invoice Sent Successfully
          </div>
        </div>
      </div>
    </section>
  );
}