import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

// Components
import Header from "./HeaderComponent";
import Headline from "./HeadlineComponent";
import Services from "./ServicesComponent";
import Projects from "./ProjectsComponent";
import Footer from "./FooterComponent";
import SingleProject from "./SingleProjectComponent";

// Redux

function Main () {
    React.useEffect(() => {
        Aos.init({ once: true });
        document.querySelector('body').setAttribute('data-aos-easing', 'slide');
        document.querySelector('body').setAttribute('data-aos-duration', '800');
        document.querySelector('body').setAttribute('data-aos-delay', '0');
    }, []);

    return (
        <React.Fragment>
            <Header />
            <SingleProject />
            {/* <Headline />
            <Services />
            <Projects /> */}
            <Footer /> 
        </React.Fragment>
    );
}

export default Main;