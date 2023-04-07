import React from "react";
import { Col, Row, Container } from "reactstrap";

function Testimonials () {
    return (    
        <section id="testimonials">
            <Container>
                <h2 className="section-header">Testimonios</h2>

                <Row xs="1" md="2">
                    <Col data-aos="fade-up" data-aos-delay="200">
                        <div className="testimonial">
                            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                            <div>
                                <h5><strong>Alan Crew</strong></h5>
                                <h5>Proyecto Menphis</h5>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="300">
                        <div className="testimonial">
                            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                            <div>
                                <h5><strong>Jessica Perez</strong></h5>
                                <h5>Proyecto Blanco</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials;