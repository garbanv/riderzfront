import React from 'react'
import Layout from '../components/layout';
import {Container, Row, Col, Button} from 'react-bootstrap'
import successImg from '../img/successLogin.png'

export default function successLogin() {
    return (
        <Layout>
            <Container className="successLogin">
                <Row>
                    <Col md={{span:6, offset:3}} className="mt-5 pt-5 text-center">
                        <img src={successImg} className="img-fluid" alt="riderz success"/>
                        <h1 className="azul-oscuro mb-1 mt-5 font-bold">Success Login!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non ligula semphasellus mattis neque urna.</p>
                        <div className="d-flex justify-content-center">
                        <Button
                      variant="primary"
                      type="submit"
                      className="px-5 py-2 d-block  rounded-pill mt-1"
                      style={{backgroundColor:'#26a64d',color:'#fff',border:'1px solid #26a64d'}}
                    >
                      Start
                    </Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
