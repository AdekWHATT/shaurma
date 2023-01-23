import './App.css';
import MainPage from './Pages/MainPage';
import Cart from './Pages/Cart';
import { Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
export default App;
