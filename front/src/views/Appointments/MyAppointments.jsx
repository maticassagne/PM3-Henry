import { useEffect, useState } from "react";
import axios from "axios";
import myAppointments from "../../helpers/myAppointments";
import styles from "./MyAppointments.module.css";
import AppointmentCard from "../../components/appointments/AppointmentsCards";

const GETAPPOINTMENT_URL = "http://localhost:3000/appointments";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(GETAPPOINTMENT_URL)
      .then((response) => response.data)
      .then((appointmentFromDB) => setAppointments(appointmentFromDB))
      .catch((error) => {
        alert(`¡Error al hacer el request! ${error.message}`);
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.conteiner}>
      <h1>Todos mis turnos</h1>
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} id={appointment.id} date={appointment.date} time={appointment.time} status={appointment.status} service={appointment.service} />
      ))}
    </div>
  );
};

export default MyAppointments;
