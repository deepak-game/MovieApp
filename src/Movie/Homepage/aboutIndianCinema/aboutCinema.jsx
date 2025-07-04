import styles from "./indianCinema.module.css";

function IndianCinema() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🎬 A Journey Through Indian Cinema</h2>

      <section className={styles.section}>
        <h3>📽️ The Beginning</h3>
        <div className={styles.imageBox}>
          <p>
            Indian cinema began with <strong>Raja Harishchandra (1913)</strong>,
            a silent film directed by <strong>Dadasaheb Phalke</strong>. It laid
            the foundation for the billion-dollar industry we know today.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading1}>Evolution of Indian Cinema</h3>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineItem}>
            <h4>1931</h4>
            <p>
              India’s first talkie film <em>Alam Ara</em> was released.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <h4>1950s-60s</h4>
            <p>
              The Golden Age with iconic filmmakers like Satyajit Ray and Guru
              Dutt.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <h4>1970s-80s</h4>
            <p>Rise of commercial cinema, action heroes, and Masala films.</p>
          </div>
          <div className={styles.timelineItem}>
            <h4>2000s-Present</h4>
            <p>
              Blend of art and mainstream films, international reach, OTT
              platforms like Amazon Prime, Netflix, Hotstar..
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3>🎭 Categories of Indian Cinema</h3>
        <ul>
          <li>
            <strong>Bollywood:</strong> Hindi-language films, largest and most
            popular globally.
          </li>
          <li>
            <strong>Tollywood:</strong> Telugu-language films, known for grand
            scale & action.
          </li>
          <li>
            <strong>Kollywood:</strong> Tamil-language films, critically
            acclaimed & artistic.
          </li>
          <li>
            <strong>Other Industries:</strong> Malayalam, Kannada, Bengali,
            Marathi, etc.
          </li>
        </ul>
      </section>

      {/* Global Reach */}
      <section className={styles.section}>
        <h3>🌍 Global Influence</h3>
        <p>
          Indian cinema has reached global audiences through film festivals,
          international box office releases, and streaming platforms. With
          stories rooted in culture and emotion, it continues to captivate
          millions worldwide.
        </p>
      </section>
    </div>
  );
}

export default IndianCinema;
