import '../App.css';
import React from 'react'
import {Button, Container, Form, Jumbotron} from 'react-bootstrap';

function Contact() {
    return (
        <div className="Contact">
            {/*<Container className="d-flex justify-content-center align-items-center aboutme-header">*/}
            {/*    */}
            {/*</Container>*/}
            <Jumbotron className="light-yellow-bg">

            <h1>Contact</h1>
                <Container>
                <p className="w-md-75 w-100 mx-auto contact-text">
                    Du hast Lust auf eine Haarveränderung oder Spaß daran Neues auszuprobieren? Schreib mir an
                    <a href="mailto:priskakohnen@gmail.com" className="highlight">jiskakkohnen@gmail.com</a> oder
                    benutze direkt hier das Kontaktformular!
                </p>
                    <Form className="w-md-75 w-100 mx-auto" action="https://formspree.io/f/xzbkkyjn" method="POST">
                        <Form.Row className="justify-content-between m-0">
                            <Form.Group controlId="formEmail">
                                <Form.Label>Deine Email</Form.Label>
                                <Form.Control type="email" name="email" required={true} placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label>Dein Name</Form.Label>
                                <Form.Control type="text" name="name" required={true} placeholder="Enter full name"/>
                            </Form.Group>
                        </Form.Row>
                         <Form.Group controlId="formMessage">
                            <Form.Label>Deine Nachricht</Form.Label>
                            <Form.Control as="textarea" name="message" required={true} rows={3} placeholder="Enter message"/>
                          </Form.Group>
                        <Button variant="loading" type="submit">Senden</Button>
                    </Form>
                    </Container>
            </Jumbotron>
        </div>
    );
}

export default Contact;