import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Button, Col, Image } from "react-bootstrap";
import "./ShopNow.css";
import ShopNowData from "../../Variables/ShopNowData";

const ShopNow2 = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm md={4}>
          <Image
            className="w-100 rounded"
            src={ShopNowData[0].source}
            alt={ShopNowData[0].name}
          />
          <div className="sn-bg">
            <h4>{ShopNowData[0].name}</h4>
            <p>{ShopNowData[0].sninfo}</p>
          </div>
          <Button variant="danger">Shop Now</Button>
        </Col>
        <Col sm md={4}>
          <Image
            className="w-100 rounded"
            src={ShopNowData[1].source}
            alt={ShopNowData[1].name}
          />
          <div className="sn-bg">
            <h4>{ShopNowData[1].name}</h4>
            <p>{ShopNowData[1].sninfo}</p>
          </div>
          <Button variant="danger">Shop Now</Button>
        </Col>
        <Col sm md={4}>
          <Image
            className="w-100 rounded"
            src={ShopNowData[2].source}
            alt={ShopNowData[2].name}
          />
          <div className="sn-bg">
            <h4>{ShopNowData[2].name}</h4>
            <p>{ShopNowData[2].sninfo}</p>
          </div>
          <Button variant="danger">Shop Now</Button>
        </Col>
      </Row>
      <Row>
        <Col sm md={5}>
          <Image
            className="w-100 rounded"
            src={ShopNowData[3].source}
            alt={ShopNowData[3].name}
          />
          <div className="sn-bg">
            <h4>{ShopNowData[3].name}</h4>
            <p>{ShopNowData[3].sninfo}</p>
          </div>
          <Button variant="danger">Shop Now</Button>
        </Col>
        <Col sm md={7}>
          <Image
            className="w-100 rounded"
            src={ShopNowData[4].source}
            alt={ShopNowData[4].name}
          />
          <div className="sn-bg">
            <h4>{ShopNowData[4].name}</h4>
            <p>{ShopNowData[4].sninfo}</p>
          </div>
          <Button variant="danger">Shop Now</Button>
        </Col>
      </Row>
      <Row>
        <Col sm md={6}>
          <Image
            className="w-100 rounded"
            src={ShopNowData[5].source}
            alt={ShopNowData[5].name}
          />
          <div className="sn-bg">
            <h4>{ShopNowData[5].name}</h4>
            <p>{ShopNowData[5].sninfo}</p>
          </div>
          <Button variant="danger">Shop Now</Button>
        </Col>
        <Col sm md={6}>
          <Image
            className="w-100 rounded"
            src={ShopNowData[6].source}
            alt={ShopNowData[6].name}
          />
          <div className="sn-bg">
            <h4>{ShopNowData[6].name}</h4>
            <p>{ShopNowData[6].sninfo}</p>
          </div>
          <Button variant="danger">Shop Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopNow2;
