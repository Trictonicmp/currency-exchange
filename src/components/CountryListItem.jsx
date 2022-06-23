import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCountry } from '../redux/selectedItem/selectedITem';
import styles from '../css/components/countriesListItem.module.css';
import rightArrow from '../assets/images/right-arrow.png';

const CountryListItem = (props) => {
  const { country, baseCurrency } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    dispatch(selectCountry(country));
    navigate(1);
  };

  return (
    <li className={styles.listItem}>
      <Link
        to={`details?country=${country.name}`}
        className={`
        pageContainer
        ${styles.pageContainer}
        ${styles.listItemDetails}
        `}
        onClick={handleLinkClick}
      >
        <div className={styles.countryDetails}>
          <span className={styles.countryFlag}>{country.flag}</span>
          <h3 className={styles.countryName}>{country.name}</h3>
        </div>
        <div className={styles.countryExchangeContainer}>
          <p>Exchange</p>
          <div className={styles.countryExchange}>
            <span>
              {`1 ${baseCurrency}`}
            </span>
            =
            <span>
              {`${country.todaysExchange} ${country.currencyCode}`}
            </span>
          </div>
        </div>
        <img src={rightArrow} alt=">" className={styles.detailsIcon} />
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
