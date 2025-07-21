import imag1 from "../../assets/img1.jpg";
import styles from "./HomeCards.module.css";

const HomeCard = () => {
  return (
    <div className={styles.conteiner}>
      <div>
        <img src={imag1} alt="Imagen" />
      </div>
      <div className={styles.text}>
        <h3>Cuidamos a tu mejor amigo como se merece.</h3>
        <p>Nuestro equipo de profesionales brinda atención veterinaria de calidad, con el compromiso y cariño que cada mascota necesita. ¡Tu compañero está en buenas manos!</p>
      </div>
    </div>
  );
};

export default HomeCard;
