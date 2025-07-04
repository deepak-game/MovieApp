import BackToHomePage from "./backToHomepage";
import styles from "./terms.module.css";

function Terms() {
  return (
    <div className={styles.container}>
      <BackToHomePage />
      <h1 className={styles.heading}>Terms & Conditions</h1>
      <p className={styles.text}>
        By using our Movie App, you agree to the following terms and conditions.
        Please read them carefully.
      </p>

      <h2 className={styles.subheading}>1. Use of the App</h2>
      <p className={styles.text}>
        You agree to use the app only for lawful purposes and in a way that does
        not infringe the rights of others.
      </p>

      <h2 className={styles.subheading}>2. Intellectual Property</h2>
      <p className={styles.text}>
        All content, including logos, graphics, and data, is the property of
        Movie App or its licensors and is protected by copyright laws.
      </p>

      <h2 className={styles.subheading}>3. User Accounts</h2>
      <p className={styles.text}>
        If you create an account, you are responsible for maintaining its
        confidentiality and for all activities under your account.
      </p>

      <h2 className={styles.subheading}>4. Limitation of Liability</h2>
      <p className={styles.text}>
        We are not liable for any damages arising from your use of the app,
        including but not limited to data loss or service interruptions.
      </p>

      <h2 className={styles.subheading}>5. Modifications</h2>
      <p className={styles.text}>
        We reserve the right to modify these terms at any time. Continued use of
        the app constitutes acceptance of the updated terms.
      </p>

      <p className={styles.text}>
        If you have any questions about these terms, contact us at
        legal@movieapp.com.
      </p>
    </div>
  );
}

export default Terms;
