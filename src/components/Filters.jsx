import PropTypes from 'prop-types';
import styles from '../css/components/baseCurrency.module.css';

const Filters = (props) => {
  const { countries, baseCurrency } = props;
  console.log('00');

  const orderedCountries = countries.sort((a, b) => (a.name < b.name ? -1 : 1));

  const options = [];
  orderedCountries.forEach((country) => {
    options.push(
      <option
        value={country.currencyCode}
        key={`${country.currencyCode}${country.name}`}
      >
        {`${country.currencyCode} - ${country.name}`}
      </option>,
    );
  });

  return (
    <div className={`${styles.filtersSection}`}>
      <div className={`pageContainer ${styles.pageContainer}`}>
        <h2>Base Currency</h2>
        <select className={`${styles.select}`} value={baseCurrency}>
          { options }
        </select>
        <input type="text" placeholder="Search" className={`${styles.search}`} />
      </div>
    </div>
  );
};

Filters.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    todaysExchange: PropTypes.number,
    weekHistory: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      exchange: PropTypes.number,
    })),
  })).isRequired,
  baseCurrency: PropTypes.string.isRequired,
};

export default Filters;
