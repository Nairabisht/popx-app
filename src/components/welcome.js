import React from "react";

function Welcome({ setStep }) {
  return (
    <div className="container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button onClick={() => setStep("signup")} className="primary">
        Create Account
      </button>
      <button onClick={() => setStep("login")} className="secondary">
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;
