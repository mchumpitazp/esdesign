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
                            <img height="64px" src="/icons/fi-1.png" alt="fi-icon-1"/>
                            <h4 className="service-name">Diseño Interior</h4>
                            <p>Libere todo el potencial de su espacio con nuestros excepcionales servicios de diseño de interiores, dando vida a su visión con estilo y funcionalidad.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="100">
                        <div>
                        <img height="64px" src="/icons/fi-2.png" alt="fi-icon-2"/>
                            <h4 className="service-name">Arquitectura Residencial</h4>
                            <p>Experimente el arte de vivir con nuestros visionarios servicios de arquitectura residencial, creando espacios que reflejan su estilo de vida y gusto únicos.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="200">
                        <div>
                        <img height="64px" src="/icons/fi-3.png" alt="fi-icon-3"/>
                            <h4 className="service-name">Diseño y Fabricación de Inmobiliario</h4>
                            <p>Convierta su visión inmobiliaria en realidad con soluciones perfectas para crear propiedades excepcionales.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="300">
                        <div>
                        <img height="64px" src="/icons/fi-4.png" alt="fi-icon-4"/>
                            <h4 className="service-name">Asesoría Styling</h4>
                            <p>Maximice las posibilidades de su espacio con el asesoramiento styling, dando vida a sus ideas creativas con soluciones personalizadas.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>  
    );
}

export default Services;