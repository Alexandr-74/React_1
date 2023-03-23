import {Button, Col, Container, Row} from "react-bootstrap";
import card from "../png_images/card_photo.png";
import Image from "react-bootstrap/Image";
import './Card.css';
import MyButton from "../MyButton/MyButton";

function Card({className}) {
    return (
        <Container fluid="xl" className={"d-flex justify-content-center " + className}>
            <Image src={card}/>
            <Container className="myCardRow d-flex justify-content-center align-items-center flex-column align-content-center">
                <h3 className="myCardH text-center">ИЗГОТОВЛЕНИЕ КЕРАМИКИ НА ВАШ ВКУС НАШИМИ РУКАМИ  </h3>
                <p className="meCardP text-center">Профессиональные художники по художественной керамике сделают для вас лучшие и неповторимые украшения, сувениры и посуду</p>
                <MyButton text="Заказать"/>
            </Container>
        </Container>

    );
}

export default Card;