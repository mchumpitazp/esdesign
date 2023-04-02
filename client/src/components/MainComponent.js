import React from "react";

// Components
import Header from "./HeaderComponent";
import Headline from "./HeadlineComponent";
import Services from "./ServicesComponent";
import Projects from "./ProjectsComponent";

// Redux

function Main () {

    return (
        <React.Fragment>
            <Header />
            <Headline />
            <Services />
            <Projects />
        </React.Fragment>
    );
}

export default Main;