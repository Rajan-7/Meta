import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <section className="nav-section">
      <div className="nav-container">
        <div className="logo">
          <img src="/image/meta.png" alt="Brand Logo" height="48" width="48" />
          <h2>MetaLogic</h2>
        </div>
        <div className="nav-link">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/career">Career</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="contact-link">
            <NavLink to="/contactus">
                Get In Touch
            </NavLink>
        </div>
      </div>
    </section>
  );
};
