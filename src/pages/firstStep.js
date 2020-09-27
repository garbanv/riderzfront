import React,{useState} from 'react';
import Layout from  '../components/layout';
import {Container, Row, Col, Form} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function FirstStep() {

    const [freelancerTime,setFreelancerTime] = useState('')
    const history = useHistory();

    const handleClick = ()=> {
        sessionStorage.setItem('time_as_freelancer', freelancerTime);
        history.push('/nearlythere');
    }
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
                            value="Not Yet"
                            label="Not Yet"
                            onChange={(e) => {
                             
                                setFreelancerTime(e.target.value);
                              }}
                        />
                        <Form.Check 
                            type="radio"
                            value="Im New"
                            label="Im New"
                            onChange={(e) => {
                             
                                setFreelancerTime(e.target.value);
                              }}
                        />
                        <Form.Check 
                            type="radio"
                            value="For 1 or 2 years"
                            label="For 1 or 2 years"
                            onChange={(e) => {
                           
                                setFreelancerTime(e.target.value);
                              }}
                        />
                        <Form.Check 
                            type="radio"
                            value="More than 5 years"
                            label="More than 5 years"
                            onChange={(e) => {
                           
                                setFreelancerTime(e.target.value);
                              }}
                        />
                         <button className="btn btn-primary" 
                        className=" py-2 d-block  rounded-pill"
                        style={{ backgroundColor: '#05387e', border: 'none', color:'white' }}
                        onClick={handleClick}
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
