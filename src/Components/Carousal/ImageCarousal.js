import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Image } from "react-bootstrap";
import Mobile from "./Mobile.jpg";
import Ipod from "./Ipod.jpg";
import Headphone from "./Headphone.jpg";
import "./ImageCarousal.css";

const ImageCarousal = () => {
  return (
    <Carousel className="carousel-adjust" interval={3000}>
      <Carousel.Item className="img-adjust">
        <Image
          className="img-fluid d-block w-100 img-adjust"
          src={Mobile}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="img-fluid d-block w-100 img-adjust"
          src={Ipod}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="img-fluid d-block w-100 img-adjust"
          src={Headphone}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousal;
