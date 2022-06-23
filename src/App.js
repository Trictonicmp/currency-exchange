import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from './redux/countries/countries';
import Details from './components/pages/Details';
import Home from './components/pages/Home';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const baseCurrency = useSelector((state) => state.baseCurrency);
  useEffect(() => {
    dispatch(getCountries('USD'));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home countries={countries} baseCurrency={baseCurrency} />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
