import React from "react";

// Components
import Header from "./HeaderComponent";
import Headline from "./HeadlineComponent";
import Services from "./ServicesComponent";

// Redux

function Main () {

    return (
        <React.Fragment>
            <Header />
            <Headline />
            <Services />
        </React.Fragment>
    );
}

export default Main;