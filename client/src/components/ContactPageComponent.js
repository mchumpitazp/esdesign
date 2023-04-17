import React from "react";
import { Button, Container } from "reactstrap";

function ContactPage () {
    React.useEffect(() => {
        document.querySelector('header').style.position = "relative";
    }, [])

    return (
        <div id="contact-page">
            <div className="page-header">
                <h1>Contacto</h1>
            </div>
            
            <Container id="contact-info">
                <h4 className="text-center" data-aos="fade-up"><i>" Tu visión son nuestros objetivos. Estaremos en contacto para convertir tus proyectos realidad. "</i></h4>
                <br/>

                <Button href="mailto:mchumpitazp@gmail.com" color="dark" outline target="_blank" rel="noopener noreferrer">
                    <small><i className="bi bi-envelope me-2"></i></small>
                    <strong className="me-2">Email:</strong> mchumpitazp@gmail.com
                </Button>
                <Button href="https://wa.me/51901444236" color="dark" outline target="_blank" rel="noopener noreferrer">
                    <small><i className="bi bi-whatsapp me-2"></i></small>
                    <strong className="me-2">Whatsapp:</strong> +51 901 444 236
                </Button>
                <Button href="https://t.me/mchumpitazp" color="dark" outline target="_blank" rel="noopener noreferrer">
                    <small><i className="bi bi-telegram me-2"></i></small>
                    <strong className="me-2">Telegram:</strong> mchumpitazp
                </Button>
            </Container>
        </div>
    );
}

export default ContactPage;