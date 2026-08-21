import { useState } from "react";
import "./Login.css";

function Login({ onSubmit, onRegisterClick, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(email);
  const isValid = isEmailValid && password.trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    onSubmit({ email, password });
  }

  return (
    <form className="login" onSubmit={handleSubmit} noValidate>
      <label className="login__label" htmlFor="login-email">
        Correo electrónico
      </label>
      <input
        id="login-email"
        className="login__input"
        type="email"
        placeholder="Introduce tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {email && !isEmailValid && (
        <span className="login__error">Correo electrónico inválido</span>
      )}
      <label className="login__label" htmlFor="login-password">
        Contraseña
      </label>
      <input
        id="login-password"
        className="login__input"
        type="password"
        placeholder="Introduce tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errorMessage && <span className="login__error">{errorMessage}</span>}
      <button className="login__submit" type="submit" disabled={!isValid}>
        Iniciar sesión
      </button>
      <p className="login__switch">
        o{" "}
        <button
          className="login__switch-link"
          type="button"
          onClick={onRegisterClick}
        >
          inscribirse
        </button>
      </p>
    </form>
  );
}

export default Login;
