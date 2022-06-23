import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryListItem = (props) => {
  const { country } = props;
  console.log(country);
  return (
    <Link to="details">hello</Link>
  );
};

CountryListItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    todaysExchange: PropTypes.number,
    weekHistory: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      exchange: PropTypes.number,
    })),
  }).isRequired,
};

export default CountryListItem;
