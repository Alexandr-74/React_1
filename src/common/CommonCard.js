import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import './CommonCard.css';

function CommonCard({src, className, name, classNameP}) {
    return (
        <Container fluid='md'>
            <Image src={src} className={className}/>
            <p className= {classNameP + " cardP"}>{name}</p>
        </Container>
    );
}

export default CommonCard;