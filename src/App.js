import { Routes, Route } from 'react-router-dom';
import Details from './components/pages/Details';
import Home from './components/pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details" element={<Details />} />
    </Routes>
  );
}

export default App;
