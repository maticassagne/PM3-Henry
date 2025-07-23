import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../landing/Landing.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import atencionVeterinaria from "../../assets/atencionVeterinaria.jpg";
import localVeterinaria from "../../assets/localVeterinaria.jpg";
import tecnoVeterinaria from "../../assets/tecnoVeterinaria.jpg";
import alimentosMedicados from "../../assets/alimentosMedicados.png";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.landing}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Bienvenidos a <span className={styles.highlight}>Sauce Veterinaria</span>
        </h1>
        <p className={styles.heroSubtitle}>27 años cuidando a tus mascotas en La Plata con amor y tecnología</p>
      </section>

      <section className={styles.carouselSection}>
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} interval={5000} className={styles.carousel}>
          <div className={styles.slide}>
            <img src={atencionVeterinaria} alt="Equipo de Sauce" />
            <div className={styles.slideText}>
              <h3>Profesionales con Experiencia</h3>
              <p>Nuestro equipo de veterinarios especializados garantiza la mejor atención para tu mascota.</p>
            </div>
          </div>

          <div className={styles.slide}>
            <img src={localVeterinaria} alt="Local de Sauce" />
            <div className={styles.slideText}>
              <h3>Un Espacio Diseñado para Ellos</h3>
              <p>Instalaciones modernas y adaptadas para su comodidad y seguridad.</p>
            </div>
          </div>

          <div className={styles.slide}>
            <img src={tecnoVeterinaria} alt="Equipos tecnológicos" />
            <div className={styles.slideText}>
              <h3>Tecnología de Vanguardia</h3>
              <p>Ecógrafos, rayos X digitales y laboratorio propio para diagnósticos precisos.</p>
            </div>
          </div>

          <div className={styles.slide}>
            <img src={alimentosMedicados} alt="Productos veterinarios" />
            <div className={styles.slideText}>
              <h3>Farmacia Veterinaria</h3>
              <p>Alimentos medicados, medicinas y accesorios de calidad avalados por nuestro equipo.</p>
            </div>
          </div>
        </Carousel>
      </section>

      <section className={styles.authSection}>
        <div className={styles.authCard}>
          <h2 className={styles.authTitle}>{isLoggedIn ? "¡Bienvenido de vuelta!" : "¿Ya tienes una cuenta?"}</h2>
          <p className={styles.authText}>{isLoggedIn ? "Gestiona los turnos de tu mascota desde tu perfil." : "Regístrate para reservar turnos online y acceder a descuentos exclusivos."}</p>
          <div className={styles.authButtons}>
            {isLoggedIn ? (
              <button
                className={`${styles.button} ${styles.primary}`}
                onClick={() => navigate("/profile")} // Ruta futura para perfil
              >
                Ir a mi perfil
              </button>
            ) : (
              <>
                <button
                  className={`${styles.button} ${styles.primary}`}
                  onClick={() => navigate("/register")} // Navega a registro
                >
                  Registrarse
                </button>
                <button
                  className={`${styles.button} ${styles.secondary}`}
                  onClick={() => navigate("/login")} // Navega a login
                >
                  Iniciar sesión
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
