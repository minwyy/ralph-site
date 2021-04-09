import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';
// require('dotenv').config();

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, description1, description2, img } = hero;

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
  // console.log(process.env.github);

  return (
    <section id="hero">
      <Container>
        <Row>
          <Col md={8} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                {title || 'Hi. I am'}{' '}
                <span className="text-color-main">{name || 'Ralph'}{' '}</span>
                {subtitle || ", a membrane scientist and environmental chemist."}
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
              <h1 className="hero-desc">
                {description1}
                <span style={{fontWeight: 600}}>thin film composite membranes</span>
                {' in '}
                <a href=''>
                  Membranes
                </a>
                {'.'}
              </h1>
              <h1 className="hero-desc">
                {description2}
              </h1>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
        </Row>
        <div style={{marginTop: '60px'}}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-button">
                <p className="hero-cta">
                  <a className="cta-btn cta-btn--hero" href="#about" rel="noopener noreferrer">About Ralph</a>
                </p>
                <p className="hero-cta">
                  <a className="cta-btn cta-btn--hero" href="#about" rel="noopener noreferrer">Research</a>
                </p>
                <p className="hero-cta">
                  <a className="cta-btn cta-btn--hero" href="#about" rel="noopener noreferrer">Publication</a>
                </p>
                <p className="hero-cta">
                  <a className="cta-btn cta-btn--hero" href="#about" rel="noopener noreferrer">{'News & Features'}</a>
                </p>
                <p className="hero-cta">
                  <a className="cta-btn cta-btn--hero" href="#about" rel="noopener noreferrer">Gallery</a>
                </p>
                <p className="hero-cta">
                  <a className="cta-btn cta-btn--hero" href="#about" rel="noopener noreferrer">Contact</a>
                </p>
              </div>
          </Fade>
         </div>
      </Container>
    </section>
  );
};

export default Header;
