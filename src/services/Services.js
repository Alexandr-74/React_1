import {Container} from "react-bootstrap";
import JXEz from "../png_images/services_photo/JXEz.png";
import YMTlLafL from "../png_images/services_photo/YMTlLafL.png";
import rAeFOV from "../png_images/services_photo/rAeFOV.png";
import './Services.css';
import CommonCard from "../common/CommonCard";
function Services({className}) {
    return (
        <div className={"myServiceArea container-fluid " + className}>
            <Container className="d-flex flex-row align-items-center justify-content-center py-5">
                <h3 className="servicesH">УСЛУГИ</h3>
            </Container>
            <Container className="d-flex flex-row justify-content-center">
                <CommonCard src={rAeFOV} className="myServiceCont" name="ДЕНЬ РОЖДЕНИЯ С КЕРАМИКОЙ"  classNameP="serviceP"/>
                <CommonCard src={YMTlLafL} className="myServiceCont" name="ФОТОСЕССИЯ"  classNameP="serviceP"/>
                <CommonCard src={JXEz} className="myServiceCont" name="СВИДАНИЕ ЗА ГОНЧАРНЫМ КРУГОМ" classNameP="serviceP"/>
            </Container>
        </div>
    );
}

export default Services;