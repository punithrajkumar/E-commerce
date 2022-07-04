import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Col } from "react-bootstrap";
import "./Cart.css";
import { useState } from "react";

const NewCart = (props) => {
  const [counter, setCounter] = useState(1);

  const setAddToCart = (id) => {
    alert(counter + " " + id + " added to the cart");
  };
  return (
    <Col sm={2} className="d-none d-lg-block col-set">
      <Image
        className="w-100 rounded img-size cart-img"
        src={props.CartVariable.source}
      ></Image>
      <h4>{props.CartVariable.name}</h4>
      <p>{props.CartVariable.price}</p>
      <input
        className="cart-area-width"
        type="number"
        id={props.CartVariable.id}
        onChange={(event) => setCounter(event.target.value)}
        value={counter}
        min={"1"}
        max={"100"}
      ></input>
      <br />
      <Button
        onClick={() => setAddToCart(props.CartVariable.name)}
        className="cart-area-width"
        variant="danger"
      >
        Add to Cart
      </Button>
    </Col>
  );
};

export default NewCart;
