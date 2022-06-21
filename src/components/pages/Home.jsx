import { useEffect } from 'react';
import { getCountriesData } from '../../API/CountriesAPI';

const Home = () => {
  useEffect(() => {
    console.log(getCountriesData());
  }, []);

  return (
    <section>
      <h1>Home</h1>
    </section>
  );
};

export default Home;
