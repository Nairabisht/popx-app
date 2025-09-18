import React, { useState } from "react";

function Signup({ setStep, onSignup }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "no",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all required fields!");
      return;
    }

    onSignup(form); // Pass data to App.js
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
        />

        <div className="radio-group">
          <p>Are you an Agency?</p>
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === "yes"}
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === "no"}
              onChange={handleChange}
            />{" "}
            No
          </label>
        </div>

        <button type="submit" className="primary">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
