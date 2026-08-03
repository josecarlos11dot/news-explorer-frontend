import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image"></div>
      <div className="about__content">
        <h2 className="about__title">Sobre el autor</h2>
        <p className="about__text">
          Soy desarrollador web en formación, actualmente cursando el
          programa de Desarrollo Web en TripleTen. Este proyecto, News
          Explorer, es mi proyecto final del bootcamp.
        </p>
      </div>
    </section>
  );
}

export default About;