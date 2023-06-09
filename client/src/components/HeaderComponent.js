import React from "react";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

function Header () {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // const scroll = (id) => {
    //     document.querySelector(id).scrollIntoView({behavior: 'auto'});
    // }
    
    return (
        <header>
            <Container className="py-2 px-0">
                <Navbar className="navbar navbar-dark" expand="lg">
                    <NavbarBrand href="/">
                        <img className="me-2" src="logo.png" height="60px" alt="logo"/>
                    </NavbarBrand>
                    
                    <NavbarToggler onClick={toggle} />
                    
                    <Collapse isOpen={isOpen} navbar>
                        <div className="text-end">
                            <button onClick={toggle} type="button" className="btn-close navbar-toggler" aria-label="Close"></button>
                        </div>

                        <Nav className="ms-auto" navbar>
                            <NavItem className="me-4">
                                <NavLink href="/">
                                    HOME
                                </NavLink>
                            </NavItem>
                            <NavItem className="me-4">
                                <NavLink href="/servicios">
                                    SERVICIOS
                                </NavLink>
                            </NavItem>
                            <NavItem className="me-4">
                                <NavLink href="/proyectos">
                                    PROYECTOS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contactanos">
                                    CONTACTO
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header;