import React from 'react';
import Layout from '../components/layout';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function NearlyThere() {
  return (
    <Layout>
      <Container fluid id="NearlyThere" className="NearlyThere">
        <Row className="">
          <Col md={6} sm={12} className="NearlyThereLeft">
            <h3 className="azul-claro">
              Before <br></br> <span className="azul-oscuro">further...</span>
            </h3>
            <p>
              Tell us your data to digitize your invoices and save them
              associated with your NIF/CIF.{' '}
              <span className="azul-oscuro font-weight-bold">
                Make sure they are correct!
              </span>
            </p>

            <Row>
              <Col md={6}>
                <Form className="">
                  {/* {errMsg ? (
                      <Alert variant="danger">{errMsgCompleteFields}</Alert>
                    ) : null} */}
                  {/* {loading ? <Loader /> : null} */}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="azul-claro">NIF / CIF</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="azul-claro">Postcode</Form.Label>
                    <Form.Control required type="text" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="azul-claro">Country</Form.Label>
                    <Form.Control required type="text" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="azul-claro">
                      IBAN <small>This will be used to pay your taxes</small>
                    </Form.Label>
                    <Form.Control required type="text" />
                    <small>Example: ES662100000000000000</small>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={6} className="">
                <Form.Group>
                  <Form.Label className="azul-claro">Legal Address</Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="azul-claro">City</Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="azul-claro">
                    Social Security Number
                    
                  </Form.Label>
                  <Form.Control required type="text" />
                  <small>Example: ES662100000000000000</small>
                </Form.Group>
              </Col>
            </Row>

                    <Row>
                      <Col md={6}>
                      <Button
                      variant="primary"
                      type="submit"
                      className="d-block  rounded-pill"
                      style={{ backgroundColor: '#05387e', border: 'none' }}
                      
                    >
                      Next
                    </Button>
                      </Col>

                      <Col md={6}>
                        <div className="d-flex justify-content-end">
                      <Button
                      variant=""
                      type="submit"
                      className=" d-block  rounded-pill nearlyThereButtonRight"
                    >
                      Skip
                    </Button>
                    </div>
                      </Col>
                    </Row>

          </Col>
          <Col md={6} className="NearlyThereRight d-none d-sm-block">
            <p>You are almost there!</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
