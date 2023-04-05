import React from "react";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

function Header () {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <header>
            <Container className="py-2 px-0">
                <Navbar expand="lg">
                    <NavbarBrand>Logo</NavbarBrand>
                    
                    <NavbarToggler onClick={toggle} />
                    
                    <Collapse isOpen={isOpen} navbar>
                        <div className="text-end">
                            <button onClick={toggle} type="button" class="btn-close navbar-toggler" aria-label="Close"></button>
                        </div>

                        <Nav className="ms-auto" navbar>
                            <NavItem className="me-5">
                                <NavLink active>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem className="me-5">
                                <NavLink>
                                    Servicios
                                </NavLink>
                            </NavItem>
                            <NavItem className="me-5">
                                <NavLink>
                                    Proyectos
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    Contáctanos
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