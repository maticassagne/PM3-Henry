import styles from "./AppointmentsCards.module.css";

const AppointmentCard = ({ id, date, time, status, service, handleCancelAppointment }) => {
  const parseDate = new Date(date);
  const formattedDate = `${parseDate.getDate()}/${parseDate.getMonth() + 1}/${parseDate.getFullYear()}`;

  const handleClick = () => {
    if (status === "Active") {
      if (window.confirm(`¿Cancelar turno del ${formattedDate} a las ${time}?`)) {
        handleCancelAppointment(id);
      }
    }
  };

  return (
    <div className={`${styles.card} ${status === "Active" ? styles.activeCard : styles.canceledCard}`} onClick={handleClick}>
      <div className={styles.dateTime}>
        <span className={styles.day}>{formattedDate}</span>
        <span className={styles.time}>{time}</span>
      </div>

      <div className={styles.service}>
        <h3>{service}</h3>
      </div>

      <div className={`${styles.status} ${status === "Active" ? styles.activeStatus : styles.canceledStatus}`}>
        {status === "Active" ? (
          <>
            <span>✔ Activo</span>
            <small>(Click para cancelar)</small>
          </>
        ) : (
          <span>✖ Cancelado</span>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
