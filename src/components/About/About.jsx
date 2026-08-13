import aboutPhoto from "../../images/about-photo.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img className="about__image" src={aboutPhoto} alt="Foto del autor" />
      <div className="about__content">
        <h2 className="about__title">Sobre el autor</h2>
        <p className="about__text">
          Hola, soy José Carlos, desarrollador web en formación. Trabajo con
          React, Node.js, Express y MongoDB para construir aplicaciones
          full-stack completas, desde la interfaz hasta la base de datos.
        </p>
        <p className="about__text">
          News Explorer es mi proyecto final del programa de Desarrollo Web
          en TripleTen, donde aprendí a construir aplicaciones reales de
          principio a fin: maquetado fiel a diseño, consumo de APIs,
          autenticación de usuarios y despliegue en producción.
        </p>
      </div>
    </section>
  );
}

export default About;