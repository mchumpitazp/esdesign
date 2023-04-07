import React from "react";
import { Container } from "reactstrap";

function SingleProject () {
    // React.useEffect(() => {
    //     function handleResize () {
    //         if (window.innerWidth < 992) {
    //             document.querySelector('header').style.position = 'static';
    //         } else {
    //             document.querySelector('header').style.position = 'absolute';
    //         }
    //     }
    //     handleResize();
    //     window.addEventListener("resize", handleResize);

    //     return () => window.removeEventListener("resize", handleResize);
    // }, [])

    return (
        <div id="project">
            <div id="project-bg">
                <div id="project-img"></div>
                <Container id="project-container">
                    <div id="project-text">
                        <p><strong>PROYECTO</strong></p>
                        <br />
                        <h2 data-aos="fade-up" data-aos-delay="0">Renovación Hogar</h2>
                        <br/>
                        <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default SingleProject;