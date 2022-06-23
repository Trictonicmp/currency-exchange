import PropTypes from 'prop-types';
import styles from '../css/components/countriesList.module.css';

const CountriesList = (props) => {
  const { countries } = props;

  console.log(countries);
  return (
    <div className={`${styles.countriesList}`}>
      <ul className="pageContainer">
        p
      </ul>
    </div>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    todaysExchange: PropTypes.number,
    weekHistory: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      exchange: PropTypes.number,
    })),
  })).isRequired,
};

export default CountriesList;
