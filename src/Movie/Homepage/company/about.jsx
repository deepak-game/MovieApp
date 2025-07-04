import styles from "./about.module.css";
import BackToHomePage from "./backToHomepage";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>About MovieApp</h1>
      <BackToHomePage />
      <p className={styles.description}>
        MovieApp is a modern movie discovery platform that helps you explore,
        compare, search, book movie and track your favorite films. Whether
        you're into thrillers, comedies, will bring all kind of movies
      </p>

      <div className={styles.features}>
        <div className={styles.featureBox}>
          <h3>🎬 Personalized Suggestions</h3>
          <p>Will suggest movies based on your search history</p>
        </div>
        <div className={styles.featureBox}>
          <h3>🔍 Smart Search & Filter</h3>
          <p>
            Filter by genre, rating, release year, and more to quickly find the
            perfect movie.
          </p>
        </div>
        <div className={styles.featureBox}>
          <h3>📊 Compare Movies</h3>
          <p>
            Visually compare different movies, cast, ratings, and more before
            you decide what to watch.
          </p>
          <p>
            Before moving to search analytics page and to see movie
            recommendation, be make sure to search some movies, because search
            analytics and movie recommendation will work based on the user
            search only. only.
          </p>
        </div>
      </div>

      <p className={styles.footerNote}>
        MovieApp is designed and developed with ❤️ to simplify your movie
        experience.
      </p>
    </div>
  );
}

export default About;
