import React, {useState} from 'react';
import DLayout from '../components/dashboardLayout';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import NavLogo from '../img/navLogoAzul.png';
import DummyImg from '../img/profile-dummy.png';
import { Link } from 'react-router-dom';
import upadloadIcon from '../img/uploadIcon.png';

export default function CreateInvoice() {

    const [invoice,setInvoice] =useState({
        name:'',
        invoiceNumber:'',
        file:'',
        services:'',
        client:'',
        invoiceDate:'',
        totalProvisionServices:'',
        iva:'',
        irpf:'',
        total:'',
        iban:''
      })


      async function handleInvoice(e){

        e.preventDefault();
      const fetchData =  await fetch('http://localhost:7000/users/signup',{
            method:'POST',
            headers:{
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': '*',
              'Access-Control-Allow-Headers': '*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({...invoice})
        })
       const response =  await fetchData;
       const res = console.log(response)
      
      }

  return (
    <DLayout>
      <Container fluid id="dashboardContainer">
        <Row>
          <Col md={2} id="sidenav" className="shadow ">
            <div className="sidenavHeader p-4 d-flex flex-column justify-content-center align-items-center">
            <Link to="/"><img src={NavLogo} className="mb-3 " /></Link>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="avatar img-fluid mb-3"
              />
              <small className="ml-2">Alexei Garban</small>
            </div>
            <div className="dashboardNav">
              <Link to="/dashboard">Dashboard</Link>
              <Link>Profile</Link>
              <Link to="/invoices"className="azul-oscuro font-weight-bold active">
                Invoices
              </Link>
              <Link>Expenses</Link>
              <Link>Taxes</Link>
            </div>
          </Col>
          <Col md={10} id="dashboardContent" className="py-3 px-5">
            <Row className="mb-4 dashboardTop">
              <Col md={8}>
                <h1>Invoice</h1>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-end align-items-center  mt-3 ml-auto"
              >
                <Link className="accountBtn">Account</Link>
              </Col>
            </Row>

            <Row id="contactDetails">
              <Col md={12} className="contactDetails py-3 shadow">
                <h3 className="font-weight-bold">Contact Details</h3>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">Name</Form.Label>
                      <Form.Control
                        type="text"
                        // placeholder="Name"
                        onChange={(e)=>{
                            setInvoice({...invoice,name:e.target.value})
                          }}/>
                    
                    </Form.Group>

                    <Form.Group controlId="">
                    <Form.Label>Provision of services</Form.Label>
                    <Form.Control as="select"  onChange={(e)=>{
                            setInvoice({...invoice,services:e.target.value})
                          }}>
                    <option>Freelance</option>
                    <option>Other</option>
                    </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                      <Form.Group controlId="">
                      <Form.Label className="azul-claro">Invoice Number</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e)=>{
                            setInvoice({...invoice,invoiceNumber:e.target.value})
                          }}/>
                   
                    </Form.Group>

                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">Invoice Date</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={(e)=>{
                            setInvoice({...invoice,invoiceDate:e.target.value})
                          }}/>
                     
                    </Form.Group>
                    </Col>
                  <Col md={4}>
                  <Form.Group controlId="">
                  <Form.File 
                    id="custom-file-translate-html"
                    label="Upload file"
                    data-browse="search"
                    custom
                    onChange={(e)=>{
                        setInvoice({...invoice,file:e.target.value})
                      }}/>
           
                    </Form.Group>

                    <div className="d-flex justify-content-end align-item-center"><Link className="yourTaxesBtn">Edit</Link></div>
                  </Col>
                </Row>
              </Col>
            </Row>



            <Row id="invoiceDetails" className="py-4">
              <Col md={12} className="invoiceDetails py-3 shadow">
                <h3 className="font-weight-bold">Invoice Details</h3>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="">
                    <Form.Label>Client</Form.Label>
                    <Form.Control as="select"  onChange={(e)=>{
                            setInvoice({...invoice,client:e.target.value})
                          }}>
                    <option value="glovoapp">Glovoapp</option>
                    <option value="ubereats">Uber East</option>
                    <option value="deliveroo">Deliveroo</option>
                    </Form.Control>
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                        <Form.Group controlId="">
                    <Form.Label>I.V.A</Form.Label>
                    <Form.Control as="select"  onChange={(e)=>{
                            setInvoice({...invoice,iva:e.target.value})
                          }}>
                    <option value="21">21%</option>
                    <option value="12">12%</option>
                    <option value="4">4%</option>
                    </Form.Control>
                    </Form.Group>

                        </Col>
                        <Col md={6}>
                        <Form.Group controlId="">
                    <Form.Label>I.R.P.F</Form.Label>
                    <Form.Control as="select"  onChange={(e)=>{
                            setInvoice({...invoice,irpf:e.target.value})
                          }}>
                    <option value="0">0%</option>
                    <option value="12">12%</option>
                    <option value="20">20%</option>
                    </Form.Control>
                    </Form.Group>
                        </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                      <Form.Group controlId="">
                      <Form.Label className="azul-claro">Total provision if services</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e)=>{
                            setInvoice({...invoice,totalProvisionServices:e.target.value})
                          }}/>
                    </Form.Group>

                    <Form.Group controlId="">
                      <Form.Label className="azul-claro">Total</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e)=>{
                            setInvoice({...invoice,total:e.target.value})
                          }}/>
                    </Form.Group>
                    </Col>
                  <Col md={4}>
           

                    <div className="d-flex justify-content-end align-item-center"><Link className="yourTaxesBtn">Edit</Link></div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row id="invoiceDetails" className="py-4">
              <Col md={12} className="invoiceDetails py-3 shadow">
                <h3 className="font-weight-bold">Charge Method</h3>
                <Row>
                  <Col md={9}>
                  <Form.Group controlId="">
                      <Form.Label className="azul-claro">IBAN</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e)=>{
                            setInvoice({...invoice,iban:e.target.value})
                          }}/>
                  
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                  <div className="d-flex flex-colums justify-content-end align-item-center"><Link className="yourTaxesBtn">Edit</Link></div>

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="py-5">
                <Col md={12}>
                    <div className="text-center">
                    <Link className="saveInvoicesBtn" onClick={handleInvoice}>Save Invoice</Link>
                    </div>
                </Col>
            </Row>

            <section className="dashboardFooter py-5">
              <Container>
                <Row>
                  <Col md={3}></Col>
                  <Col md={2}>
                    <small className="text-center">Responsability Policy</small>
                  </Col>
                  <Col md={2} className="">
                    <small className="text-center">Privacy Policy</small>
                  </Col>
                  <Col md={2}>
                    <small className="text-center">Cookie Policy</small>
                  </Col>
                  <Col md={3}></Col>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>
      </Container>
    </DLayout>
  );
}
