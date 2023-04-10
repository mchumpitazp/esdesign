import React from "react";
import Services from "./ServicesComponent";

function ServicesPage () {
    React.useEffect(() => {
        document.querySelector('header').style.position = "relative";
    }, [])

    return (
        <div id="services-page">
            <div className="page-header">
                <h1><strong>Servicios</strong></h1>
            </div>

            <div className="page-phrase">
                <h4 className="text-center" data-aos="fade-up"><i>"Transformando espacios en entornos inspiradores: nuestros servicios de arquitectura y diseño de interiores hace realidad sus sueños de diseño con soluciones innovadoras y excelencia colaborativa".</i></h4>
            </div>

            <Services />
        </div>
    );
}

export default ServicesPage;