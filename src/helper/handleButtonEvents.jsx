import React from 'react';
import isValidPhoneNumber from '../utils/validation';

const sendWhatsAppMessage = (phoneNumber, message) => {
  if (!isValidPhoneNumber(phoneNumber)) {
    console.error("Invalid phone number");
    return;
  }
  const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

const handleWhatsAppMessage = () => {
  const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER || "919978764266"; // Fallback to hardcoded number
  const message = "Hello! I'm interested in your English classes.";
  sendWhatsAppMessage(phoneNumber, message);
};

const handleEnrollNow = () => {
  const googleFormUrl = "https://forms.gle/JEaF17GSPzu1bnXcA";
  window.open(googleFormUrl, "_blank");
};

const renderButton = (text, onClick, icon, isWhatsapp = false) => {
  let buttonClass = "bg-blue-600 hover:bg-blue-700 rounded-full text-white font-bold py-3 px-6 flex items-center justify-center focus:outline-none focus:shadow-outline";
  
  if (isWhatsapp) {
    buttonClass = "bg-green-700 hover:bg-green-800 rounded-full text-white font-bold py-3 px-6 flex items-center justify-center focus:outline-none focus:shadow-outline";
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && React.createElement(icon, { className: "mr-2" })}
      {text}
    </button>
  );
};

export { handleEnrollNow, handleWhatsAppMessage, sendWhatsAppMessage, renderButton };
