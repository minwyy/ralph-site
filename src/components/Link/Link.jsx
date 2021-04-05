import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pulse from 'react-reveal/Pulse';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';
// require('dotenv').config();

const Link = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, img } = hero;

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
    <section id="link">
      <Container>
        <Row className="align-items-center">
            <Col>
                <Pulse left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <p className="link-vertical" >
                        About<a className="link-vertical" href="#about">R</a>alph
                    </p>
                </Pulse>
            </Col>
            <Col>
                <Pulse left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <p className="link-vertical">
                        Rese<a className="link-vertical" href="#research">A</a>ch
                    </p>
                </Pulse>
            </Col>
            <Col>
                <Pulse left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <p className="link-vertical">
                        Pub<a className="link-vertical" href="#publication">L</a>ication
                    </p>
                </Pulse>
            </Col>
            <Col>
                <Pulse left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <p className="link-vertical">
                        News<a className="link-vertical" href="#newspost">P</a>ost
                    </p>
                </Pulse>
            </Col>
            <Col>
                <Pulse left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <p className="link-vertical">
                        Teac<a className="link-vertical" href="#about">H</a>ing
                    </p>
                </Pulse>
            </Col>
            <Col>
                <Pulse left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <p className="link-vertical">
                        <a className="link-vertical" href="#gallery">G</a>allery
                    </p>
                </Pulse>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Link;


// <Col>
// <Pulse left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
// <p className="hero-cta">
//     <a className="cta-btn cta-btn--hero" href="#about">
//     {cta || 'Click here to know more'}
//     </a>
// </p>
// </Pulse>
// </Col>
// <Col md={6} sm={12}>
// <Pulse bottom duration={1000} delay={600} distance="30px">
// <div className="about-wrapper__image">
//     <AboutImg alt="profile picture" filename={img} />
// </div>
// </Pulse>
// </Col>