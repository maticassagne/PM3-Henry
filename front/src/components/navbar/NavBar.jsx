import { Link, useLocation } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import styles from "../navbar/NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link to="/home" className={styles.logoContainer}>
        <img src={logo} alt="Logo Sauce Veterinaria" className={styles.logo} />
        <span className={styles.logoText}>Sauce Veterinaria</span>
      </Link>

      {/* Menú para desktop */}
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <Link to="/home" className={`${styles.link} ${location.pathname === "/home" ? styles.activeLink : ""}`}>
          Inicio
        </Link>
        <Link to="/myappointments" className={`${styles.link} ${location.pathname === "/myappointments" ? styles.activeLink : ""}`}>
          Mis Turnos
        </Link>
        <Link to="/about" className={`${styles.link} ${location.pathname === "/about" ? styles.activeLink : ""}`}>
          Nosotros
        </Link>

        {/* Botón de acción destacado */}
        <Link to="/appointment" className={styles.ctaButton}>
          Reservar Turno
        </Link>

        {/* Avatar/Usuario */}
        <div className={styles.avatarContainer}>
          <FaUser className={styles.avatarIcon} />
        </div>
      </div>

      {/* Menú hamburguesa para móvil */}
      <div className={styles.mobileMenuButton} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NavBar;
