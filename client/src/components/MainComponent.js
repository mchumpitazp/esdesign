import React from "react";

// Components
import Header from "./HeaderComponent";
import Headline from "./HeadlineComponent";
import Services from "./ServicesComponent";
import Projects from "./ProjectsComponent";
import Footer from "./FooterComponent";

// Redux

function Main () {

    return (
        <React.Fragment>
            <Header />
            <Headline />
            <Services />
            <Projects />
            <Footer />
        </React.Fragment>
    );
}

export default Main;