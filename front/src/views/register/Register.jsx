import { useState } from "react";
import validateUser from "../../helpers/validateUser";
import axios from "axios";
import styles from "../register/Register.module.css";
const REGISTER_URL = "http://localhost:3000/users/register";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateUser({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: Number(user.nDni),
      username: user.username,
      password: user.password,
    };
    axios
      .post(REGISTER_URL, userData)
      .then((data) => {
        alert(data.data.message);
        setUser(initialState);
      })
      .catch((error) => {
        alert(`Error al crear usuario: ${error.response.data.error}`);
      });
  };

  const formData = [
    { label: "Nombre:", name: "name", type: "text" },
    { label: "Email:", name: "email", type: "text" },
    { label: "Fecha de nacimiento:", name: "birthdate", type: "date" },
    { label: "N° DNI:", name: "nDni", type: "text" },
    { label: "Nombre de usuario:", name: "username", type: "text" },
    { label: "Contraseña:", name: "password", type: "password" },
    { label: "Confirmar contraseña:", name: "confirmPassword", type: "password" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registro</h1>
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
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
