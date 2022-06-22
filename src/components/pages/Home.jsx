import { useEffect } from 'react';
import getCountriesCurrencys from '../../API/CurrencyCountriesAPI';

const Home = () => {
  useEffect(() => {
    console.log(getCountriesCurrencys('USD'));
  }, []);

  return (
    <section>
      <h1>Home</h1>
    </section>
  );
};

export default Home;
