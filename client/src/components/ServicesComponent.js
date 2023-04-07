import React from "react";
import { Container, Row, Col } from "reactstrap";

function Services () {
    return (
        <section id="services">
            <Container>
                <h2 className="section-header">Servicios</h2>
                
                <Row xs="1" sm="2" lg="4">
                    <Col data-aos="fade-up" data-aos-delay="0">
                        <div>
                            <img height="64px" src="/icons/fi-interior.png" />
                            <h4 className="service-name">Diseño Interior</h4>
                            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="100">
                        <div>
                        <img height="64px" src="/icons/fi-renovation.png" />
                            <h4 className="service-name">Arquitectura Residencial</h4>
                            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="200">
                        <div>
                        <img height="64px" src="/icons/fi-planning.png" />
                            <h4 className="service-name">Diseño y Fabricación de Inmobiliario</h4>
                            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="300">
                        <div>
                        <img height="64px" src="/icons/fi-consultant.png" />
                            <h4 className="service-name">Asesoría Styling</h4>
                            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>  
    );
}

export default Services;