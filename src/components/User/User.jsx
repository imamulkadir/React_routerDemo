import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const userStyle = {
    border: "1px solid #ffffff",
    color: "#fff",
    borderRadius: "12px",
    padding: "5px",
    backgroundColor: "#6b6767",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={userStyle}>
      <h2 style={{ margin: "0 0 8px", fontSize: "1.25rem" }}>{name}</h2>
      <p style={{ margin: "4px 0" }}>{email}</p>
      <p style={{ margin: "4px 0" }}>{phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
