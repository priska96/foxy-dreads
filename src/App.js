import React from 'react';
import './App.css';
import {Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Imprint from "./components/Imprint";
import Contact from "./components/Contact";

function App(props) {
    return (
        <Router>
            <div className="App">

                <div className="navigation">
                    <div className="navigation-sub">
                        <Navbar expand="md" fixed="top" className="brown-bg justify-content-end pr-0">
                            <Navbar.Brand href="/" className="flex-grow-2 text-right">
                                <img
                                    src={logo}
                                    className="d-inline-block align-top logo"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto flex-grow-1">
                                    <Nav.Link href="/#home" className="flex-grow-1 text-center">Home</Nav.Link>
                                    <Nav.Link href="/#aboutme" className="flex-grow-1 text-center">Über Mich</Nav.Link>
                                    <Nav.Link href="/#gallery" className="flex-grow-1 text-center">Gallerie</Nav.Link>
                                    <Nav.Link href="/#contact" className="flex-grow-1 text-center">Kontakt</Nav.Link>
                                    <Nav.Link as={Link} to="/impressum" className="flex-grow-1 text-center">Impressum</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <Switch>
                    <Route path={"/"} exact>
                        <a className="anchor" name="home"/>
                        <Home/>
                        <a className="anchor" name="aboutme"/>
                        <AboutMe/>
                        <a className="anchor" name="gallery"/>
                        <Gallery/>
                        <a className="anchor" name="contact"/>
                        <Contact/>
                    </Route>
                    <Route path={"/impressum"} exact component={Imprint}/>
                </Switch>
                <footer>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                 className="bi bi-chevron-double-up" viewBox="0 0 18 18">
                                <path fillRule="evenodd"
                                      d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                                <path fillRule="evenodd"
                                      d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        </a>
                    </div>
                    {/*Copyright*/}
                    <div className="text-center p-3 light-yellow-bg">
                        © 2021 Copyright: <span className="text-dark">Priska Kohnen</span>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;