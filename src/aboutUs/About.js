import {Container} from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import Image from "react-bootstrap/Image";
import nam from '../png_images/about_images/nam.png';
import play from "../png_images/about_images/play.png";
import './About.css';

function About({className}) {
    return (
        <Container className={className}>
            <Container className="d-flex flex-row align-items-center justify-content-center py-5">
                <h3 className="servicesH">НАША СТУДИЯ</h3>
            </Container>
            <Container className="d-flex flex-row">
                    <Container className="d-flex flex-column justify-content-center align-items-center">
                        <h4 className="aboutH">ПРОВЕДИ ВРЕМЯ С ПОЛЬЗОЙ</h4>
                        <p className="pH">Лепка из глины успокаивает и умиротворяет, поэтому занятия по керамике считаются очень хорошей арттерапией. У нас вы сможете развить новые навыки и хорошо провести время.</p>
                        <MyButton text="ГАЛЕРЕЯ" className="aboutButton"/>
                    </Container>
                    <Container className="d-flex justify-content-center align-items-center">
                        <Image src={nam} />
                        <Image src={play} className="playImage"/>
                    </Container>
            </Container>
        </Container>
    );
}

export default About;