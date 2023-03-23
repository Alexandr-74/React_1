import {Container} from "react-bootstrap";
import Diplom1 from '../png_images/diploms_images/Diplom_1.png';
import Diplom2 from '../png_images/diploms_images/Diplom_2.png';
import Diplom3 from '../png_images/diploms_images/Diplom_3.png';
import Image from "react-bootstrap/Image";

function Diploms({className}) {
    return (

        <Container className={className + " d-flex flex-column align-items-center justify-content-center"}>
            <Container className="d-flex justify-content-center py-5">
                <h3 className="servicesH">НАШИ НАГРАДЫ</h3>
            </Container>
            <Container className="d-flex align-content-md-around gap-5">
                <Image src={Diplom1}/>
                <Image src={Diplom2}/>
                <Image src={Diplom3}/>
            </Container>
        </Container>
    );
}

export default Diploms;