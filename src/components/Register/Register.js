import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../Firebase/Firebase";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Вы не ввели свое имя");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="register__container">
              <h1 className="pb-3">Регистрация</h1>
              <div className="register__wrapp">
              <input
                type="text"
                className="register__textBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
              <input
                type="text"
                className="register__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
              />
              <input
                type="password"
                className="register__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
              <button className="register__btn" onClick={register}>
                Зарегистрироваться
              </button>
              <button
                className="register__btn register__google"
                onClick={signInWithGoogle}
              >
                Авторизоваться через Google аккаунт
              </button>
              <div>
                Уже есть аккаунт? <Link to="/">войдите</Link> сейчас.
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;