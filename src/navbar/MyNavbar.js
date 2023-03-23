import Navbar from 'react-bootstrap/Navbar';
import './MyNavbar.css';
import HorizontalNavItems from "../HorizontalNavItems";
import { ReactComponent as Insta } from '../svg/Insta.svg';
import { ReactComponent as Vk } from '../svg/VK_black.svg';

function MyNavbar() {
    return (
        <Navbar bg="light" variant="light" fixed='top'>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="container-lg d-flex justify-content-around">
                    <Navbar.Brand href="#home"><p className='Brand1'>Студия керамики</p> <p className='Brand2'>Волшебная глина</p></Navbar.Brand>
                    <HorizontalNavItems />
                </div>
                <container className="mb-lg-5">
                    <div className="row">
                        <div className="col-sm-4 my-2 mx-1"><Insta /></div>
                        <div className="col-sm-4 my-2 mx-1"><Vk /></div>
                    </div>
                </container>
            </div>
        </Navbar>
    );
}

export default MyNavbar;