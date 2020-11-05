import React from "react";
import "./Errors.css";

function Errors({ error }) {
  return (
    <>
      <p style={{ fontSize: "12px", color: "red" }}>{error}</p>
    </>
  );
}

export default Errors;
