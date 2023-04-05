import React from "react";
import { Container } from "reactstrap";

function Headline () {
    const animationRef = React.useRef(null);

    React.useEffect(() => {   
        async function subtitleAnimation(i) {
            let professions = ['Creamos', 'Diseñamos', 'Planificamos', 'Construimos'];
            const profession = professions[i];

            while (animationRef.current.innerHTML !== "") {
                await new Promise((resolve) => setTimeout(() => {
                    animationRef.current.innerHTML = animationRef.current.innerHTML.replace(/.$/, '');
                    resolve();
                }, 70));
            }
        
            for (let k = 0; k < profession.length; k++) {
                await new Promise((resolve) => setTimeout(() => {
                    animationRef.current.innerHTML += profession.charAt(k);
                    resolve();
                }, 70));
            }
        
            await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    
            return subtitleAnimation((i < 3) ? i + 1 : 0);
        }

        setTimeout(() => subtitleAnimation(1), 1000);
    }, []);

    return (
        <section id="headline">
            <Container>
                <div id="headline-text">
                    <h1 data-aos="fade-up" data-aos-delay="100">
                        <strong><span ref={animationRef}>Creamos</span><br/> soluciones creativas e innovadoras</strong>
                    </h1>
                </div>
                <div id="hero"></div>
            </Container>
        </section>
    );
}

export default Headline;