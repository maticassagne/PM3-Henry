import React from "react";
import styles from "../aboutUs/AboutUs.module.css";
import equipoImg from "../../assets/equipoProfesionales.jpeg";
import tecnologiaVeterinaria from "../../assets/tecnologiaVeterinaria.jpg";
import chatGPTTestify from "../../assets/chatGPTTestify.png";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          En <span className={styles.highlight}>Sauce</span>, cuidamos de tu mascota como si fuera la nuestra desde 1997.
        </h1>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.paragraph}>
              En el corazón de <strong>La Plata</strong>, nuestra clínica veterinaria <strong>Sauce</strong> ha sido un refugio de salud y confianza por más de <strong>27 años</strong>. Generaciones
              de mascotas y sus familias nos han elegido por nuestro <strong>compromiso inquebrantable</strong>, expertise médico y tecnología de vanguardia.
            </p>

            <div className={styles.imageGrid}>
              <img src={equipoImg} alt="Equipo de Sauce Veterinaria" className={styles.image} />
              <img src={tecnologiaVeterinaria} alt="Tecnología de última generación" className={styles.image} />
            </div>

            <p className={styles.paragraph}>
              Nuestro <strong>equipo de profesionales altamente capacitados</strong> —con especializaciones en cardiología, traumatología y medicina preventiva— combina{" "}
              <strong>experiencia y pasión</strong> en cada consulta. Además, contamos con <strong>equipos diagnósticos de última generación</strong> (ecógrafos, rayos X digitales y laboratorio
              propio) para resultados rápidos y precisos.
            </p>
          </div>

          <div className={styles.sidebar}>
            <img src={chatGPTTestify} alt="Clínica Sauce" className={styles.sidebarImage} />
            <div className={styles.testimonial}>
              <blockquote>
                "El Dr. Martínez salvó a mi perro Luna con una cirugía de emergencia. ¡Su dedicación es increíble!"
                <footer>— Matias C., cliente desde 2015</footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className={styles.values}>
          <h2 className={styles.subtitle}>Nuestros Pilares</h2>
          <ul className={styles.valuesList}>
            <li>
              ✓ Atención <strong>24/7</strong> para emergencias
            </li>
            <li>
              ✓ Medicina <strong>preventiva</strong> con planes anuales
            </li>
            <li>
              ✓ <strong>Transparencia</strong>: explicamos cada paso del tratamiento
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
