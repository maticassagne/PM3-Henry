import { useState } from "react";
import axios from "axios";
import styles from "../login/Login.module.css";
const LOGIN_URL = "http://localhost:3000/users/login";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const validateUser = ({ username, password }) => {
    const errors = {};
    if (!username) errors.username = "Debe ingresar un nombre de usuario.";
    if (!password) errors.password = "Debe ingresar una contraseña.";
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateUser({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(LOGIN_URL, user)
      .then(({ data }) => {
        console.log(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert(data.message);
        setUser(initialState);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        alert(`Acceso denegado: ${error.response.data.error}`);
      });
  };

  const formData = [
    { label: "Nombre de usuario:", name: "username", type: "text" },
    { label: "Contraseña:", name: "password", type: "password" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <hr className={styles.hr} />
      <form onSubmit={handleSubmit}>
        {formData.map(({ label, name, type }) => (
          <div className={styles.formGroup} key={name}>
            <label className={styles.label} htmlFor={name}>
              {label}
            </label>
            <input className={styles.input} type={type} name={name} id={name} value={user[name]} placeholder={`Ingrese ${label}`} onChange={handleChange} />
            {errors[name] && <span className={styles.error}>{errors[name]}</span>}
          </div>
        ))}
        <button className={styles.button} type="submit" disabled={Object.keys(errors).length !== 0}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
