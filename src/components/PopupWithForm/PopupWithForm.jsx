import { useEffect } from "react";
import "./PopupWithForm.css";

function PopupWithForm({ title, isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscClose(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="popup" onClick={handleOverlayClick}>
  <div
    className="popup__container"
    role="dialog"
    aria-modal="true"
    aria-labelledby="popup-title"
  >
    <button
      className="popup__close-button"
      type="button"
      onClick={onClose}
      aria-label="Cerrar"
    >
      ✕
    </button>
    <h2 className="popup__title" id="popup-title">
      {title}
    </h2>
    {children}
  </div>
</div>
  );
}

export default PopupWithForm;