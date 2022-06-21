import { useEffect } from 'react';
import { getCountriesData } from '../../API/CountriesAPI';
// import getCurrencies from '../../API/CurrenciesAPI';

const Home = () => {
  useEffect(() => {
    console.log(getCountriesData((error) => console.log(error)));
    // console.log(getCurrencies());
  }, []);

  return (
    <section>
      <h1>Home</h1>
    </section>
  );
};

export default Home;
