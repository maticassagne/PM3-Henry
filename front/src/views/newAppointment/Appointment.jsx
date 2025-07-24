import React, { useEffect, useState } from "react";
import { validateAppointment } from "../../helpers/validateAppointment";
import { useNavigate } from "react-router-dom";
import styles from "../newAppointment/Appointment.module.css";
import axios from "axios";
import { getUserIdFromLocalStorage } from "../../helpers/localUserData";
const NEWAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

const Appointment = () => {
  const userId = getUserIdFromLocalStorage();
  const navigate = useNavigate();
  const services = ["Consulta", "Control", "Estudios"];

  useEffect(() => {
    if (!userId) {
      alert("Por favor inicia sesión para acceder a esta función");
      navigate("/login");
    }
  }, [userId, navigate]);

  const [form, setForm] = useState({
    date: "",
    time: "",
    status: "Active",
    service: "Consulta",
    userId,
  });

  const [errors, setErrors] = useState({});

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour <= 19; hour++) {
      options.push(`${hour.toString().padStart(2, "0")}:00`);
      if (hour < 19) {
        options.push(`${hour.toString().padStart(2, "0")}:30`);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors(validateAppointment({ ...form, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateAppointment(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post(NEWAPPOINTMENT_URL, form)
        .then((data) => {
          alert("Turno agendado!");
          setForm({
            date: "",
            time: "",
            status: "Active",
            service: "Consulta",
          });
          navigate("/myappointments");
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.error);
        });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Agendar Nuevo Turno</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={`${styles.formGroup} ${errors.date ? styles.error : ""}`}>
          <label htmlFor="date">Fecha:</label>
          <input type="date" id="date" name="date" value={form.date} onChange={handleChange} className={errors.date ? styles.errorInput : ""} />
          {errors.date && <span className={styles.errorMessage}>{errors.date}</span>}
        </div>

        <div className={`${styles.formGroup} ${errors.time ? styles.error : ""}`}>
          <label htmlFor="time">Hora:</label>
          <select id="time" name="time" value={form.time} onChange={handleChange} className={errors.time ? styles.errorInput : ""}>
            <option value="">Seleccione una hora</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <span className={styles.errorMessage}>{errors.time}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service">Servicio:</label>
          <select id="service" name="service" value={form.service} onChange={handleChange}>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.submitButton} disabled={Object.keys(errors).length > 0 || !form.date || !form.time}>
          Confirmar Turno
        </button>
      </form>
    </div>
  );
};

export default Appointment;
