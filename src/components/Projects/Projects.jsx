import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const splitTags = (info2) =>
  (info2 || '')
    .split(/[,/]/)
    .map((tag) => tag.trim())
    .filter(Boolean);

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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

  const featured = projects.filter((project) => project.featured);
  const other = projects.filter((project) => !project.featured);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projets" />
          {featured.map((project) => {
            const { title, info, info2, repo, img, id } = project;
            const tags = splitTags(info2);

            return (
              <Fade
                key={id}
                left={isDesktop}
                bottom={isMobile}
                duration={800}
                delay={200}
                distance="30px"
              >
                <article className="project-featured">
                  <div className="project-featured__text">
                    <h3 className="project-featured__title">{title}</h3>
                    <p className="project-featured__info">{info}</p>
                    {tags.length > 0 && (
                      <ul className="project-featured__tags">
                        {tags.map((tag) => (
                          <li key={tag} className="skill-pill">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    {repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--ghost"
                        href={repo}
                      >
                        Code source
                      </a>
                    )}
                  </div>
                  <div className="project-featured__image">
                    <ProjectImg alt={title} filename={img} />
                  </div>
                </article>
              </Fade>
            );
          })}

          {other.length > 0 && (
            <div className="projects-grid">
              {other.map((project) => {
                const { title, info, info2, repo, img, id } = project;
                const tags = splitTags(info2);

                return (
                  <Fade key={id} bottom duration={800} delay={150} distance="20px">
                    <article className="project-card">
                      <div className="project-card__image">
                        <ProjectImg alt={title} filename={img} />
                      </div>
                      <div className="project-card__body">
                        <h3 className="project-card__title">{title}</h3>
                        <p className="project-card__info">{info}</p>
                        {tags.length > 0 && (
                          <ul className="project-card__tags">
                            {tags.map((tag) => (
                              <li key={tag} className="skill-pill">
                                {tag}
                              </li>
                            ))}
                          </ul>
                        )}
                        {repo && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--ghost"
                            href={repo}
                          >
                            Code source
                          </a>
                        )}
                      </div>
                    </article>
                  </Fade>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
