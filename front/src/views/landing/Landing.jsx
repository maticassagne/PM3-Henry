import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../landing/Landing.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import atencionVeterinaria from "../../assets/atencionVeterinaria.jpg";
import localVeterinaria from "../../assets/localVeterinaria.jpg";
import tecnoVeterinaria from "../../assets/tecnoVeterinaria.jpg";
import alimentosMedicados from "../../assets/alimentosMedicados.png";
import { getUserIdFromLocalStorage } from "../../helpers/localUserData";

const LandingPage = () => {
  const navigate = useNavigate();

  const login = getUserIdFromLocalStorage();

  const handleLogout = () => {
    const confirmed = window.confirm("¿Desea cerrar sesión?");
    if (confirmed) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

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
          {login ? (
            <>
              <h2 className={styles.authTitle}>¡Bienvenido de nuevo!</h2>
              <p className={styles.authText}>Estás autenticado en Sauce Veterinaria.</p>
              <div className={styles.authButtons}>
                <button className={`${styles.button} ${styles.primary}`} onClick={() => navigate("/home")}>
                  Ir al Home!
                </button>
                <button className={`${styles.button} ${styles.logout}`} onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className={styles.authTitle}>¡Bienvenido! ¿Ya tienes una cuenta?</h2>
              <p className={styles.authText}>Regístrate para reservar turnos online y acceder a descuentos exclusivos.</p>
              <div className={styles.authButtons}>
                <button className={`${styles.button} ${styles.primary}`} onClick={() => navigate("/register")}>
                  Registrarse
                </button>
                <button className={`${styles.button} ${styles.secondary}`} onClick={() => navigate("/login")}>
                  Iniciar sesión
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
