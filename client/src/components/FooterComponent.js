import React from "react";
import { Col, Container, Row, Button } from "reactstrap";

function Footer () {
    

    return (
        <footer>
            <Container>
                <Row xs="1" md="2">
                    <Col className="pb-5 order-md-2">
                        <h4 className="pb-3"><strong>Contáctanos</strong></h4>
                        <div className="d-flex flex-column justify-content-around">
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-envelope me-2"></i>
                                <p className="m-0">info@esdesignstudio.com</p>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-telephone me-2"></i>
                                <p className="m-0">+51 (901) 444 236</p>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-geo me-2"></i>
                                <p className="m-0">Lima, Peru</p>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-shield-check me-2"></i>
                                <a target="_blank" rel="noreferrer">
                                    Política de Privacidad
                                </a>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-file-earmark-lock me-2"></i>
                                <a target="_blank" rel="noreferrer">
                                    Terminos y Condiciones
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-between pb-5 order-md-1">
                        <div className="pb-5">
                            <h4 className="pb-3"><strong>Conecta con nosotros</strong></h4>
                            <div>
                                <Button href="https://wa.me/51901444236" color="dark" outline target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp"></i>
                                </Button>
                                <Button className='btn mx-4'>
                                    <i className="bi bi-facebook"></i>
                                </Button>
                                <Button>
                                    <i className="bi bi-instagram"></i>
                                </Button>
                            </div>
                        </div>
                        
                        <a id="footer-logo" href="/">
                            <img src="logo.png" height="70px" alt="logo-footer"/>
                        </a>
                    </Col>
                </Row>
                <p className="text-center m-0">ES Design Studio &#169; 2023 All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;