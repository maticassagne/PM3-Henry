const validateUser = ({ name, email, birthdate, nDni, username, password, confirmPassword }) => {
  const errors = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (!username) errors.username = "Ingrese un nombre.";
  else {
    if (username.length < 4) errors.username = "El nombre de usuario debe tener al menos 4 caracteres.";
    if (username.length > 100) errors.username = "El nombre de usuario no puede exceder los 100 caracteres";
    if (!/^[a-zA-Z0-9]+$/.test(username)) errors.username = "El nombre de usuario solo puede contener letras y numeros.";
  }

  if (!password) {
    errors.password = "La contraseña es requerida.";
  } else {
    if (password.length < 8 || password.length > 100) {
      errors.password = "La contraseña debe tener entre 8 y 100 caracteres.";
    }
    if (!/[A-Z]/.test(password)) {
      errors.password = errors.password || "La contraseña debe contener al menos una letra mayúscula.";
    }
    if (!/[a-z]/.test(password)) {
      errors.password = errors.password || "La contraseña debe contener al menos una letra minúscula.";
    }
    if (!/[0-9]/.test(password)) {
      errors.password = errors.password || "La contraseña debe contener al menos un número.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password = errors.password || "La contraseña debe contener al menos un carácter especial (!@#$%^&*(),.?:{}|<></>).";
    }
    if (password === username) {
      errors.password = errors.password || "La contraseña no puede ser igual al nombre de usuario.";
    }
    if (username && password.includes(username)) {
      errors.password = errors.password || "La contraseña no puede contener el nombre de usuario.";
    }

    if (password !== confirmPassword) errors.confirmPassword = "La contraseña y confirmacion no son iguales.";
  }

  if (!name) {
    errors.name = "El nombre es requerido.";
  } else if (name.length < 3 || name.length > 100) {
    errors.name = "El nombre debe tener entre 3 y 100 caracteres.";
  }

  if (!email) {
    errors.email = "El email es requerido.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "El formato del email no es válido.";
  }

  if (!nDni) {
    errors.nDni = "El número de DNI es requerido.";
  } else {
    const dniStr = nDni.toString();
    if (!/^\d+$/.test(dniStr)) {
      errors.nDni = "El DNI debe ser un número entero positivo.";
    } else if (dniStr.length < 7 || dniStr.length > 8) {
      errors.nDni = "El DNI debe tener entre 7 y 8 dígitos.";
    }
  }

  if (!birthdate) {
    errors.birthdate = "La fecha de nacimiento es requerida.";
  } else {
    // Verificar formato básico YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
      errors.birthdate = "El formato de fecha debe ser YYYY-MM-DD.";
    } else {
      const parts = birthdate.split("-");
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const day = parseInt(parts[2], 10);

      // Crear fecha y verificar si es válida
      const birthDate = new Date(year, month - 1, day);

      // Verificar si los componentes coinciden (para detectar fechas como 2023-02-30)
      const isValidDate = birthDate.getFullYear() === year && birthDate.getMonth() === month - 1 && birthDate.getDate() === day;

      if (!isValidDate) {
        errors.birthdate = "La fecha de nacimiento no es válida.";
      } else {
        // Verificar edad mínima (18 años)
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        if (age < 18) {
          errors.birthdate = "Debes ser mayor de 18 años para registrarte.";
        }

        // Verificar edad máxima (120 años)
        if (age > 120) {
          errors.birthdate = "La fecha de nacimiento no puede ser mayor a 120 años atrás.";
        }
      }
    }
  }

  return errors;
};

export default validateUser;
