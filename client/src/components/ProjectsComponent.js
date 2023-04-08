import React from "react";
import { Row, Col } from "reactstrap";

function Projects () {
    return (
        <section id="projects">
            
                <h2 id="projects-header" className="section-header">Proyectos</h2>
                {/* <h2 id="more-work" className="section-header">Otros Trabajos</h2> */}
                
                <div id="unique-project">
                    <a href="/proyecto">
                        <Row xs="1" sm="2" md="3">
                            <Col className="d-none d-md-block">
                                <figure className="img-container">
                                    <img src="/images/proyectos/saenz-1.jpg" className="img-fluid"/>
                                </figure>
                            </Col>
                            <Col>
                                <figure className="img-container">
                                    <img src="/images/proyectos/saenz-2.jpg" className="img-fluid"/>
                                </figure>
                            </Col>
                            <Col className="d-none d-sm-block">
                                <figure className="img-container">
                                    <img src="/images/proyectos/saenz-3.jpg" className="img-fluid"/>
                                </figure>
                            </Col>
                        </Row>
                        <div id="unique-content">
                            <h3><strong>Renovación Hogar</strong></h3>
                            <h4>Construction</h4>
                        </div>
                    </a>
                </div>
                
                {/* <Row xs="1" md="2" lg="3">
                    <Col>
                        <div className="single-project">
                            <a href="">
                                <img src="/temp/proyect1.jpg" className="img-fluid"/>
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
                                <img src="/temp/proyect2.jpg" className="img-fluid"/>
                                <div className="single-project-content">
                                    <h3>Project Two</h3>
                                    <h4>Construction</h4>
                                </div>
                            </a>  
                        </div>
                    </Col>
                    <Col>
                        <div className="single-project">
                            <a href="/proyectos">
                                <img src="/temp/proyect3.jpg" className="img-fluid"/>
                                <div className="single-project-content">
                                    <h3>Project Three</h3>
                                    <h4>Construction</h4>
                                </div>
                            </a>  
                        </div>
                    </Col>
                </Row>  */}
                
        </section>
    );
}

export default Projects;