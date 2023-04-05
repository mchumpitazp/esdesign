import React from "react";
import { Col, Container, Row, Button } from "reactstrap";

function Footer () {
    

    return (
        <footer className="py-5">
            <Container>
                <Row xs="1" md="2">
                    <Col className="pb-5 order-md-2">
                        <h4 className="pb-3"><strong>Contact</strong></h4>
                        <div className="d-flex flex-column justify-content-around">
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-geo me-2"></i>
                                <p className="m-0">Lima, Peru</p>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-envelope me-2"></i>
                                <p className="m-0">info@esdesignstudio.com</p>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-telephone me-2"></i>
                                <p className="m-0">+51 (901) 444 236</p>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-shield-check me-2"></i>
                                <a href="https://www.termsfeed.com/live/df0b14f0-ece8-47d0-ade1-9eb74dcb0a16" target="_blank" rel="noreferrer">
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-file-earmark-lock me-2"></i>
                                <a href="https://www.termsfeed.com/live/0a311242-9d59-4157-b70f-14b09b400ca4" target="_blank" rel="noreferrer">
                                    Terms and Conditions
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-between pb-5 order-md-1">
                        <div className="pb-5">
                            <h4 className="pb-3"><strong>Connect with us</strong></h4>
                            <div>
                                <Button >
                                    <i class="bi bi-whatsapp"></i>
                                </Button>
                                <Button className='btn mx-4'>
                                    <i class="bi bi-facebook"></i>
                                </Button>
                                <Button>
                                    <i class="bi bi-instagram"></i>
                                </Button>
                            </div>
                        </div>
                        
                        <div id="footer-logo">
                            <img></img>
                            <span>LOGO</span>
                        </div>
                    </Col>
                </Row>
                <p className="text-center m-0">esDesignStudio &#169; 2023 All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;