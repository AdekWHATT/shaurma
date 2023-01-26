import React, { useEffect, useState } from "react";
import './App.css';
import MainPage from './Pages/MainPage';
import BasketPage from './Pages/BasketPage';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import { Route, Routes, } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./components/Firebase/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
function App() {
   const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <Routes>
      <Route path="/" element={<MainPage name={name}/>} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
  );
}
export default App;
