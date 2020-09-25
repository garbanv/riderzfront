import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import Layout from '../components/layout';

export default function ready() {
    return (
        <Layout>
            <Container fluid id="ready" className="ready">
                <Row>
                    <Col md={7} className="readyLeft">
                        <h3>Ok,<span>ready?</span></h3>
                        <p>The best way to discover Riderz is by testing how it works</p>
                    </Col>
                    <Col md={5} className="readyRight">
                        <p>Welcome to the new <br></br> way to work!</p>
                    </Col>
                </Row>
            </Container>
            
        </Layout>
    )
}
