import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCarousel from "./ProjectCarouselComponent";

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
                            <h2 data-aos="fade-up" data-aos-delay="0"><strong>Renovación Hogar</strong></h2>
                            <br/>
                            <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </Col>
                    <Col>
                       <ProjectCarousel />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SingleProject;