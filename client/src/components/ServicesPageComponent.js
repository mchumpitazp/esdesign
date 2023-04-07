import React from "react";
import Services from "./ServicesComponent";
import Testimonials from "./TestimonalsComponent";

function ServicesPage () {
    React.useEffect(() => {
        document.querySelector('header').style.position = "relative";
    }, [])

    return (
        <div id="services-page">
            <div className="page-header">
                <h1><strong>Servicios</strong></h1>
            </div>

            <Services />
            <Testimonials />
        </div>
    );
}

export default ServicesPage;