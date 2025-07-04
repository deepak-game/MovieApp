import styles from "./privacy.module.css";
import BackToHomePage from "./backToHomepage";

function Privacy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <BackToHomePage />
      <p className={styles.text}>
        Welcome to our Movie App. Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your information.
      </p>

      <h2 className={styles.subheading}>1. Information We Collect</h2>
      <p className={styles.text}>
        We do not collect any kind of user information like name, email etc when
        you use our app.
      </p>

      <h2 className={styles.subheading}>2. How We Use Your information</h2>
      <p className={styles.text}>
        Since we do not collect any kind of user information so it is totally
        safe from security purpose.
      </p>

      <h2 className={styles.subheading}>3. Data Security</h2>
      <p className={styles.text}>
        We implement standard security measures to protect your data.
      </p>

      <h2 className={styles.subheading}>4. Third-Party Services</h2>
      <p className={styles.text}>
        We may use third-party services like analytics tools to understand user
        behavior. These services may collect data in accordance with their own
        privacy policies.
      </p>

      <h2 className={styles.subheading}>5. Changes to This Policy</h2>
      <p className={styles.text}>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated revision date.
      </p>

      <p className={styles.text}>
        If you have any questions, feel free to contact us at
        support@movieapp.com.
      </p>
    </div>
  );
}

export default Privacy;
