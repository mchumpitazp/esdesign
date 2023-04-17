import React from "react";
import { Button, Container } from "reactstrap";

function Headline () {
    const animationRef = React.useRef(null);

    React.useEffect(() => {   
        async function subtitleAnimation(i) {
            let professions = ['creamos', 'diseñamos', 'planificamos', 'construimos'];
            const profession = professions[i];

            while (animationRef.current.innerHTML !== "") {
                await new Promise((resolve) => setTimeout(() => {
                    animationRef.current.innerHTML = animationRef.current.innerHTML.replace(/.$/, '');
                    resolve();
                }, 50));
            }
        
            for (let k = 0; k < profession.length; k++) {
                await new Promise((resolve) => setTimeout(() => {
                    animationRef.current.innerHTML += profession.charAt(k);
                    resolve();
                }, 50));
            }
        
            await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    
            return subtitleAnimation((i < 3) ? i + 1 : 0);
        }

        setTimeout(() => subtitleAnimation(1), 1000);
    }, []);

    return (
        <div id="headline">
            <Container>
                <div id="headline-text">
                    <h3 className="m-0" data-aos="fade-up" data-aos-delay="100">Arquitectura y Diseño <span>de Interiores</span></h3>
                    <br/>
                    <br/>
                    <h1 data-aos="fade-up" data-aos-delay="200">
                        En ES Design <br/><span ref={animationRef}>creamos</span><br/> soluciones innovadoras
                    </h1>
                    <br/>
                    <br/>
                    <div id="headline-btn-container">
                        <Button href="/contactanos" color="dark" outline data-aos="fade-up" data-aos-delay="100">
                            Contáctanos
                        </Button>
                    </div>
                </div>
                <div id="hero"></div>
            </Container>
        </div>
    );
}

export default Headline;