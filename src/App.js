import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from './redux/currencies/currencies';
import Details from './components/pages/Details';
import Home from './components/pages/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries('USD'));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details" element={<Details />} />
    </Routes>
  );
}

export default App;
