import Carousel from 'react-bootstrap/Carousel';
import {Button, Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import anne from "../png_images/first_slide/anne.png";
import pew from "../png_images/first_slide/pew.png";
import uX2xpl from "../png_images/first_slide/uX2xpl.png";
import k58Az from "../png_images/second_slide/k58Az.png";
import mN1DXZ from "../png_images/second_slide/mN1DXZ.png";
import vqqMUD from "../png_images/second_slide/vqqMUD.png";
import anni from "../png_images/third_slide/anni.png";
import gerald from "../png_images/third_slide/gerald.png";
import toa from "../png_images/third_slide/toa.png";
import './slider.css'
import MyButton from "../MyButton/MyButton";


function Slider({className}) {
    return (
        <Carousel variant="dark" interval="200000" className={className}>
            <Carousel.Item>
                <Container className="d-flex justify-content-center">
                    <Image src={pew} className="px-1"/>
                    <Image src={anne} className="px-1"/>
                    <Image src={uX2xpl} className="px-1"/>
                </Container>
                <Carousel.Caption>
                    <h3 className="myHForSlider">ПРИГЛАШАЕМ НА ЗАНЯТИЯ ВЗРОСЛЫХ И ДЕТЕЙ</h3>
                    <MyButton text={"ЗАПИСАТЬСЯ НА КУРСЫ"} className="sliderButton"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="d-flex justify-content-center">
                    <Image src={k58Az} className="px-1"/>
                    <Image src={vqqMUD} className="px-1"/>
                    <Image src={mN1DXZ} className="px-1"/>
                </Container>
                <Carousel.Caption>
                    <h3 className="myHForSlider">Работы наших уеников</h3>
                    <MyButton text={"ФОТО И ВИДЕО"} className="sliderButton"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="d-flex justify-content-center">
                    <Image src={anni} className="px-1"/>
                    <Image src={gerald} className="px-1"/>
                    <Image src={toa} className="px-1"/>
                </Container>
                <Carousel.Caption>
                    <h3 className="myHForSlider">У НАС МОЖНО ПРИОБРЕСТИ</h3>
                    <MyButton text={"ТОВАРЫ И УСЛУГИ"} className="sliderButton"/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;