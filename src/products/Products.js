import {Container} from "react-bootstrap";
import b49b227 from "../png_images/products_images/b49b227.png";
import matt from "../png_images/products_images/matt.png";
import diana from "../png_images/products_images/diana.png";
import CommonCard from "../common/CommonCard";
import '../products/ProductsCard.css';

function Products() {
    return (
        <Container fluid="xl" className="d-flex flex-row">
            <CommonCard src={b49b227} className="myProductCard" name="Бижутерия" classNameP=""/>
            <CommonCard src={matt} className="myProductCard" name="Скульптуры" classNameP=""/>
            <CommonCard src={diana} className="myProductCard" name="Посуда" classNameP=""/>
        </Container>
    );
}

export default Products;