import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MyAppointments.module.css";
import AppointmentCard from "../../components/appointments/AppointmentsCards";
import { getUserIdFromLocalStorage } from "../../helpers/localUserData";
import { useNavigate } from "react-router-dom";

const GETAPPOINTMENT_URL = "http://localhost:3000/appointments";
const GETUSERBYID_URL = "http://localhost:3000/users/";
const CANCELAPPOINTMENT_URL = "http://localhost:3000/appointments/cancel/";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'active', 'canceled'
  const userId = getUserIdFromLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      alert("Inicia sesión para acceder a esta función");
      navigate("/login");
    }
  }, [userId, navigate]);

  useEffect(() => {
    if (userId) {
      axios
        .get(GETUSERBYID_URL + userId)
        .then((response) => response.data)
        .then((userFromDB) => {
          setAppointments(userFromDB.appointments || []);
          setFilteredAppointments(userFromDB.appointments || []);
        })
        .catch((error) => {
          alert(`¡Error al hacer el request! ${error.message}`);
          console.log(error);
        });
    }
  }, [userId]);

  useEffect(() => {
    // Aplicar filtro cuando cambia el estado o los appointments
    filterAppointments();
  }, [activeFilter, appointments]);

  const filterAppointments = () => {
    switch (activeFilter) {
      case "Active":
        setFilteredAppointments(appointments.filter((app) => app.status === "Active"));
        break;
      case "Canceled":
        setFilteredAppointments(appointments.filter((app) => app.status === "Canceled"));
        break;
      default:
        setFilteredAppointments([...appointments]);
    }
  };

  const handleCancelAppointment = (appointmentId) => {
    axios
      .put(CANCELAPPOINTMENT_URL + appointmentId)
      .then(() => {
        return axios.get(GETUSERBYID_URL + userId);
      })
      .then((response) => {
        const updatedAppointments = response.data.appointments || [];
        setAppointments(updatedAppointments);
        alert("Turno cancelado exitosamente");
      })
      .catch((error) => {
        alert(`¡Error al cancelar el turno! ${error.message}`);
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        Mis Turnos en <span className={styles.highlight}>Sauce</span>
      </h1>

      <div className={styles.statusFilters}>
        <button className={`${styles.filterButton} ${styles.all} ${activeFilter === "all" ? styles.activeFilter : ""}`} onClick={() => setActiveFilter("all")}>
          Todos
        </button>
        <button className={`${styles.filterButton} ${styles.active} ${activeFilter === "Active" ? styles.activeFilter : ""}`} onClick={() => setActiveFilter("Active")}>
          Activos
        </button>
        <button className={`${styles.filterButton} ${styles.canceled} ${activeFilter === "Canceled" ? styles.activeFilter : ""}`} onClick={() => setActiveFilter("Canceled")}>
          Cancelados
        </button>
      </div>

      <div className={styles.appointmentsGrid}>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              id={appointment.id}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
              service={appointment.service}
              handleCancelAppointment={handleCancelAppointment}
            />
          ))
        ) : (
          <p className={styles.noAppointments}>{activeFilter === "all" ? "No tienes turnos reservados!" : activeFilter === "active" ? "No tienes turnos activos" : "No tienes turnos cancelados"}</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
