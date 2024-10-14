import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Esto previene la recarga del navegador, y es muy util para formularios, lo vimos en clases

    // Validaciones
    if (!email || !password) {
      alert("Error: Todos los campos son obligatorios.");
      console.log("Error: Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 5) {
      alert("Error: Password must be at least 5 characters!");
      console.log("Error: Password must be at least 5 characters!");
      return;
    }

    alert("Authentication successfully!");
    console.log("Authentication successfully!");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-form">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
