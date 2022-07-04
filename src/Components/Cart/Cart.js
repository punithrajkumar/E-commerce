import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./Cart.css";
import NewCart from "./NewCart";
import CartData from "../../Variables/CartData";


const Cart = () => {
  return (
    <Container>
      <Row className="cart-align">
        {CartData.map((CartVariable, index) => (
          <NewCart CartVariable={CartVariable} key={index}/>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
