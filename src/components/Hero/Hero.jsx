import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero, footer } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={400} distance="30px">
          <div>
            <p className="hero-kicker">{title || 'Bonjour, je suis'}</p>
            <h1 className="hero-title">{name}</h1>
            <p className="hero-subtitle">{subtitle}</p>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
          <div>
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="experience" smooth duration={800} offset={-70}>
                  {cta || 'Voir le parcours'}
                </Link>
              </span>
              <span className="cta-btn cta-btn--ghost">
                <Link to="contact" smooth duration={800} offset={-70}>
                  Me contacter
                </Link>
              </span>
            </p>
            {networks && networks.length > 0 && (
              <ul className="hero-social">
                {networks.map((network) => {
                  const { id, name: networkName, url } = network;
                  return (
                    <li key={id}>
                      <a
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={networkName}
                      >
                        <i className={`fa fa-${networkName || 'refresh'}`} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
