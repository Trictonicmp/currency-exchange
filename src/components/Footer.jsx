import styles from '../css/components/footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="pageContainer">
      <p>
        This Project utilizes both
        <span className={styles.badge}>Rest Countries API</span>
        and
        <span className={styles.badge}>Exchangerate.host API</span>
        to get countries data and currency exchange data.
        <br />
        <br />
        More info (
        <a href="https://restcountries.com/" className={`${styles.badge} ${styles.linkBadge}`}>Rest Countries</a>
        <a href="https://exchangerate.host" className={`${styles.badge} ${styles.linkBadge}`}>Exchangerate.host</a>
        )
      </p>
    </div>
  </footer>
);

export default Footer;
