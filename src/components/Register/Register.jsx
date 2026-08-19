import { useState } from "react";
import "./Register.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Register({ onSubmit, onLoginClick, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    if (value && !EMAIL_REGEX.test(value)) {
      setEmailError("Dirección de correo electrónico no válida");
    } else {
      setEmailError("");
    }
  }

  const isValid =
    email.trim() !== "" &&
    password.trim() !== "" &&
    name.trim() !== "" &&
    !emailError;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    onSubmit({ email, password, name });
  }

  return (
    <form className="register" onSubmit={handleSubmit} noValidate>
      <label className="register__label" htmlFor="register-email">
        Correo electrónico
      </label>
      <input
        id="register-email"
        className="register__input"
        type="email"
        placeholder="Introduce tu correo electrónico"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && (
        <span className="register__error" role="alert">
          {emailError}
        </span>
      )}
      <label className="register__label" htmlFor="register-password">
        Contraseña
      </label>
      <input
        id="register-password"
        className="register__input"
        type="password"
        placeholder="Introduce tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="register__label" htmlFor="register-name">
        Nombre de usuario
      </label>
      <input
        id="register-name"
        className="register__input"
        type="text"
        placeholder="Introduce tu nombre de usuario"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errorMessage && (
        <span className="register__server-error" role="alert">
          {errorMessage}
        </span>
      )}
      <button className="register__submit" type="submit" disabled={!isValid}>
        Inscribirse
      </button>
      <p className="register__switch">
        o{" "}
        <button
          className="register__switch-link"
          type="button"
          onClick={onLoginClick}
        >
          iniciar sesión
        </button>
      </p>
    </form>
  );
}

export default Register;
