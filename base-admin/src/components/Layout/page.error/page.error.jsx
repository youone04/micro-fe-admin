import React from "react";

const ErrorPage = ({ message }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Terjadi Kesalahan</h1>
      <p>{message}</p>
      <button onClick={() => window.location.reload()}>Coba Lagi</button>
    </div>
  );
};

export default ErrorPage;
