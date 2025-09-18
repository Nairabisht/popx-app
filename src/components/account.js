import React from "react";

function Account({ user }) {
  return (
    <div className="container">
      <h2>Account Settings</h2>
      <div className="account-info">
        <img src="/img/21149b79-c401-46a8-9a3c-2d19ac99d222.png" alt="profile" />
        <div>
          <p><strong>{user?.name || "User"}</strong></p>
          <p className="email">{user?.email}</p>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default Account;
