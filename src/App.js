import './App.css';
import MainPage from './Pages/MainPage';
import BasketPage from './Pages/BasketPage';
import { Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}
export default App;
