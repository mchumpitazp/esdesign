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
                    <h3 className="m-0" data-aos="fade-up" data-aos-delay="100"><i>Arquitectura y Diseño <span>de Interiores</span></i></h3>
                    <br/>
                    <h1 data-aos="fade-up" data-aos-delay="200">
                        <strong>En esDesign <br/><span ref={animationRef}>creamos</span><br/> soluciones innovadoras</strong>
                    </h1>
                    <br/>
                    <Button href="/contactanos" color="dark" outline data-aos="fade-up" data-aos-delay="100">
                        Contáctanos
                    </Button>
                </div>
                <div id="hero"></div>
            </Container>
        </div>
    );
}

export default Headline;