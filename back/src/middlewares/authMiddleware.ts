import { Request, Response, NextFunction } from "express";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, name, email, birthdate, nDni } = req.body;

  if (!username) {
    return res.status(400).json({
      success: false,
      message: "El nombre de usuario es requerido",
    });
  }

  if (username.length > 100) {
    return res.status(400).json({
      success: false,
      message: "El nombre de usuario no puede exceder los 100 caracteres",
    });
  }

  const validUsernameRegex = /^[a-zA-Z0-9]+$/;
  if (!validUsernameRegex.test(username)) {
    return res.status(400).json({
      success: false,
      message: "El nombre de usuario solo puede contener letras y números",
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      message: "La contraseña es requerida",
    });
  }

  if (password.length < 8 || password.length > 100) {
    return res.status(400).json({
      success: false,
      message: "La contraseña debe tener entre 8 y 100 caracteres",
    });
  }

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasLowercase || !hasUppercase || !hasNumber || !hasSpecialChar) {
    return res.status(400).json({
      success: false,
      message: "La contraseña debe incluir al menos una minúscula, una mayúscula, un número y un carácter especial",
    });
  }

  if (username && password === username) {
    return res.status(400).json({
      success: false,
      message: "La contraseña no puede ser igual al nombre de usuario",
    });
  }

  if (username && password.includes(username)) {
    return res.status(400).json({
      success: false,
      message: "La contraseña no puede contener el nombre de usuario",
    });
  }

  if (!name || typeof name !== "string" || name.trim().length < 3 || name.length > 100) {
    return res.status(400).json({
      success: false,
      message: "El nombre debe ser un string entre 3 y 100 caracteres",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Formato de email inválido",
    });
  }

  if (!nDni || !Number.isInteger(Number(nDni)) || nDni.toString().length < 7 || nDni.toString().length > 8) {
    return res.status(400).json({
      success: false,
      message: "El DNI debe ser un número entero de 7 u 8 dígitos",
    });
  }

  if (!birthdate || typeof birthdate !== "string") {
    return res.status(400).json({
      success: false,
      message: "La fecha de nacimiento es requerida y debe ser un string",
    });
  }

  // Validar formato con regex (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(birthdate)) {
    return res.status(400).json({
      success: false,
      message: 'Formato de fecha inválido. Use "YYYY-MM-DD"',
    });
  }

  // Convertir a Date y validar
  const [year, month, day] = birthdate.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day); // month es 0-indexed en JS

  // Verificar si la fecha es válida (ej: evita "2023-02-30")
  if (isNaN(birthDate.getTime())) {
    return res.status(400).json({
      success: false,
      message: "Fecha de nacimiento inválida",
    });
  }

  // Calcular edad
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18) {
    return res.status(400).json({
      success: false,
      message: "Debes tener al menos 18 años para registrarte",
    });
  }

  next();
};
