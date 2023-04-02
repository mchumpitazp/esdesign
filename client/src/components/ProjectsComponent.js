import React from "react";
import { Container, Row, Col } from "reactstrap";

function Projects () {
    return (
        <section id="projects">
            <Container>
                <h2 className="section-header">Our Projects</h2>

                <Row xs="1" md="2" lg="3">
                    <Col>
                        <div className="single-project">
                            <a href="">
                                <img src="hero.jpg" className="img-fluid"/>
                                <div className="single-project-content">
                                    <h3>Project One</h3>
                                    <h4>Construction</h4>
                                </div>
                            </a>    
                        </div>
                    </Col>
                    <Col>
                        <div className="single-project">
                            <a href="">
                                <img src="hero.jpg" className="img-fluid"/>
                                <div className="single-project-content">
                                    <h3>Project Two</h3>
                                    <h4>Construction</h4>
                                </div>
                            </a>  
                        </div>
                    </Col>
                    <Col>
                        <div className="single-project">
                            <a href="">
                                <img src="hero.jpg" className="img-fluid"/>
                                <div className="single-project-content">
                                    <h3>Project Three</h3>
                                    <h4>Construction</h4>
                                </div>
                            </a>  
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;