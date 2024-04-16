import { Navbar } from "../components/Navbar";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <div className="about-content">
          <h1>Driving Innovations And Empowering Business</h1>
          <p>
            Metalogic envisions a future where technology serves as a catalyst
            for limitless human potential, fostering innovation and empowering
            organizations to thrive in a transformative digital era.
          </p>
        </div>
      </section>
      <div className="about-factors">
        <div className="a_factors">
          <div className="f_number">32+</div>
          <div className="f_title">Project Completed</div>
        </div>
        <div className="a_factors">
          <div className="f_number">50+</div>
          <div className="f_title">Satisfied Clients</div>
        </div>
        <div className="a_factors">
          <div className="f_number">18+</div>
          <div className="f_title">Experts</div>
        </div>
      </div>
    </>
  );
};
