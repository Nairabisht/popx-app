import React, { useState } from "react";
import Welcome from "./components/welcome";
import Login from "./components/login";
import Signup from "./components/Signup";
import Account from "./components/account";
import "./App.css";

function App() {
  const [step, setStep] = useState("welcome"); 
  const [user, setUser] = useState(null); 


  const handleSignup = (userData) => {
    setUser(userData);
    setStep("account");
  };


  const handleLogin = (email, password) => {
    if (user && user.email === email && user.password === password) {
      setStep("account");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="app">
      {step === "welcome" && <Welcome setStep={setStep} />}
      {step === "login" && <Login setStep={setStep} onLogin={handleLogin} />}
      {step === "signup" && <Signup setStep={setStep} onSignup={handleSignup} />}
      {step === "account" && <Account user={user} setStep={setStep} />}
    </div>
  );
}

export default App;
