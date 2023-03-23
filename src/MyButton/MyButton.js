import {Button} from "react-bootstrap";
import './MyButton.css'

function MyButton({text, className}) {
    return (
        <Button className={"myButton " + className}>{text}</Button>
    );
}

export default MyButton;