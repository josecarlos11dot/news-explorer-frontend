import "./RegisterSuccess.css";

function RegisterSuccess({ onLoginClick }) {
  return (
    <div className="register-success">
      <p className="register-success__message">
        ¡El registro se ha completado con éxito!
      </p>
      <button
        className="register-success__link"
        type="button"
        onClick={onLoginClick}
      >
        Iniciar sesión
      </button>
    </div>
  );
}

export default RegisterSuccess;