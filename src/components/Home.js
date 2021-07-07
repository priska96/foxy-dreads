import '../App.css';
import React, {useState, useEffect} from 'react'
import {Button, Container, Card, Jumbotron} from 'react-bootstrap';
import header from '../images/header.jpg'

function Home() {
    return (
        <div className="Home d-flex flex-column justify-content-center">
            <Card className="header overflow-hidden mb-5">
                <Card.Img src={header}/>
                <Card.ImgOverlay className="d-flex align-items-center">
                    <h1 className="flex-grow-1 glow">
                        <span className={"title"}>Foxy Dreads</span><br/>
                        <h3>Dein Traum von Dreadlocks wird wahr</h3>
                    </h1>
                </Card.ImgOverlay>
            </Card>
            <Jumbotron className="our-concept light-yellow-bg text-white mb-5">
                <h1>Dreads</h1>
                <span className="devider"/>
                <h4 className={"text-left"}>
                    Es gibt im Prinzip zwei Arten von Dreadlocks, die ich euch kurz erklären möchte.<br/><br/>
                    <b>SE Dreads:</b><br/>
                    sind einzelne Dreads mir nur einem Ende, sie besitzen oben eine Schalufe. Dort kommt die Haarsträhne
                    durch. Der Dread ist sogesehen die Dritte Strähne zum Flechten.<br/><br/>
                    <b>DE Dreads:</b><br/>
                    sind sehr lange Dreads mit zewi Enden, welche mittig geknickt werden. Der Dread wird um die
                    Haarstähne gelegt. Der Dread ist sogesehen die Dritte Strähne zum Flechten. Gemessen wird di Länge
                    des bereits geknickten Dreads. So hat man die Tragelänge bei eingeflochtenen Dreads.
                </h4>
            </Jumbotron>
        </div>
    );
}

export default Home;
