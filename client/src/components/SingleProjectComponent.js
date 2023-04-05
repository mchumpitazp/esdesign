import React from "react";
import { Col, Container, Row } from "reactstrap";
import Projects from "./ProjectsComponent";

function SingleProject () {
    return (
        <section id="project">
            <Container id="project-container">
                <Row xs="1" lg="2">
                    <Col lg="5">
                        <div id="project-bg"></div>
                        <div id="project-text">
                            <h4>PROYECTO</h4>
                            <br />
                            <h2 data-aos="fade-up" data-aos-delay="0">RENOVACIÓN HOGAR</h2>
                            <br/>
                            <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </Col>
                    <Col>
                        <div id="project-img"></div>
                    </Col>
                </Row>
            </Container>

            <Projects />
        </section>
    );
}

export default SingleProject;