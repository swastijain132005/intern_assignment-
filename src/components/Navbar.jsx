import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>Vibo ERP</h2>

      <div className={styles.links}>
        <a href="#hero">Home</a>
        <a href="#features">Features</a>

        <a href="#why">Why Vibo</a>
        <a href="#dashboard">Dashboard</a>
        
      </div>

      <Link to="/features" className={styles.btn}>
        View Page
      </Link>
    </nav>
  );
}