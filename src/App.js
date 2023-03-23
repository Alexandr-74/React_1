import MyNavbar from "./navbar/MyNavbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Slider from "./slider/Slider";
import Card from "./card/Card";
import Products from "./products/Products";
import Services from "./services/Services";
import About from "./aboutUs/About";
import Diploms from "./Diploms/Diploms";
import Footer from "./Footer/Footer";
import './App.css';


function App() {
  return (
      <>
          <MyNavbar className="margin"/>
          <Slider className="margin"/>
          <Card className="margin"/>
          <Products className="margin"/>
          <Services className="margin"/>
          <About className="margin"/>
          <Diploms className="margin"/>
          <Footer />
      </>
  );
}

export default App;
