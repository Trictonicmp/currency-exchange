import { NavLink } from 'react-router-dom';
import styles from '../css/components/header.module.css';

const Header = () => (
  <header className={`${styles.header}`}>
    <div className="pageContainer">
      <NavLink to="/" className={styles.logo} title="Go home">
        CurrencyXchange
      </NavLink>
    </div>
  </header>
);

export default Header;
