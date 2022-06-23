import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/components/countriesListItem.module.css';

const CountryListItem = (props) => {
  const { country, baseCurrency } = props;
  return (
    <li className={styles.listItem}>
      <Link
        to="details"
        className={`
        pageContainer
        ${styles.pageContainer}
        ${styles.listItemDetails}
        `}
      >
        <div className={styles.countryDetails}>
          <span className={styles.countryFlag}>{country.flag}</span>
          <h3 className={styles.countryName}>{country.name}</h3>
        </div>
        <h4>{`1 ${baseCurrency} = ${country.todaysExchange} ${country.currencyCode}`}</h4>
      </Link>
    </li>
  );
};

CountryListItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    currencyCode: PropTypes.string,
    flag: PropTypes.string,
    todaysExchange: PropTypes.number,
    weekHistory: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      exchange: PropTypes.number,
    })),
  }).isRequired,
  baseCurrency: PropTypes.string.isRequired,
};

export default CountryListItem;
