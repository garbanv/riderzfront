import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import riderzAsesoriaLogo from '../img/asesoriaLogo.png';
import newsletterArrowicon from '../img/newsletterArrowIcon.png';
import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai';

export default function footer() {
  return (
    <>
    <section id="footer" className="">
      <Container>
        <Row>
          <Col md={4} className="py-5 ">
            <img src={riderzAsesoriaLogo} />
          </Col>

          <Col md={4} className="py-5 px-5 footerTop2">
            <Link>Crew Riderz</Link>
            <Link>Blog</Link>
            <Link className="font-weight-bold">FAQ</Link>
            <Link>Inferable expense guide</Link>
            <Link>Contact</Link>
          </Col>

          <Col md={4} className="newsletter">
            <Row className="newsletterTop py-5 px-5">
            <p className="mb-4 text-white">Subscribe to our newsletter</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">
                  <img src={newsletterArrowicon} />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            </Row>
            <Row className="newsletterBottom py-5 px-5">
                <Col md={12}>
                <p className="mb-4 text-white">RRSS to our newsletter</p>
            <div className="d-flex justify-content-between">
                <FaFacebook/>
                <AiFillTwitterCircle/>
                <AiFillInstagram/>

            </div>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="footerBottom py-3">
      <Container>
        <Row>
        <Col md={3}></Col>
        <Col md={2}><small className="text-center">Responsability Policy</small></Col>
        <Col md={2} className="footerBottom2"><small className="text-center">Privacy Policy</small></Col>
        <Col md={2}><small className="text-center">Cookie Policy</small></Col>
        <Col md={3}></Col>
        </Row>
        </Container>

    </section>
    </>
  );
}
