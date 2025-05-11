import React from "react";
import "./styles/Popup.css";

const Popup = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
