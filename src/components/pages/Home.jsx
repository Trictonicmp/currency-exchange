import { useSelector } from 'react-redux';

const Home = () => {
  const state = useSelector((state) => state.appStatus);

  return (
    <section>
      <h1>Home</h1>
      {
        state === 'LOADING' ? <p>loading</p> : <p>loaded</p>
      }
    </section>
  );
};

export default Home;
