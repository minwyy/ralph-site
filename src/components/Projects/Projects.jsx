import React, { useContext, useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import starIcon from '../../images/star.svg';
import forkIcon from '../../images/fork.svg';
import projectStyle from './Projects.module.css'

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

  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 6, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Portfolio" />
        </div>
      </Container>
      {projects.map((project,index) => {
            const { title, info, info2, url, repo, img } = project;
            let seeLive = null;
            if (url) {
              seeLive = 
              (<a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href={url || '#!'}
            >
              See Live
            </a>
            )}
            return (
              <Row key={index} style={{marginTop: 20}}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <p>
                          {info}
                        </p>
                        <p className="mb-4" style={{color: '#707070'}}>{info2 || ''}</p>
                      </div>
                      {seeLive}
                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || null}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
      <div style={{margin: 120}} />
      <Container>
        <div className="project-wrapper">
          <Title title="GitHub repos" />
          <div className={projectStyle.Grid}>
            {edges.map(({ node }) => (
            <a className={projectStyle.Repo} key={node.id}  href={node.url} target="_blank" rel="noopener noreferrer">
              {/* <Card>
                <Content> */}
                <div style={{padding: '1rem 0'}}>
                  <div className={projectStyle.Card}>
                    <h4 style={{color: '#212121'}}><b>{node.name}</b></h4>
                    <p style={{color: '#707070'}}>{node.description}</p>
                </div>
                {/* </Content>
                <Stats> */}
                  <div className={projectStyle.Stats}>
                    <div className={projectStyle.SubStats}>
                      <img style={{margin: '0'}} src={starIcon} alt="stars" />
                      <span className={projectStyle.img}>{node.stargazers.totalCount}</span>
                    </div>
                    <div className={projectStyle.SubStats}>
                      <img style={{margin: '0'}} src={forkIcon} alt="forks" />
                      <span className={projectStyle.img}>{node.forkCount}</span>
                    </div>
                  </div>
                {/* </Stats>
              </Card> */}
              </div>
            </a>
          ))}
        </div>
        </div>
        </Container>
        </section>
        )
        }
        




          // {projects.map((project,index) => {
          //   const { title, info, info2, url, repo, img } = project;

  //           return (
  //             <Row key={index}>
  //               <Col lg={4} sm={12}>
  //                 <Fade
  //                   left={isDesktop}
  //                   bottom={isMobile}
  //                   duration={1000}
  //                   delay={500}
  //                   distance="30px"
  //                 >
  //                   <div className="project-wrapper__text">
  //                     <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
  //                     <div>
  //                       <p>
  //                         {info ||
  //                           'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
  //                       </p>
  //                       <p className="mb-4">{info2 || ''}</p>
  //                     </div>
  //                     <a
  //                       target="_blank"
  //                       rel="noopener noreferrer"
  //                       className="cta-btn cta-btn--hero"
  //                       href={url || '#!'}
  //                     >
  //                       See Live
  //                     </a>

  //                     {repo && (
  //                       <a
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                         className="cta-btn text-color-main"
  //                         href={repo}
  //                       >
  //                         Source Code
  //                       </a>
  //                     )}
  //                   </div>
  //                 </Fade>
  //               </Col>
  //               <Col lg={8} sm={12}>
  //                 <Fade
  //                   right={isDesktop}
  //                   bottom={isMobile}
  //                   duration={1000}
  //                   delay={1000}
  //                   distance="30px"
  //                 >
  //                   <div className="project-wrapper__image">
  //                     <a
  //                       href={url || '#!'}
  //                       target="_blank"
  //                       aria-label="Project Link"
  //                       rel="noopener noreferrer"
  //                     >
  //                       <Tilt
  //                         options={{
  //                           reverse: false,
  //                           max: 8,
  //                           perspective: 1000,
  //                           scale: 1,
  //                           speed: 300,
  //                           transition: true,
  //                           axis: null,
  //                           reset: true,
  //                           easing: 'cubic-bezier(.03,.98,.52,.99)',
  //                         }}
  //                       >
  //                         <div data-tilt className="thumbnail rounded">
  //                           <ProjectImg alt={title} filename={img} />
  //                         </div>
  //                       </Tilt>
  //                     </a>
  //                   </div>
  //                 </Fade>
  //               </Col>
  //             </Row>
  //           );
  //         })}
  //       </div>
  //     </Container>
  //   </section>
  // );
// };

export default Projects;
