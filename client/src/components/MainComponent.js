import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from "./HeaderComponent";
import Headline from "./HeadlineComponent";
import About from "./AboutComponent";
import Services from "./ServicesComponent";
import Projects from "./ProjectsComponent";
import Testimonials from "./TestimonalsComponent";
import Footer from "./FooterComponent";
import SingleProject from "./SingleProjectComponent";
import ServicesPage from "./ServicesPageComponent";
import ProjectsPage from "./ProjectsPageComponent";
import ContactPage from "./ContactPageComponent";

// Redux

function Main () {
    React.useEffect(() => {
        Aos.init({ once: true });
        document.querySelector('body').setAttribute('data-aos-easing', 'slide');
        document.querySelector('body').setAttribute('data-aos-duration', '800');
        document.querySelector('body').setAttribute('data-aos-delay', '0');
    }, []);

    const Home = () => {
        return (
            <React.Fragment>
                <Headline />
                <About />
                <Services />
                <Projects />
                <Testimonials />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<ServicesPage />} />
                <Route path="/proyectos" element={<ProjectsPage />} />
                <Route path="/proyecto" element={<SingleProject />} />
                <Route path="/contactanos" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer /> 
        </React.Fragment>
    );
}

export default Main;