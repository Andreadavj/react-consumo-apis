import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios.");
      console.log("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      console.log("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Esto me lo encontré en una documentación de StackOverflow sirve para validar que la contraseña tenga al menos una letra, un número y un carácter especial
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      alert("Error: La contraseña debe contener al menos una letra, un número y un carácter especial.");
      console.log("Error: La contraseña debe contener al menos una letra, un número y un carácter especial.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      console.log("Las contraseñas no coinciden.");
      return;
    }

    alert("Registro exitoso!");
    console.log("Registro exitoso!");

    
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };



  return (
    <div className="register-form">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>

    </div>
  );
};

export default Register;
