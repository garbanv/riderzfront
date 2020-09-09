import React from 'react';
import Riderz from '../img/riderz.png';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Layout from '../components/layout';
import { FaCheckCircle } from 'react-icons/fa';

function App() {

const [login,setLogin] = useState({
  loginEmail:"",
  password:""
})

async function handleLogin(e){

  e.preventDefault();
const fetchData =  await fetch('users/login',{
      method:'POST',
      credentials: 'include',
      headers:{
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...login})
  })
 const response =  await fetchData;
 const res = console.log(response)

}


  return (
    <>
      <Layout>
        <Container fluid id="loginContainer">
          <Row>
            <Col md={6} id="loginLeft">
              <Row id="loginForm">
                <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="text-center verde-claro font-bold">
                    Welcome!
                  </h1>
                  <p className="text-center text-white">
                    Login to your account
                  </p>
                  <Form className="">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="azul-claro">Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={login.loginEmail} onChange={(e)=>{
                        setLogin({...login,loginEmail:e.target.value})
                      }}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="azul-claro">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" value={login.loginEmail} onChange={(e)=>{
                        setLogin({...login,loginEmail:e.target.value})
                      }}/>
                    </Form.Group>
                    <Link to="/resetPassword" className="d-block mb-3">
                      <small className="font-italic mb-5">
                        Forgot password?
                      </small>
                    </Link>
                    <Button
                      variant="primary"
                      type="submit"
                      className="px-5 py-2 d-block btn-block rounded-pill"
                      style={{backgroundColor:'#05387e',border:'none'}}
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                    <p className="text-center mt-2 mb-2 or">Or</p>

                    <Button
                      variant="primary"
                      type="submit"
                      className="px-5 py-2 d-block btn-block rounded-pill"
                      style={{backgroundColor:'#187cb8',border:'none'}}
                    >
                      Login with Facebook
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col md={6} id="loginRight">
              <Row>
                <Col md={{span:6, offset:3}}>
                <h1 className="font-bold azul-oscuro text-center mb-5">Don't worry and <span className="verde-claro font-bold">simplify</span> your life as a freelancer</h1>
                
                <p className="azul-oscuro text-center mt-5"><FaCheckCircle /> Digitize and control your epenses and sales</p>
                <p className="azul-oscuro text-center"><FaCheckCircle /> Create and send invoices</p>
                <p className="azul-oscuro text-center"><FaCheckCircle /> Know the net result and have a forecast of your taxes</p>
                <p className="azul-oscuro text-center"><FaCheckCircle /> Anticipate the collection of your bills</p>
                <p className="azul-oscuro text-center"><FaCheckCircle /> Connect your bank and control your treasury</p>
                <p className="azul-oscuro text-center"><FaCheckCircle /> File your taxes with our agency</p>
                <Button
                      variant="primary"
                      type="submit"
                      className="px-5 py-2 d-block btn-block rounded-pill mt-5"
                      style={{backgroundColor:'transparent',color:'#26a64d',border:'1px solid #26a64d'}}
                    >
                      Sign Up
                    </Button>

                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default App;
