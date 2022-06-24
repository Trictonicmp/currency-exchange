import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Details from './components/pages/Details';
import Home from './components/pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const countries = useSelector((state) => state.countries);
  const baseCurrency = useSelector((state) => state.baseCurrency);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home countries={countries} baseCurrency={baseCurrency} />} />
        <Route path="details" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
