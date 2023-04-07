import React from "react";
import Projects from "./ProjectsComponent";
import Testimonials from "./TestimonalsComponent";

function ProjectsPage () {
    React.useEffect(() => {
        document.querySelector('header').style.position = "relative";
    }, [])

    return (
        <div id="projects-page">
            <div className="page-header">
                <h1><strong>Proyectos</strong></h1>
            </div>

            <Projects />   
            <Testimonials /> 
        </div>
    );
}

export default ProjectsPage;