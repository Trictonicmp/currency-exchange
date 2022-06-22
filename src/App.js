import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from './redux/countries/countries';
import Details from './components/pages/Details';
import Home from './components/pages/Home';

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries('USD'));
    console.log(countries);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home countries={countries} />} />
      <Route path="details" element={<Details />} />
    </Routes>
  );
}

export default App;
