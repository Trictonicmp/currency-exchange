import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilteredCountries } from '../../redux/countries/filteredCountries';

const Home = (props) => {
  const { countries } = props;
  const dispatch = useDispatch();
  dispatch(getFilteredCountries(countries, 'Mex'));

  return (
    <section>
      <h1>Home</h1>
      {
        // appStatus === 'LOADING' ? <p>loading</p> : <p>loaded</p>
        'Hey'
      }
    </section>
  );
};

Home.propTypes = {
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

export default Home;
