import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCarousel from "./ProjectCarouselComponent";
import Testimonials from "./TestimonalsComponent";

function SingleProject () {
    React.useEffect(() => {
        document.querySelector('header').style.position = "relative";
    }, [])

    return (
        <div id="project">
            <Container>
                <Row xs="1" lg="2" className="g-5">
                    <Col>
                        <div className="text-center text-lg-start" id="project-info">
                            <p><strong>PROYECTO</strong></p>
                            <br />
                            <h2 data-aos="fade-up" data-aos-delay="0">Renovación Hogar</h2>
                            <br/>
                            <p data-aos="fade-up" data-aos-delay="100">ES Design completó con éxito un impresionante proyecto de renovación de vivienda que muestra su experiencia en la creación de espacios habitables funcionales y estéticamente agradables. Con una atención meticulosa a los detalles, soluciones de diseño innovadoras y un enfoque en la satisfacción del cliente. El resultado es una transformación del hogar en un oasis moderno que integra estilo, funcionalidad y comodidad para los propietarios.</p>
                        </div>
                    </Col>
                    <Col>
                       <ProjectCarousel />
                    </Col>
                </Row>

                <Testimonials />
            </Container>
        </div>
    );
}

export default SingleProject;