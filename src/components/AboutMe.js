import '../App.css';
import React from 'react'
import {Button, ButtonGroup, Card, CardGroup, Carousel, Container, Image, Jumbotron, Row, Col} from 'react-bootstrap';
import jiska from '../images/jiska.jpeg';

function AboutMe() {
    return (
        <div className="AboutMe my-5">
            <Jumbotron className="light-yellow-bg text-white">
                <Row>
                    <Col><Image src={jiska}/></Col>
                    <Col sm={7}>
                        <h1>Hallo Ihr Lieben,<br/>
                            Ich bin Jiska
                            und lasse deinen Traum von einzigartigen Dreadlocks wahr werden mit <span className={"title"}>Foxy Dreads</span>!
                        </h1>
                        <p>
                            Meine Dreadlocks werden von mir handgefertigt, sie bestehen aus hochwertigem Kunsthaar.<br/>
                            Dieses bedeutet:
                            <ul>
                                <li>sie sind langlebig</li>
                                <li>unkompliziert in der Pflege</li>
                                <li>beschädigen das Eigenhaar nicht</li>
                                <li>können Problemlos entfernt und wieder eingesetzt werden</li>
                                <li>uneingeschränkte, individuelle Looks sind möglich</li>
                                <li>jeglicher Schmuck, Bänder, Perlen, Federn, Garn kann eingearbeitet werden</li>
                                <li>verschiedene Längen sind möglich</li>

                            </ul>
                            <h2>
                                *** NEU*** Ich stelle auch Clip-in Dreads her, ganz einfach zum rein und raus clippen .
                                Für einen individuelles Erlebnis ***
                            </h2><br/>
                            Ich stelle einzelne Dreads, aber auch ganze Sets her.
                            Die Locks können Verschickt oder abgeholt werden.
                            Meldet euch gerne bei mir
                            Auch persönliche Treffen sind möglich

                            Ganz liebe Grüße
                            Jiska
                        </p>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
}

export default AboutMe;