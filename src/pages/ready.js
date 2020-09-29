import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Layout from '../components/layout';
import upadloadIcon from '../img/uploadIcon.png';
import seePlansIcon from '../img/seePlansIcon.png';
import keepNavigatingIcon from '../img/keepNavigatingIcon.png';

export default function ready() {
  return (
    <Layout>
      <Container fluid id="ready" className="ready">
        <Row>
          <Col md={7} className="readyLeft">
              <Container>
            <h3>
              Ok,<span>ready?</span>
            </h3>
            <p>The best way to discover <strong>Riderz</strong> is by testing how it works</p>

            <div className="readyCard shadow py-3 px-4 mb-3" id="uploadInvoiceCard">
              <Row>
                <Col md={2} sm={12}>
                  <img src={upadloadIcon} />
                </Col>
                <Col md={7} sm={6} xs={6}>
                  <h4>Upload Invoice</h4>
                  <p className="d-none d-sm-block">It wont take to much time!</p>
                </Col>
                <Col md={3} sm={6} xs={6} className="readyCardButtonContainer">
                  <Link
                  to="/createInvoice"
                    type="submit"
                    className=" rounded-pill readyCardUploadBtn"
                  >
                    Upload
                  </Link>
                </Col>
              </Row>
            </div>

            <div className="readyCard shadow py-3 px-4 mb-3" id="seeThePlansCard">
              <Row>
                <Col md={2} sm={12}>
                  <img src={seePlansIcon} />
                </Col>
                <Col md={7} sm={6} xs={6}>
                  <h4>See the plans</h4>
                  <p className="d-none d-sm-block">We have payment options!</p>
                </Col>
                <Col md={3} sm={6} xs={6} className="readyCardButtonContainer">
                  <Link
                    type="submit"
                    className="rounded-pill readyCardPlansBtn"
                  >
                    Contract
                  </Link>
                </Col>
              </Row>
            </div>


            <div className="readyCard shadow py-3 px-4 mb-3" id="keepNavigatingCard">
              <Row>
                <Col md={2} sm={12}>
                  <img src={keepNavigatingIcon} />
                </Col>
                <Col md={7} sm={6} xs={6}>
                  <h4>Keep navigating</h4>
                  <p className="d-none d-sm-block">Its a nice site and you will get a nice tax job!</p>
                </Col>
                <Col md={3} sm={6} xs={6} className="readyCardButtonContainer">
                  <Button
                    type="submit"
                    className=" rounded-pill readyCardKeepBtn"
                  >
                    Go
                  </Button>
                </Col>
              </Row>
            </div>
            </Container>
          </Col>
          <Col md={5} className="readyRight d-none d-sm-block">
            <p>
              Welcome to the new <br></br> way to work!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
