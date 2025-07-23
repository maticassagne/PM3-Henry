import React from "react";
import styles from "../home/Home.module.css";
import consultaVet from "../../assets/consultaVet.png";
import controlVet from "../../assets/controlVet.jpg";
import rayoxVet from "../../assets/rayosxVet.jpeg";

const Home = () => {
  const services = [
    {
      title: "Consulta Veterinaria",
      image: consultaVet,
      description:
        "Exámenes completos, diagnóstico personalizado y seguimiento continuo para garantizar el bienestar de tu mascota. Nuestros veterinarios especializados escuchan todas tus inquietudes.",
      cta: "Reservar consulta",
      color: "#72577c",
    },
    {
      title: "Control Preventivo",
      image: controlVet,
      description:
        "Chequeos regulares para detectar problemas a tiempo. Incluye análisis de sangre, orina, control de peso y evaluación dermatológica. La prevención es clave para una vida larga y saludable.",
      cta: "Agendar control",
      color: "#8e8ca3",
    },
    {
      title: "Estudios Especializados",
      image: rayoxVet,
      description: "Tecnología de última generación para diagnósticos precisos: ecografías, radiografías digitales, ecodoppler cardíaco y más. Resultados rápidos y confiables.",
      cta: "Ver estudios",
      color: "#562155",
    },
  ];

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.mainTitle}>
        Servicios en <span className={styles.highlight}>Sauce Veterinaria</span>
      </h1>
      <p className={styles.subtitle}>Cuidamos a tu compañero con tecnología, experiencia y mucho amor</p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard} style={{ borderTop: `5px solid ${service.color}` }}>
            <div className={styles.imageContainer}>
              <img src={service.image} alt={service.title} className={styles.serviceImage} />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <button className={styles.ctaButton} style={{ backgroundColor: service.color }}>
                {service.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.extraSection}>
        <h2>¿Por qué elegirnos?</h2>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🐾</span>
            <p>27 años de experiencia en La Plata</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>💉</span>
            <p>Equipamiento de última generación</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>❤️</span>
            <p>Atención personalizada 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
