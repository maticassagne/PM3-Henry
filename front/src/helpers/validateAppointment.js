export const validateAppointment = (form) => {
  const errors = {};

  if (!form.date) {
    errors.date = "La fecha es requerida";
  } else {
    const [year, month, day] = form.date.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      errors.date = "No se agenda turnos los fines de semana (sábados y domingos)";
    } else if (selectedDate < today) {
      errors.date = "La fecha no puede ser anterior al día actual";
    }
  }

  if (!form.time) {
    errors.time = "La hora es requerida";
  } else {
    const [hours, minutes] = form.time.split(":").map(Number);

    const isValidTime = hours >= 9 && hours <= 19 && (minutes === 0 || minutes === 30) && !(hours === 19 && minutes === 30);

    if (!isValidTime) {
      errors.time = "Horario inválido. Debe ser entre 09:00 y 19:00 en intervalos de 30 minutos";
    }
  }

  return errors;
};
