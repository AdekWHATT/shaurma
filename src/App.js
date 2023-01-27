import './App.css';
import MainPage from './Pages/MainPage';
import BasketPage from './Pages/BasketPage';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import { Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
  );
}
export default App;
