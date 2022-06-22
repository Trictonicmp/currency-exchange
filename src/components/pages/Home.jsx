import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';

const Home = () => {
  const state = useSelector((state) => state.currencies);
  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <section>
      <h1>Home</h1>
    </section>
  );
};

export default Home;
