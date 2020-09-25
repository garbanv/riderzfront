import React from 'react';
import Layout from  '../components/layout';
import {Container, Row, Col, Form} from 'react-bootstrap';

export default function firstStep() {
    return (
        <Layout>
            <Container fluid id="firstStep" className="firstStep">
                <Row className="">
                    <Col md={6} sm={12}className="firstStepLeft">
                        <h3 className="azul-claro">Rider  <span className="azul-oscuro">or Freelancer?</span></h3>
                        <p>We would like to know more about you so we will give you information of your interest.</p>
                        <div className="d-flex justify-content-center">
                        <Form>
                        <Form.Check 
                            type="radio"
                         
                            label="Not Yet"
                        />
                        <Form.Check 
                            type="radio"
                            
                            label="Im New"
                        />
                        <Form.Check 
                            type="radio"
                            
                            label="For 1 or 2 years"
                        />
                        <Form.Check 
                            type="radio"
                         
                            label="More than 5 years"
                        />
                         <button className="btn btn-primary" 
                        className=" py-2 d-block  rounded-pill"
                        style={{ backgroundColor: '#05387e', border: 'none', color:'white' }}
                        >Next
                        </button>
                        </Form>
                        </div>
                        <div className="text-center"> 
                       
                        </div>
                        
                    </Col>
                    <Col md={6} className="firstStepRight d-none d-sm-block">
                        <p>Take the first step</p>
                       
                    </Col>
                </Row>
            </Container>
            
        </Layout>
    )
}
