import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryListItem = (props) => {
  const { country } = props;
  return (
    <li>
      <Link to="details">
        {country.name}
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
};

export default CountryListItem;
