import React from "react";
import { toast } from "react-toastify";
import { FaCoffee, FaCreditCard, FaMobileAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Donate = () => {
  const handleDonate = (method) => {
    toast.success(`Thank you for choosing to donate via ${method}!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="donate">
      <h2>Buy Us A Coffee</h2>
      <p>
        Your contributions help us keep going. Consider buying us a coffee or
        supporting our mission!
      </p>
      <div className="donate-buttons">
        <button className="donate-btn" onClick={() => handleDonate("PayPal")}>
          <FaCreditCard style={{ marginRight: "8px" }} /> Donate via PayPal
        </button>
        <button className="donate-btn" onClick={() => handleDonate("M-Pesa")}>
          <FaMobileAlt style={{ marginRight: "8px" }} /> Donate via M-Pesa
        </button>
      </div>
      <p style={{ marginTop: "20px", color: "#ffffff" }}>
        Every contribution, no matter how small, makes a difference!
      </p>
      <p style={{ marginTop: "10px", fontStyle: "italic", color: "#ffffff" }}>
        Thank you for your support! ☕
      </p>
    </div>
  );
};

export default Donate;
