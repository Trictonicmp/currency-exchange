import PropTypes from 'prop-types';
import CountryListItem from './CountryListItem';
import styles from '../css/components/countriesList.module.css';

const CountriesList = (props) => {
  const { countries } = props;

  const listItems = [];
  countries.forEach((country) => {
    listItems.push(
      <CountryListItem country={country} key={`${country.name}${country.currencyCode}`} />,
    );
  });

  return (
    <div className={`${styles.countriesList}`}>
      <ul className="pageContainer">
        { listItems }
      </ul>
    </div>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    currencyCode: PropTypes.string,
    todaysExchange: PropTypes.number,
    weekHistory: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      exchange: PropTypes.number,
    })),
  })).isRequired,
};

export default CountriesList;
