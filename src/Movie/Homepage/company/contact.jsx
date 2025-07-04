import styles from "./contact.module.css";
import BackToHomePage from "./backToHomepage";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <BackToHomePage />
      <p className={styles.text}>
        We'd love to hear from you! Whether you have feedback, questions, or
        just want to say hello, feel free to reach out.
      </p>

      <div className={styles.infoSection}>
        <h2 className={styles.subheading}>📧 Email</h2>
        <p className={styles.text}>support@movieapp.com</p>

        <h2 className={styles.subheading}>📍 Address</h2>
        <p className={styles.text}>
          123 Cineplex Lane, Film City, Mumbai, India
        </p>

        <h2 className={styles.subheading}>📱 Social Media</h2>
        <p className={styles.text}>Follow us on Twitter and Instagram</p>
      </div>
    </div>
  );
}

export default Contact;
