import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.avif";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.logoSection}>
        <img src={logo} alt="logo_img" />
      </div>
      <div className={styles.linksSection}>
        <span>Home</span>
        <span>Mis Turnos</span>
        <span>Mi Mascota</span>
        <span>Nosotros</span>
      </div>
      <div className={styles.avatarSection}>
        <img src={avatar} alt="avatar_img" />
      </div>
    </div>
  );
};

export default NavBar;
