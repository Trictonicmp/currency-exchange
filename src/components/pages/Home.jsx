import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFilteredCountries } from '../../redux/countries/filteredCountries';
import Filters from '../Filters';
import CountriesList from '../CountriesList';

const Home = (props) => {
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const { countries, baseCurrency } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredCountries(countries, ''));
  }, []);

  return (
    <section>
      <Filters countries={countries} baseCurrency={baseCurrency} />
      <TableHeader />
      <CountriesList countries={filteredCountries} baseCurrency={baseCurrency} />
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
    currencyCode: PropTypes.string,
    todaysExchange: PropTypes.number,
    weekHistory: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      exchange: PropTypes.number,
    })),
  })).isRequired,
  baseCurrency: PropTypes.string.isRequired,
};

export default Home;
