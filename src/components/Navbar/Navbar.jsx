import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Navbar = () => {
  const { hero } = useContext(PortfolioContext);
  const { name } = hero;
  const brand = name ? name.split(' ')[0] : 'AZ';

  return (
    <nav className="site-nav">
      <Container>
        <div className="site-nav__inner">
          <Link to="hero" smooth duration={600} className="site-nav__brand">
            {brand}
            <span>.</span>
          </Link>
          <ul className="site-nav__links">
            <li>
              <Link to="about" smooth duration={600} offset={-70}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="projects" smooth duration={600} offset={-70}>
                Projets
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={600} offset={-70}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
