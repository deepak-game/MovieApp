import styles from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <div className={styles.logo}>
          Movie<span className="text-primary">App</span>
        </div>
        <div className={styles.socialIcons}>
          <h6>Facebook</h6>
          <h6>Instagram</h6>
          <h6>Twitter</h6>
        </div>
      </div>

      <div className={styles.featureSectionContainer}>
        <div className={styles.featureSection}>
          <h2 className="text-success">Features</h2>
          <ul className={styles.group}>
            <li>Movie Search based on the title only</li>
            <li>Movie Comparisons based on user search</li>
            <li>Advanced Search based on the user search</li>
            <li>Tracking user search for analytics</li>
          </ul>
        </div>
        <div className={styles.about}>
          <h4 className={styles.company}>Company</h4>
          <ul className={styles.group}>
            <li>
              <Link to="/about-page">About Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-page">Terms of Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
