import React from "react";
import { Container, Row, Col } from "reactstrap";

function Services () {
    return (
        <section id="services">
            <Container>
                <h2 className="section-header">SERVICIOS</h2>
                
                <Row xs="1" md="3" className="pb-5">
                    <Col data-aos="fade-up" data-aos-delay="0">
                        <div>
                            <img height="64px" src="/icons/fi-interior.png" />
                            <h4 className="service-name">Interior Design</h4>
                            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="100">
                        <div>
                        <img height="64px" src="/icons/fi-renovation.png" />
                            <h4 className="service-name">House Renovation</h4>
                            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="200">
                        <div>
                        <img height="64px" src="/icons/fi-planning.png" />
                            <h4 className="service-name">Planning</h4>
                            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>  
    );
}

export default Services;