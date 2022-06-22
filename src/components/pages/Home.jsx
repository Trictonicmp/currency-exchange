import { useEffect } from 'react';
import { getweekHistory } from '../../API/CurrencyCountriesAPI';

const Home = () => {
  useEffect(() => {
    console.log(getweekHistory());
  }, []);

  return (
    <section>
      <h1>Home</h1>
    </section>
  );
};

export default Home;
