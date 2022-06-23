import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFilteredCountries } from '../../redux/countries/filteredCountries';
import BaseCurrency from '../BaseCurrency';

const Home = (props) => {
  const { countries, baseCurrency } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredCountries(countries, ''));
  }, []);

  return (
    <section>
      <BaseCurrency countries={countries} baseCurrency={baseCurrency} />
      <div>
        p
      </div>
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
  baseCurrency: PropTypes.string.isRequired,
};

export default Home;
