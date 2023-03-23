import {Col, Container, Row} from "react-bootstrap";
import group from '../png_images/footer_images/group.svg';
import phone from '../png_images/footer_images/phone.svg';
import vk_black from '../png_images/footer_images/VK_black.svg';
import './Footer.css';
import Image from "react-bootstrap/Image";

function Footer() {
    return (
        <Container fluid className="footer d-flex flex-column justify-content-center align-items-center">
            <h5 className="footerH">Связаться с нами</h5>
            <Container>
                <Row className="py-1">
                    <Col md={5} className="d-flex justify-content-end">
                        <Image src={phone}/>
                    </Col>
                    <Col className="d-flex align-items-end gap-1">
                        <p className="footerP phoneNumber">+7 (902) 606-99-67</p>
                    </Col>
                </Row>
                <Row className="py-1">
                    <Col md={5} className="d-flex justify-content-end">
                        <Image src={vk_black}/>
                    </Col>
                    <Col>
                        <a className="footerP">https://vk.com/studiakeramiki</a>
                    </Col>
                </Row>
                <Row className="py-1">
                    <Col md={5}  className="d-flex justify-content-end">
                        <Image src={group}/>
                    </Col>
                    <Col>
                        <p className="footerP">г. Магнитогорск, Карла Маркса, 48</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;