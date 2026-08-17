import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const splitTags = (tags) =>
  (tags || '')
    .split(/[,/]/)
    .map((tag) => tag.trim())
    .filter(Boolean);

const Experience = () => {
  const { experience } = useContext(PortfolioContext);

  return (
    <section id="experience">
      <Container>
        <Title title="Expérience" />
        <p className="experience-intro">
          CDI chez HashCode, puis développement d’algorithmes de marché chez SZGGroup.
        </p>
        <ol className="experience-list">
          {experience &&
            experience.map((item) => {
              const { id, period, company, role, info, tags } = item;
              const tagList = splitTags(tags);

              return (
                <li key={id} className="experience-item">
                  <Fade bottom duration={800} delay={150} distance="20px">
                    <div className="experience-item__inner">
                      <p className="experience-item__period">{period}</p>
                      <div className="experience-item__body">
                        <h3 className="experience-item__company">{company}</h3>
                        <p className="experience-item__role">{role}</p>
                        <p className="experience-item__info">{info}</p>
                        {tagList.length > 0 && (
                          <ul className="experience-item__tags">
                            {tagList.map((tag) => (
                              <li key={tag} className="skill-pill">
                                {tag}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Fade>
                </li>
              );
            })}
        </ol>
      </Container>
    </section>
  );
};

export default Experience;
