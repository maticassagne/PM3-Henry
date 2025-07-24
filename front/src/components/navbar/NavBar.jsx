import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import styles from "../navbar/NavBar.module.css";
import { useState } from "react";
import { getUserIdFromLocalStorage } from "../../helpers/localUserData";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userId = getUserIdFromLocalStorage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProtectedClick = (event) => {
    if (!userId) {
      event.preventDefault();
      alert("Por favor inicia sesión para acceder a esta función");
      navigate("/");
    }
  };

  const handleLogout = () => {
    const confirmed = window.confirm("¿Desea cerrar sesión?");
    if (confirmed) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo Sauce Veterinaria" className={styles.logo} />
        <span className={styles.logoText}>Sauce Veterinaria</span>
      </Link>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <Link to="/home" className={`${styles.link} ${location.pathname === "/home" ? styles.activeLink : ""}`}>
          Inicio
        </Link>
        <Link
          to="/myappointments"
          className={`${styles.link} ${location.pathname === "/myappointments" ? styles.activeLink : ""} ${!userId ? styles.disabledLink : ""}`}
          onClick={handleProtectedClick}
        >
          Mis Turnos
        </Link>
        <Link to="/about" className={`${styles.link} ${location.pathname === "/about" ? styles.activeLink : ""}`}>
          Nosotros
        </Link>

        <Link to="/appointment" className={`${styles.ctaButton} ${!userId ? styles.disabledButton : ""}`} onClick={handleProtectedClick}>
          Reservar Turno
        </Link>

        {userId ? (
          <button onClick={handleLogout} className={styles.authButton}>
            Logout
          </button>
        ) : (
          <Link to="/login" className={styles.authButton}>
            Login
          </Link>
        )}

        {!userId && (
          <Link to="/register" className={styles.authButton}>
            SignIn
          </Link>
        )}

        <div className={styles.avatarContainer}>
          <FaUser className={styles.avatarIcon} />
        </div>
      </div>

      <div className={styles.mobileMenuButton} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NavBar;
