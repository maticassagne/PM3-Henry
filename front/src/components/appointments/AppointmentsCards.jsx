import styles from "../appointments/AppointmentsCards.module.css";

const AppointmentCard = ({ id, date, time, status, service }) => {
  //Establecer formato fecha
  const parseDate = new Date(date);
  const formattedDate = `${parseDate.getDay()}/${parseDate.getMonth() + 1}/${parseDate.getFullYear()}`;

  const handleClick = () => {
    alert(`¿Quiere cancelar el turno del dia ${formattedDate} a las ${time} ?`);
  };

  return (
    <div className={styles.conteiner}>
      <span>{formattedDate}</span>
      <span>{time}</span>
      <span>{service}</span>
      {status === "Active" ? (
        <span className={styles.active} title="Cancelar turno" onClick={handleClick}>
          {status}
        </span>
      ) : (
        <span className={styles.canceled}>{status}</span>
      )}
    </div>
  );
};

export default AppointmentCard;
